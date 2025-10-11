/* ========================================
   مطعم بلدي شيك - ملف JavaScript الكامل المحدث
   تطوير: Meta Software
   ======================================== */

// ========== بيانات القائمة المحدثة مع الوصف والتقييم ==========
const menuData = [
    // المشويات
    {
        id: 1,
        name: "ريش ضاني كاملة",
        category: "مشويات",
        price: 450,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "ريش ضاني طازجة مشوية على الفحم مع البهارات البلدية الأصيلة",
        rating: 5,
        ratingCount: 127,
        isSpecial: true
    },
    {
        id: 2,
        name: "ريش ضاني نصف",
        category: "مشويات",
        price: 230,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "نصف كيلو ريش ضاني مشوية بعناية فائقة",
        rating: 5,
        ratingCount: 98
    },
    {
        id: 3,
        name: "كباب ضاني كاملة",
        category: "مشويات",
        price: 420,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كباب ضاني بلدي محضر من أجود أنواع اللحم الطازج",
        rating: 5,
        ratingCount: 156,
        isSpecial: true
    },
    {
        id: 4,
        name: "كباب ضاني نصف",
        category: "مشويات",
        price: 215,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "نصف كيلو كباب ضاني مشوي بالبهارات الخاصة",
        rating: 5,
        ratingCount: 89
    },
    {
        id: 5,
        name: "شيش كباب",
        category: "مشويات",
        price: 180,
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop",
        description: "شيش كباب طري ومشوي على الفحم الطبيعي",
        rating: 4.5,
        ratingCount: 134
    },
    {
        id: 6,
        name: "كفتة ضاني",
        category: "مشويات",
        price: 160,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        description: "كفتة ضاني بلدية محضرة بطريقة خاصة ومشوية بإتقان",
        rating: 5,
        ratingCount: 201
    },
    {
        id: 7,
        name: "شيش طاووق",
        category: "مشويات",
        price: 150,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        description: "صدور فراخ متبلة بتتبيلة خاصة ومشوية بعناية",
        rating: 4.5,
        ratingCount: 178
    },
    {
        id: 8,
        name: "فراخ مشوية",
        category: "مشويات",
        price: 200,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
        description: "فراخ كاملة مشوية بالبهارات البلدية اللذيذة",
        rating: 5,
        ratingCount: 143
    },

    // الطواجن
    {
        id: 9,
        name: "طاجن لحمة بالخضار",
        category: "طواجن",
        price: 120,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "طاجن لحمة طازجة مع خضار موسمية مطبوخة بإتقان",
        rating: 4.5,
        ratingCount: 92
    },
    {
        id: 10,
        name: "طاجن لحمة بالبصل",
        category: "طواجن",
        price: 110,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "طاجن لحمة بالبصل المكرمل والصلصة الشهية",
        rating: 4,
        ratingCount: 67
    },
    {
        id: 11,
        name: "طاجن لحمة بالبطاطس",
        category: "طواجن",
        price: 115,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "طاجن لحمة مع بطاطس مقلية ذهبية اللون",
        rating: 4.5,
        ratingCount: 78
    },
    {
        id: 12,
        name: "طاجن لسان عصفور",
        category: "طواجن",
        price: 100,
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop",
        description: "طاجن لسان عصفور بالصلصة الحمراء الطازجة",
        rating: 4,
        ratingCount: 54
    },

    // الوجبات
    {
        id: 13,
        name: "وجبة فراخ شيش",
        category: "وجبات",
        price: 140,
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop",
        description: "وجبة كاملة مع فراخ شيش، أرز، سلطة ومخللات",
        rating: 5,
        ratingCount: 112,
        isSpecial: true
    },
    {
        id: 14,
        name: "وجبة شيش وطاووق",
        category: "وجبات",
        price: 155,
        image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop",
        description: "خليط مميز من الشيش كباب والطاووق مع إضافات",
        rating: 5,
        ratingCount: 98
    },
    {
        id: 15,
        name: "وجبة كفتة بلدي",
        category: "وجبات",
        price: 135,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
        description: "وجبة كفتة بلدي شهية مع أرز وسلطة طازجة",
        rating: 4.5,
        ratingCount: 87
    },
    {
        id: 16,
        name: "وجبة كفتة اسكندراني",
        category: "وجبات",
        price: 130,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
        description: "كفتة اسكندراني مع طحينة وخضار وخبز طازج",
        rating: 4.5,
        ratingCount: 76
    },

    // ساندوتشات
    {
        id: 17,
        name: "سندوتش كفتة مشوي",
        category: "ساندوتشات",
        price: 45,
        image: "https://images.unsplash.com/photo-1619740455993-32e66b3c9e27?w=400&h=300&fit=crop",
        description: "سندوتش كفتة مشوية مع خضار وصلصة خاصة",
        rating: 4.5,
        ratingCount: 234
    },
    {
        id: 18,
        name: "سندوتش شيش طاووق",
        category: "ساندوتشات",
        price: 40,
        image: "https://images.unsplash.com/photo-1619740455993-32e66b3c9e27?w=400&h=300&fit=crop",
        description: "سندوتش طاووق طري مع ثومية وخضار طازجة",
        rating: 5,
        ratingCount: 198
    },
    {
        id: 19,
        name: "سندوتش ريش",
        category: "ساندوتشات",
        price: 50,
        image: "https://images.unsplash.com/photo-1619740455993-32e66b3c9e27?w=400&h=300&fit=crop",
        description: "سندوتش ريش ضاني مشوية بالبهارات البلدية",
        rating: 5,
        ratingCount: 165
    },
    {
        id: 20,
        name: "سندوتش سجق",
        category: "ساندوتشات",
        price: 35,
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&h=300&fit=crop",
        description: "سجق بلدي حار مع صلصة وخضار",
        rating: 4,
        ratingCount: 143
    },
    {
        id: 21,
        name: "سندوتش صغير",
        category: "ساندوتشات",
        price: 30,
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&h=300&fit=crop",
        description: "سندوتش صغير بالبهارات والطحينة",
        rating: 4,
        ratingCount: 121
    },
    {
        id: 22,
        name: "سندوتش كبدة بانيه",
        category: "ساندوتشات",
        price: 38,
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&h=300&fit=crop",
        description: "كبدة بانيه مقرمشة مع خضار وصلصة",
        rating: 4.5,
        ratingCount: 156
    },
    {
        id: 23,
        name: "سندوتش كبدة اسكندراني",
        category: "ساندوتشات",
        price: 40,
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&h=300&fit=crop",
        description: "كبدة اسكندراني بالفلفل الحار والطحينة",
        rating: 5,
        ratingCount: 189
    },

    // التعريف
    {
        id: 24,
        name: "سندوتش طرب",
        category: "تعريف",
        price: 42,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "طرب مشوي بنكهة لا تقاوم مع التوابل",
        rating: 4.5,
        ratingCount: 98
    },
    {
        id: 25,
        name: "رغيف جواوشي بلدي",
        category: "تعريف",
        price: 55,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "رغيف جواوشي بلدي محشي لحمة مفرومة",
        rating: 5,
        ratingCount: 145
    },
    {
        id: 26,
        name: "رغيف جواوشي كوثة",
        category: "تعريف",
        price: 60,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "جواوشي بالكوثة المفرومة والتوابل الخاصة",
        rating: 4.5,
        ratingCount: 87
    },
    {
        id: 27,
        name: "رغيف جواوشي ثالث",
        category: "تعريف",
        price: 58,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "جواوشي بالثالث والبصل المكرمل",
        rating: 4,
        ratingCount: 76
    },
    {
        id: 28,
        name: "رغيف جواوشي بالجبنة الرومي",
        category: "تعريف",
        price: 65,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "جواوشي باللحمة والجبنة الرومي المذابة",
        rating: 5,
        ratingCount: 112,
        isSpecial: true
    },

    // البرجر
    {
        id: 29,
        name: "برجر سچل مع فرايز",
        category: "برجر",
        price: 70,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        description: "برجر لحم طازج مع جبنة وخضار وبطاطس مقلية",
        rating: 4.5,
        ratingCount: 167
    },
    {
        id: 30,
        name: "برجر دبل مع فرايز",
        category: "برجر",
        price: 90,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        description: "برجر دبل لحم بالجبنة والخضار مع فرايز مقرمشة",
        rating: 5,
        ratingCount: 134,
        isSpecial: true
    },

    // مكرونات وأرز
    {
        id: 31,
        name: "مكرونة بالبشاميل واللحمة",
        category: "مكرونات",
        price: 85,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        description: "مكرونة بشاميل باللحمة المفرومة والجبنة",
        rating: 5,
        ratingCount: 198
    },
    {
        id: 32,
        name: "مكرونة بالجبنة",
        category: "مكرونات",
        price: 75,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        description: "مكرونة بالجبنة الموزاريلا المذابة",
        rating: 4.5,
        ratingCount: 145
    },
    {
        id: 33,
        name: "أرز بالخلطة",
        category: "مكرونات",
        price: 60,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "أرز بالخلطة المميزة والمكسرات",
        rating: 4,
        ratingCount: 87
    },
    {
        id: 34,
        name: "أرز بالكبدة",
        category: "مكرونات",
        price: 65,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "أرز بالكبدة والبصل المكرمل",
        rating: 4.5,
        ratingCount: 98
    },
    {
        id: 35,
        name: "فتة سادة",
        category: "مكرونات",
        price: 50,
        image: "https://images.unsplash.com/photo-1645177628172-a94c30a5e8d2?w=400&h=300&fit=crop",
        description: "فتة خبز بالأرز والثوم والخل",
        rating: 4,
        ratingCount: 76
    },
    {
        id: 36,
        name: "فتة بالكبدة",
        category: "مكرونات",
        price: 70,
        image: "https://images.unsplash.com/photo-1645177628172-a94c30a5e8d2?w=400&h=300&fit=crop",
        description: "فتة بالكبدة المتبلة والثوم",
        rating: 4.5,
        ratingCount: 112
    },

    // ورق بلدي
    {
        id: 37,
        name: "ورقة لحمة بلدي",
        category: "ورق",
        price: 95,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "ورقة لحمة بلدي محشية بالأرز والتوابل",
        rating: 5,
        ratingCount: 167,
        isSpecial: true
    },
    {
        id: 38,
        name: "ورقة كبدة بلدي",
        category: "ورق",
        price: 90,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "ورقة كبدة بلدي متبلة بالبهارات الخاصة",
        rating: 4.5,
        ratingCount: 134
    },
    {
        id: 39,
        name: "ورقة سجق بلدي",
        category: "ورق",
        price: 85,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "ورقة سجق بلدي حار ولذيذ",
        rating: 4.5,
        ratingCount: 98
    }
];

// ========== متغيرات عامة ==========
let cart = [];
let orderData = {
    type: '',
    branch: '',
    branchName: '',
    branchPhone: ''
};

// ========== تهيئة الصفحة عند التحميل ==========
document.addEventListener('DOMContentLoaded', function () {
    initParticles();
    displayMenu();
    updateCart();
    initEventListeners();
    loadFavorites();
});

// ========== إنشاء الجزيئات المتحركة ==========
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = (i * 12.5) + '%';
        particle.style.width = (Math.random() * 10 + 8) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = (Math.random() * 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ========== Header Scroll Effect ==========
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== Mobile Menu Toggle ==========
function initEventListeners() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function () {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// ========== Gallery Functions ==========
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryModal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const closeGallery = document.getElementById('closeGallery');

galleryItems.forEach(item => {
    item.addEventListener('click', function () {
        const imageSrc = this.getAttribute('data-image');
        openGalleryModal(imageSrc);
    });
});

function openGalleryModal(imageSrc) {
    if (galleryModal && modalImage) {
        galleryModal.style.display = 'block';
        modalImage.src = imageSrc;
        document.body.style.overflow = 'hidden';
    }
}

function closeGalleryModal() {
    if (galleryModal) {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

if (closeGallery) {
    closeGallery.addEventListener('click', closeGalleryModal);
}

window.addEventListener('click', function (event) {
    if (event.target === galleryModal) {
        closeGalleryModal();
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && galleryModal && galleryModal.style.display === 'block') {
        closeGalleryModal();
    }
});

// ========== إنشاء النجوم للتقييم ==========
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star empty"></i>';
    }

    return stars;
}

// ========== عرض القائمة بالتصميم الجديد ==========
function displayMenu(category = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    menuGrid.innerHTML = '';

    const filteredItems = category === 'all'
        ? menuData
        : menuData.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        const stars = generateStars(item.rating);

        menuItem.innerHTML = `
            ${item.isSpecial ? '<div class="special-offer">🔥 عرض خاص</div>' : ''}
            <button class="favorite-btn" onclick="toggleFavorite(this, ${item.id})">
                <i class="far fa-heart"></i>
            </button>

            <div class="menu-item-image-container">
                <img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">
                <div class="menu-item-image-overlay">
                    <button class="quick-view-btn" onclick="quickView(${item.id})">
                        <i class="fas fa-eye"></i> معاينة سريعة
                    </button>
                </div>
                <div class="menu-item-badge">${item.category}</div>
            </div>

            <div class="menu-item-content">
                <div class="menu-item-header">
                    <div>
                        <h3 class="menu-item-name">${item.name}</h3>
                        ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
                    </div>
                </div>

                <div class="menu-item-footer">
                    <div class="menu-item-price-section">
                        <span class="menu-item-price-label">السعر</span>
                        <div class="menu-item-price">
                            <span class="currency">جنيه</span>
                            ${item.price}
                        </div>
                    </div>

                    <div class="menu-item-rating">
                        <div class="star-rating">
                            ${stars}
                        </div>
                        <span class="rating-count">(${item.ratingCount})</span>
                    </div>
                </div>

                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-shopping-cart"></i>
                    <span>إضافة للسلة</span>
                </button>
                
<!-- ✨ أضف هذا الكود هنا ✨ -->
<button class="rate-product-btn" onclick="event.stopPropagation(); openReviewModal(${item.id})">
    <i class="fas fa-star"></i>
    قيّم المنتج
</button>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });

    // تطبيق حالة المفضلة على الأزرار
    applyFavoriteState();
}

// ========== Category Tabs ==========
document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        displayMenu(this.dataset.category);
    });
});

// ========== زر المفضلة ==========
function toggleFavorite(button, itemId) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');

    if (button.classList.contains('active')) {
        icon.className = 'fas fa-heart';
        showNotification('تمت الإضافة للمفضلة ❤️', 'success');

        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!favorites.includes(itemId)) {
            favorites.push(itemId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    } else {
        icon.className = 'far fa-heart';
        showNotification('تم الحذف من المفضلة', 'info');

        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites = favorites.filter(id => id !== itemId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// ========== تحميل المفضلة ==========
function loadFavorites() {
    setTimeout(() => {
        applyFavoriteState();
    }, 500);
}

function applyFavoriteState() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr) {
            const match = onclickAttr.match(/\d+/);
            if (match) {
                const itemId = parseInt(match[0]);
                if (favorites.includes(itemId)) {
                    btn.classList.add('active');
                    btn.querySelector('i').className = 'fas fa-heart';
                }
            }
        }
    });
}

// ========== معاينة سريعة ==========
function quickView(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="quick-view-content">
            <button class="close-quick-view" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow='auto';">
                <i class="fas fa-times"></i>
            </button>
            <div class="quick-view-grid">
                <div class="quick-view-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="quick-view-info">
                    <span class="quick-view-category">${item.category}</span>
                    <h2>${item.name}</h2>
                    <p class="quick-view-description">${item.description}</p>
                    <div class="quick-view-rating">
                        ${generateStars(item.rating)}
                        <span>(${item.ratingCount} تقييم)</span>
                    </div>
                    <div class="quick-view-price">${item.price} جنيه</div>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id}); this.closest('.quick-view-modal').remove(); document.body.style.overflow='auto';">
                        <i class="fas fa-shopping-cart"></i>
                        إضافة للسلة
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.classList.add('active'), 10);
}

// ========== Cart Functions ==========
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCart();
    showNotification('تم إضافة المنتج للسلة ✓', 'success');
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotalAmount = document.getElementById('cartTotalAmount');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCount) cartCount.textContent = totalItems;
    if (cartTotalAmount) cartTotalAmount.textContent = totalAmount;

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">السلة فارغة</p>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} جنيه</div>
            </div>
            <div class="cart-item-controls">
                <button class="remove-btn" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    updateCart();
    showNotification('تم حذف المنتج من السلة', 'info');
}

// ========== Cart Modal ==========
const floatingCart = document.getElementById('floatingCart');
const cartModal = document.getElementById('cartModal');
const modalClose = document.getElementById('modalClose');

if (floatingCart) {
    floatingCart.addEventListener('click', () => {
        cartModal.classList.add('active');
        showCartView();
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
}

function showCartView() {
    document.getElementById('cartView').style.display = 'block';
    document.querySelectorAll('.checkout-steps').forEach(step => {
        step.classList.remove('active');
    });
}

// ========== Checkout Steps ==========
const proceedToCheckout = document.getElementById('proceedToCheckout');
if (proceedToCheckout) {
    proceedToCheckout.addEventListener('click', () => {
        if (cart.length === 0) {
            showNotification('السلة فارغة! أضف منتجات أولاً', 'error');
            return;
        }
        showStep(1);
    });
}

function showStep(stepNumber) {
    document.getElementById('cartView').style.display = 'none';
    document.querySelectorAll('.checkout-steps').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step${stepNumber}`).classList.add('active');
}

// Step 1: Order Type
document.querySelectorAll('.order-type-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.order-type-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        orderData.type = this.dataset.type;
    });
});

const nextToStep2 = document.getElementById('nextToStep2');
if (nextToStep2) {
    nextToStep2.addEventListener('click', () => {
        if (!orderData.type) {
            showNotification('اختر نوع الطلب أولاً', 'error');
            return;
        }
        showStep(2);
    });
}

// Step 2: Branch Selection
document.querySelectorAll('.branch-option').forEach(option => {
    option.addEventListener('click', function () {
        document.querySelectorAll('.branch-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        orderData.branch = this.dataset.branch;

        if (this.dataset.branch === 'main') {
            orderData.branchName = 'الفرع الرئيسي - السلطان حسين تقاطع صفية زغلول';
            orderData.branchPhone = '03/4876665';
        } else {
            orderData.branchName = 'الفرع الثاني - شارع فؤاد جانب الكورنيش';
            orderData.branchPhone = '01050266004';
        }
    });
});

const nextToStep3 = document.getElementById('nextToStep3');
if (nextToStep3) {
    nextToStep3.addEventListener('click', () => {
        if (!orderData.branch) {
            showNotification('اختر الفرع أولاً', 'error');
            return;
        }

        const tableNumberGroup = document.getElementById('tableNumberGroup');
        const addressGroup = document.getElementById('addressGroup');
        const tableNumber = document.getElementById('tableNumber');
        const customerAddress = document.getElementById('customerAddress');

        if (orderData.type === 'dine-in') {
            tableNumberGroup.style.display = 'block';
            addressGroup.style.display = 'none';
            tableNumber.setAttribute('required', 'required');
            customerAddress.removeAttribute('required');
        } else {
            tableNumberGroup.style.display = 'none';
            addressGroup.style.display = 'block';
            tableNumber.removeAttribute('required');
            customerAddress.setAttribute('required', 'required');
        }

        showStep(3);
    });
}

// Step 3: Customer Information
const nextToStep4 = document.getElementById('nextToStep4');
if (nextToStep4) {
    nextToStep4.addEventListener('click', () => {
        const name = document.getElementById('customerName').value.trim();
        const phone = document.getElementById('customerPhone').value.trim();
        const payment = document.getElementById('paymentMethod').value;

        if (!name || !phone || !payment) {
            showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
            return;
        }

        if (orderData.type === 'dine-in') {
            const table = document.getElementById('tableNumber').value.trim();
            if (!table) {
                showNotification('يرجى إدخال رقم الطاولة', 'error');
                return;
            }
        } else {
            const address = document.getElementById('customerAddress').value.trim();
            if (!address) {
                showNotification('يرجى إدخال العنوان بالتفصيل', 'error');
                return;
            }
        }

        displayOrderSummary();
        showStep(4);
    });
}
// Step 4: Order Summary
function displayOrderSummary() {
    const summary = document.getElementById('orderSummary');
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const paymentMethods = {
        'cash': 'كاش عند الاستلام',
        'card': 'بطاقة ائتمانية',
        'wallet': 'محفظة إلكترونية'
    };

    let summaryHTML = `
        <div class="summary-item">
            <span class="summary-label">نوع الطلب:</span>
            <span class="summary-value">${orderData.type === 'dine-in' ? 'داخل المطعم 🍽️' : 'طلب خارجي (دليفري) 🛵'}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">الفرع:</span>
            <span class="summary-value">${orderData.branchName}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">الاسم:</span>
            <span class="summary-value">${document.getElementById('customerName').value}</span>
        </div>
        <div class="summary-item">
            <span class="summary-label">الهاتف:</span>
            <span class="summary-value">${document.getElementById('customerPhone').value}</span>
        </div>
    `;

    if (orderData.type === 'dine-in') {
        summaryHTML += `
            <div class="summary-item">
                <span class="summary-label">رقم الطاولة:</span>
                <span class="summary-value">${document.getElementById('tableNumber').value}</span>
            </div>
        `;
    } else {
        summaryHTML += `
            <div class="summary-item">
                <span class="summary-label">العنوان:</span>
                <span class="summary-value">${document.getElementById('customerAddress').value}</span>
            </div>
        `;
    }

    summaryHTML += `
        <div class="summary-item">
            <span class="summary-label">طريقة الدفع:</span>
            <span class="summary-value">${paymentMethods[document.getElementById('paymentMethod').value]}</span>
        </div>
        <hr style="margin: 1rem 0; border: none; border-top: 2px solid var(--secondary-color);">
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">المنتجات:</h3>
    `;

    cart.forEach(item => {
        summaryHTML += `
            <div class="summary-item">
                <span class="summary-label">${item.name} × ${item.quantity}</span>
                <span class="summary-value">${item.price * item.quantity} جنيه</span>
            </div>
        `;
    });

    summaryHTML += `
        <hr style="margin: 1rem 0; border: none; border-top: 2px solid var(--secondary-color);">
        <div class="summary-item" style="font-size: 1.3rem; font-weight: 900;">
            <span class="summary-label">الإجمالي:</span>
            <span class="summary-value" style="color: var(--accent-color);">${totalAmount} جنيه</span>
        </div>
    `;

    const notes = document.getElementById('orderNotes').value.trim();
    if (notes) {
        summaryHTML += `
            <hr style="margin: 1rem 0; border: none; border-top: 2px solid var(--secondary-color);">
            <div class="summary-item">
                <span class="summary-label">ملاحظات:</span>
                <span class="summary-value">${notes}</span>
            </div>
        `;
    }

    summary.innerHTML = summaryHTML;
}

// Confirm Order
const confirmOrder = document.getElementById('confirmOrder');
if (confirmOrder) {
    confirmOrder.addEventListener('click', async () => {
        const confirmBtn = document.getElementById('confirmOrder');
        const confirmText = document.getElementById('confirmText');
        const loadingSpinner = document.getElementById('loadingSpinner');

        confirmBtn.disabled = true;
        confirmText.classList.add('hidden');
        loadingSpinner.classList.remove('hidden');

        try {
            await sendOrderToTelegram();

            showNotification('تم إرسال طلبك بنجاح! سنتواصل معك قريباً ✓', 'success');

            cart = [];
            updateCart();
            document.getElementById('orderForm').reset();
            cartModal.classList.remove('active');

            orderData = { type: '', branch: '', branchName: '', branchPhone: '' };

        } catch (error) {
            console.error('Error sending order:', error);
            showNotification('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى', 'error');
        } finally {
            confirmBtn.disabled = false;
            confirmText.classList.remove('hidden');
            loadingSpinner.classList.add('hidden');
        }
    });
}

// ========== Send Order to Telegram ==========
async function sendOrderToTelegram() {
    // ⚠️ ضع هنا التوكن الخاص ببوت تليجرام و Chat ID
    const BOT_TOKEN = '7829090712:AAEsWLymxnoQqS7g_FuHGL0mypcLsM7Avsw';
    const CHAT_ID = '8146437115';

    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const currentTime = new Date().toLocaleString('ar-EG', {
        timeZone: 'Africa/Cairo',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const paymentMethods = {
        'cash': 'كاش عند الاستلام',
        'card': 'بطاقة ائتمانية',
        'wallet': 'محفظة إلكترونية'
    };

    let message = `🍖 *طلب جديد من مطعم بلدي شيك*\n\n`;
    message += `⏰ *الوقت:* ${currentTime}\n`;
    message += `📍 *نوع الطلب:* ${orderData.type === 'dine-in' ? 'داخل المطعم 🍽️' : 'دليفري 🛵'}\n`;
    message += `🏢 *الفرع:* ${orderData.branchName}\n`;
    message += `📞 *هاتف الفرع:* ${orderData.branchPhone}\n\n`;

    message += `━━━━━━━━━━━━━━━━\n`;
    message += `👤 *اسم العميل:* ${document.getElementById('customerName').value}\n`;
    message += `📱 *رقم الهاتف:* ${document.getElementById('customerPhone').value}\n`;

    if (orderData.type === 'dine-in') {
        message += `🪑 *رقم الطاولة:* ${document.getElementById('tableNumber').value}\n`;
    } else {
        message += `📍 *العنوان:* ${document.getElementById('customerAddress').value}\n`;
    }

    message += `💳 *طريقة الدفع:* ${paymentMethods[document.getElementById('paymentMethod').value]}\n`;

    message += `\n━━━━━━━━━━━━━━━━\n`;
    message += `📋 *تفاصيل الطلب:*\n\n`;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   الكمية: ${item.quantity} × ${item.price} = *${item.price * item.quantity} جنيه*\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━\n`;
    message += `💰 *الإجمالي: ${totalAmount} جنيه*\n`;

    const notes = document.getElementById('orderNotes').value.trim();
    if (notes) {
        message += `\n📝 *ملاحظات:* ${notes}`;
    }

    // في بيئة الإنتاج، استخدم fetch لإرسال الرسالة:
    
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

    if (!response.ok) {
        throw new Error('Failed to send order to Telegram');
    }
    

    // للتجربة فقط (محاكاة)
    
}

// ========== Notification System ==========
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const backgroundColor = type === 'success' ? 'var(--primary-color)' :
        type === 'error' ? '#dc3545' : '#17a2b8';

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        font-weight: 600;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);