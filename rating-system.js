/* ========================================
   نظام التقييمات الحقيقي
   ======================================== */

// ========== قاعدة بيانات التقييمات (LocalStorage) ==========
function getReviews(itemId) {
    const reviews = JSON.parse(localStorage.getItem('reviews') || '{}');
    return reviews[itemId] || [];
}

function saveReview(itemId, reviewData) {
    const reviews = JSON.parse(localStorage.getItem('reviews') || '{}');
    if (!reviews[itemId]) {
        reviews[itemId] = [];
    }
    reviews[itemId].push(reviewData);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // تحديث بيانات المنتج في menuData
    updateProductRating(itemId);
}

function updateProductRating(itemId) {
    const reviews = getReviews(itemId);
    const product = menuData.find(item => item.id === itemId);

    if (reviews.length > 0 && product) {
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        product.rating = totalRating / reviews.length;
        product.ratingCount = reviews.length;

        // إعادة عرض القائمة لتحديث التقييم
        const activeTab = document.querySelector('.category-tab.active');
        if (activeTab) {
            displayMenu(activeTab.dataset.category);
        }
    }
}

// ========== فتح modal التقييم ==========
function openReviewModal(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    const modal = document.createElement('div');
    modal.className = 'review-modal';
    modal.id = 'reviewModal';

    const existingReviews = getReviews(itemId);

    modal.innerHTML = `
        <div class="review-modal-content">
            <button class="modal-close" onclick="closeReviewModal()">
                <i class="fas fa-times"></i>
            </button>

            <div class="review-header">
                <img src="${item.image}" alt="${item.name}" class="review-product-image">
                <div>
                    <h2 class="review-product-name">${item.name}</h2>
                    <div class="review-summary">
                        <div class="average-rating">
                            <span class="avg-rating-number">${item.rating.toFixed(1)}</span>
                            <div class="avg-stars">${generateStars(item.rating)}</div>
                            <span class="review-count">(${item.ratingCount} تقييم)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="review-tabs">
                <button class="review-tab active" data-tab="add">إضافة تقييم</button>
                <button class="review-tab" data-tab="view">عرض التقييمات (${existingReviews.length})</button>
            </div>

            <div class="review-content">
                <!-- إضافة تقييم -->
                <div class="review-section active" id="addReviewSection">
                    <form id="reviewForm" class="review-form">
                        <div class="form-group">
                            <label>تقييمك *</label>
                            <div class="star-input" id="starInput">
                                <i class="far fa-star" data-value="1"></i>
                                <i class="far fa-star" data-value="2"></i>
                                <i class="far fa-star" data-value="3"></i>
                                <i class="far fa-star" data-value="4"></i>
                                <i class="far fa-star" data-value="5"></i>
                            </div>
                            <input type="hidden" id="ratingValue" required>
                        </div>

                        <div class="form-group">
                            <label>اسمك *</label>
                            <input type="text" id="reviewerName" required placeholder="أدخل اسمك">
                        </div>

                        <div class="form-group">
                            <label>رقم الهاتف (اختياري)</label>
                            <input type="tel" id="reviewerPhone" placeholder="للتواصل إذا لزم الأمر">
                        </div>

                        <div class="form-group">
                            <label>تعليقك *</label>
                            <textarea id="reviewComment" required rows="4" placeholder="شاركنا تجربتك مع هذا المنتج..."></textarea>
                        </div>

                        <button type="submit" class="submit-review-btn">
                            <i class="fas fa-paper-plane"></i>
                            إرسال التقييم
                        </button>
                    </form>
                </div>

                <!-- عرض التقييمات -->
                <div class="review-section" id="viewReviewsSection">
                    <div class="reviews-list" id="reviewsList">
                        ${displayReviewsList(existingReviews)}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.classList.add('active'), 10);

    // تفعيل نظام النجوم
    initStarRating();

    // تفعيل التبويبات
    initReviewTabs();

    // معالجة إرسال التقييم
    document.getElementById('reviewForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        await submitReview(itemId);
    });
}

function closeReviewModal() {
    const modal = document.getElementById('reviewModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// ========== نظام النجوم التفاعلي ==========
function initStarRating() {
    const stars = document.querySelectorAll('#starInput i');
    const ratingInput = document.getElementById('ratingValue');

    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', function () {
            highlightStars(index + 1);
        });

        star.addEventListener('click', function () {
            const value = this.dataset.value;
            ratingInput.value = value;
            highlightStars(value, true);
        });
    });

    document.getElementById('starInput').addEventListener('mouseleave', function () {
        const currentValue = ratingInput.value;
        if (currentValue) {
            highlightStars(currentValue, true);
        } else {
            highlightStars(0);
        }
    });
}

function highlightStars(count, filled = false) {
    const stars = document.querySelectorAll('#starInput i');
    stars.forEach((star, index) => {
        if (index < count) {
            star.className = filled ? 'fas fa-star' : 'fas fa-star';
            star.style.color = '#FFD700';
        } else {
            star.className = 'far fa-star';
            star.style.color = '#ddd';
        }
    });
}

// ========== تبويبات التقييم ==========
function initReviewTabs() {
    const tabs = document.querySelectorAll('.review-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const sections = document.querySelectorAll('.review-section');
            sections.forEach(s => s.classList.remove('active'));

            if (this.dataset.tab === 'add') {
                document.getElementById('addReviewSection').classList.add('active');
            } else {
                document.getElementById('viewReviewsSection').classList.add('active');
            }
        });
    });
}

// ========== عرض قائمة التقييمات ==========
function displayReviewsList(reviews) {
    if (reviews.length === 0) {
        return `
            <div class="no-reviews">
                <i class="fas fa-star"></i>
                <p>لا توجد تقييمات بعد</p>
                <p class="text-muted">كن أول من يقيم هذا المنتج</p>
            </div>
        `;
    }

    return reviews.map(review => `
        <div class="review-card">
            <div class="review-card-header">
                <div class="reviewer-info">
                    <div class="reviewer-avatar">
                        ${review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h4 class="reviewer-name">${review.name}</h4>
                        <span class="review-date">${formatDate(review.date)}</span>
                    </div>
                </div>
                <div class="review-rating">
                    ${generateStars(review.rating)}
                </div>
            </div>
            <p class="review-comment">${review.comment}</p>
        </div>
    `).join('');
}

// ========== إرسال التقييم ==========
async function submitReview(itemId) {
    const rating = parseInt(document.getElementById('ratingValue').value);
    const name = document.getElementById('reviewerName').value.trim();
    const phone = document.getElementById('reviewerPhone').value.trim();
    const comment = document.getElementById('reviewComment').value.trim();

    if (!rating || !name || !comment) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }

    const reviewData = {
        rating: rating,
        name: name,
        phone: phone,
        comment: comment,
        date: new Date().toISOString()
    };

    // حفظ التقييم
    saveReview(itemId, reviewData);

    // إرسال إشعار لتليجرام
    await sendReviewNotificationToTelegram(itemId, reviewData);

    // إظهار رسالة نجاح
    showNotification('شكراً لك! تم إضافة تقييمك بنجاح ✓', 'success');

    // إغلاق المودال
    setTimeout(() => {
        closeReviewModal();
    }, 1500);
}

async function sendReviewNotificationToTelegram(itemId, reviewData) {
    const BOT_TOKEN = '7829090712:AAEsWLymxnoQqS7g_FuHGL0mypcLsM7Avsw';
    const CHAT_ID = '8146437115';
    
    const item = menuData.find(i => i.id === itemId);
    const currentTime = new Date().toLocaleString('ar-EG', {
        timeZone: 'Africa/Cairo',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const starsEmoji = '⭐'.repeat(reviewData.rating);
    
    let message = `⭐ *تقييم جديد على المنتج*\n\n`;
    message += `📦 *المنتج:* ${item.name}\n`;
    message += `⏰ *الوقت:* ${currentTime}\n\n`;
    
    message += `━━━━━━━━━━━━━━━━\n`;
    message += `👤 *اسم المقيّم:* ${reviewData.name}\n`;
    if (reviewData.phone) {
        message += `📱 *رقم الهاتف:* ${reviewData.phone}\n`;
    }
    message += `${starsEmoji} *التقييم:* ${reviewData.rating}/5\n\n`;
    
    message += `💬 *التعليق:*\n${reviewData.comment}\n\n`;
    
    message += `━━━━━━━━━━━━━━━━\n`;
    message += `📊 *الإحصائيات الجديدة:*\n`;
    message += `⭐ متوسط التقييم: ${item.rating.toFixed(1)}/5\n`;
    message += `📈 عدد التقييمات: ${item.ratingCount}`;
    
    try {
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            console.error('Telegram Error:', result);
            throw new Error('Failed to send review notification');
        }
        
        console.log('✅ تم إرسال التقييم للتليجرام بنجاح!');
        return result;
        
    } catch (error) {
        console.error('❌ خطأ في إرسال التقييم للتليجرام:', error);
    }
}
