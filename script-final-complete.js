/* ========================================
   مطعم بلدي شيك - ملف JavaScript الكامل المحدث
   تطوير: Meta Software
   ======================================== */

// ========== بيانات القائمة المحدثة مع الوصف والتقييم ==========
const menuData = [
    // شوربات
    {
        id: 1,
        name: "شوربة خضار",
        category: "شوربات",
        price: 50,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "شوربة خضار ساخنة بالخضروات الطازجة المتنوعة",
        rating: 4.5,
        ratingCount: 89
    },
    {
        id: 2,
        name: "شوربة لسان",
        category: "شوربات",
        price: 55,
        image: "https://images.unsplash.com/photo-1588566565463-180a5b2090d2?w=400&h=300&fit=crop",
        description: "شوربة لسان عصفور بالصلصة الحمراء الطازجة",
        rating: 4,
        ratingCount: 67
    },
    {
        id: 3,
        name: "شوربة كوارع",
        category: "شوربات",
        price: 170,
        image: "https://images.unsplash.com/photo-1604908815031-ff53e055ef30?w=400&h=300&fit=crop",
        description: "شوربة كوارع غنية بالكولاجين والنكهة الأصيلة",
        rating: 5,
        ratingCount: 145,
        isSpecial: true
    },
    {
        id: 4,
        name: "شوربة حمام",
        category: "شوربات",
        price: 80,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "شوربة حمام دافئة بالتوابل البلدية الأصيلة",
        rating: 4.5,
        ratingCount: 78
    },
    {
        id: 5,
        name: "شوربة كريمة",
        category: "شوربات",
        price: 80,
        image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop",
        description: "شوربة كريمة ناعمة وغنية بنكهة الخضار",
        rating: 4.5,
        ratingCount: 92
    },

    // مقبلات
    {
        id: 6,
        name: "طحينة",
        category: "مقبلات",
        price: 25,
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=400&h=300&fit=crop",
        description: "طحينة سائلة بالليمون والثوم",
        rating: 4,
        ratingCount: 156
    },
    {
        id: 7,
        name: "بابا غنوج",
        category: "مقبلات",
        price: 25,
        image: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=400&h=300&fit=crop",
        description: "باذنجان مشوي بالطحينة والبهارات",
        rating: 4.5,
        ratingCount: 134
    },
    {
        id: 8,
        name: "سلطة بلدي خضراء",
        category: "مقبلات",
        price: 25,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        description: "سلطة خضراء طازجة بالخضروات الموسمية",
        rating: 4,
        ratingCount: 98
    },
    {
        id: 9,
        name: "مخلل",
        category: "مقبلات",
        price: 25,
        image: "https://images.unsplash.com/photo-1589621316382-008455b857cd?w=400&h=300&fit=crop",
        description: "مخلل مشكل بلدي حامض",
        rating: 4,
        ratingCount: 87
    },
    {
        id: 10,
        name: "بنجر",
        category: "مقبلات",
        price: 25,
        image: "https://images.unsplash.com/photo-1590777577543-73678c91f26c?w=400&h=300&fit=crop",
        description: "سلطة بنجر بالليمون والبهارات",
        rating: 4,
        ratingCount: 76
    },
    {
        id: 11,
        name: "ثومية",
        category: "مقبلات",
        price: 30,
        image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400&h=300&fit=crop",
        description: "ثومية كريمية كثيفة القوام",
        rating: 4.5,
        ratingCount: 167
    },
    {
        id: 12,
        name: "كول سلو",
        category: "مقبلات",
        price: 30,
        image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&h=300&fit=crop",
        description: "سلطة كرنب بالمايونيز والجزر",
        rating: 4,
        ratingCount: 112
    },
    {
        id: 13,
        name: "حمص",
        category: "مقبلات",
        price: 25,
        image: "https://images.unsplash.com/photo-1600326644374-5f0e0c600af0?w=400&h=300&fit=crop",
        description: "حمص بالطحينة والليمون",
        rating: 4.5,
        ratingCount: 189
    },
    {
        id: 14,
        name: "بطاطس",
        category: "مقبلات",
        price: 25,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
        description: "سلطة بطاطس باردة",
        rating: 4,
        ratingCount: 98
    },
    {
        id: 15,
        name: "بطاطس فرايز",
        category: "مقبلات",
        price: 50,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
        description: "بطاطس مقلية مقرمشة",
        rating: 4.5,
        ratingCount: 234
    },

    // فتة
    {
        id: 16,
        name: "فتة كوارع",
        category: "فتة",
        price: 330,
        image: "https://images.unsplash.com/photo-1645177628172-a94c30a5e8d2?w=400&h=300&fit=crop",
        description: "فتة كوارع بالخل والثوم والأرز",
        rating: 5,
        ratingCount: 178,
        isSpecial: true
    },
    {
        id: 17,
        name: "فتة موزة ضاني",
        category: "فتة",
        price: 490,
        image: "https://images.unsplash.com/photo-1645177628172-a94c30a5e8d2?w=400&h=300&fit=crop",
        description: "فتة موزة ضاني بالخلطة الخاصة",
        rating: 5,
        ratingCount: 201,
        isSpecial: true
    },
    {
        id: 18,
        name: "فتة موزة بتلو",
        category: "فتة",
        price: 500,
        image: "https://images.unsplash.com/photo-1645177628172-a94c30a5e8d2?w=400&h=300&fit=crop",
        description: "فتة موزة بتلو طرية ولذيذة",
        rating: 5,
        ratingCount: 189,
        isSpecial: true
    },
    {
        id: 19,
        name: "فتة سادة",
        category: "فتة",
        price: 80,
        image: "https://images.unsplash.com/photo-1645177628172-a94c30a5e8d2?w=400&h=300&fit=crop",
        description: "فتة خبز بالأرز والثوم والخل",
        rating: 4,
        ratingCount: 76
    },

    // أطباق رئيسية
    {
        id: 20,
        name: "ورقة لحمة",
        category: "أطباق رئيسية",
        price: 365,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "ورقة لحمة بلدي محشية بالأرز والتوابل",
        rating: 5,
        ratingCount: 156,
        isSpecial: true
    },
    {
        id: 21,
        name: "بورمة",
        category: "أطباق رئيسية",
        price: 300,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "طبق بورمة تقليدي باللحمة والبهارات",
        rating: 4.5,
        ratingCount: 134
    },
    {
        id: 22,
        name: "موزة ضاني خلطة",
        category: "أطباق رئيسية",
        price: 530,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "موزة ضاني كاملة بالخلطة المميزة",
        rating: 5,
        ratingCount: 198,
        isSpecial: true
    },
    {
        id: 23,
        name: "موزة بتلو خلطة",
        category: "أطباق رئيسية",
        price: 500,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "موزة بتلو بالخلطة والبهارات الخاصة",
        rating: 5,
        ratingCount: 187,
        isSpecial: true
    },
    {
        id: 24,
        name: "مزاليكيا",
        category: "أطباق رئيسية",
        price: 350,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "طبق مزاليكيا باللحمة والأرز",
        rating: 4.5,
        ratingCount: 123
    },
    {
        id: 25,
        name: "كتف بتلو",
        category: "أطباق رئيسية",
        price: 700,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        description: "كتف بتلو كاملة مشوية أو مطبوخة",
        rating: 5,
        ratingCount: 167,
        isSpecial: true
    },
    {
        id: 26,
        name: "كتف ضاني",
        category: "أطباق رئيسية",
        price: 750,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        description: "كتف ضاني كاملة بالتوابل البلدية",
        rating: 5,
        ratingCount: 189,
        isSpecial: true
    },
    {
        id: 27,
        name: "فراخ بانيه بالمكرونة",
        category: "أطباق رئيسية",
        price: 280,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        description: "صدور فراخ بانيه مقرمشة مع مكرونة",
        rating: 4.5,
        ratingCount: 145
    },
    {
        id: 28,
        name: "رقاق لحمة",
        category: "أطباق رئيسية",
        price: 220,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "رقاق باللحمة المفرومة والصلصة",
        rating: 4.5,
        ratingCount: 112
    },
    {
        id: 29,
        name: "كبدة دبس رومان",
        category: "أطباق رئيسية",
        price: 120,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كبدة مطبوخة بدبس الرومان",
        rating: 4.5,
        ratingCount: 134
    },
    {
        id: 30,
        name: "سجق شرقي",
        category: "أطباق رئيسية",
        price: 220,
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&h=300&fit=crop",
        description: "سجق شرقي حار بالبهارات الخاصة",
        rating: 4.5,
        ratingCount: 156
    },

    // طواجن
    {
        id: 31,
        name: "طاجن خضار مشكل باللحمة",
        category: "طواجن",
        price: 220,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "طاجن خضار متنوعة مع اللحمة",
        rating: 4.5,
        ratingCount: 98
    },
    {
        id: 32,
        name: "طاجن ورق عنب بالكوارع",
        category: "طواجن",
        price: 320,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "طاجن ورق عنب مع كوارع طرية",
        rating: 5,
        ratingCount: 145,
        isSpecial: true
    },
    {
        id: 33,
        name: "طاجن ورق عنب بالريش",
        category: "طواجن",
        price: 350,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "طاجن ورق عنب مع ريش ضاني",
        rating: 5,
        ratingCount: 134,
        isSpecial: true
    },
    {
        id: 34,
        name: "طاجن عكاوي",
        category: "طواجن",
        price: 320,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "طاجن عكاوي باللحمة والصلصة",
        rating: 4.5,
        ratingCount: 112
    },
    {
        id: 35,
        name: "طاجن كوارع",
        category: "طواجن",
        price: 320,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "طاجن كوارع بالصلصة الحمراء",
        rating: 5,
        ratingCount: 156
    },
    {
        id: 36,
        name: "طاجن بامية",
        category: "طواجن",
        price: 80,
        image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400&h=300&fit=crop",
        description: "طاجن بامية بالصلصة الطازجة",
        rating: 4,
        ratingCount: 87
    },
    {
        id: 37,
        name: "طاجن ملوخية سادة",
        category: "طواجن",
        price: 70,
        image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400&h=300&fit=crop",
        description: "طاجن ملوخية خضراء ناعمة",
        rating: 4,
        ratingCount: 76
    },
    {
        id: 38,
        name: "طاجن ملوخية باللحمة",
        category: "طواجن",
        price: 150,
        image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400&h=300&fit=crop",
        description: "طاجن ملوخية مع قطع اللحمة",
        rating: 4.5,
        ratingCount: 123
    },
    {
        id: 39,
        name: "طاجن لسان باللحمة",
        category: "طواجن",
        price: 200,
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop",
        description: "طاجن لسان عصفور مع اللحمة",
        rating: 4.5,
        ratingCount: 98
    },
    {
        id: 40,
        name: "طاجن ريش بتلو/ضاني",
        category: "طواجن",
        price: 380,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "طاجن ريش مطبوخة بالصلصة",
        rating: 5,
        ratingCount: 167,
        isSpecial: true
    },
    {
        id: 41,
        name: "طاجن لحمة بالبصل",
        category: "طواجن",
        price: 220,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
        description: "طاجن لحمة بالبصل المكرمل",
        rating: 4.5,
        ratingCount: 112
    },

    // مكرونات وأرز
    {
        id: 42,
        name: "مكرونة فرن",
        category: "مكرونات وأرز",
        price: 180,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        description: "مكرونة فرن بالبشاميل والجبنة",
        rating: 4.5,
        ratingCount: 156
    },
    {
        id: 43,
        name: "أرز معمر سادة",
        category: "مكرونات وأرز",
        price: 80,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "أرز معمر بالسمن البلدي",
        rating: 4,
        ratingCount: 89
    },
    {
        id: 44,
        name: "أرز معمر باللحمة",
        category: "مكرونات وأرز",
        price: 180,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "أرز معمر مع قطع اللحمة",
        rating: 4.5,
        ratingCount: 134
    },
    {
        id: 45,
        name: "أرز بسمتي",
        category: "مكرونات وأرز",
        price: 70,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "أرز بسمتي أبيض مفلفل",
        rating: 4,
        ratingCount: 76
    },
    {
        id: 46,
        name: "أرز بالشعرية",
        category: "مكرونات وأرز",
        price: 70,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
        description: "أرز مع الشعرية المحمرة",
        rating: 4,
        ratingCount: 87
    },

    // فراخ وطيور
    {
        id: 47,
        name: "فرخة مشوية",
        category: "فراخ وطيور",
        price: 370,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
        description: "فرخة كاملة مشوية على الفحم",
        rating: 5,
        ratingCount: 178
    },
    {
        id: 48,
        name: "نصف فرخة مشوية",
        category: "فراخ وطيور",
        price: 230,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
        description: "نصف فرخة مشوية بالتوابل",
        rating: 5,
        ratingCount: 145
    },
    {
        id: 49,
        name: "فرخة محشية",
        category: "فراخ وطيور",
        price: 420,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
        description: "فرخة محشية بالأرز والمكسرات",
        rating: 5,
        ratingCount: 189,
        isSpecial: true
    },
    {
        id: 50,
        name: "نصف فرخة ترك",
        category: "فراخ وطيور",
        price: 230,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
        description: "نصف فرخة على الطريقة التركية",
        rating: 4.5,
        ratingCount: 112
    },
    {
        id: 51,
        name: "حمام محشي",
        category: "فراخ وطيور",
        price: 220,
        image: "https://images.unsplash.com/photo-1612525676333-766257238c50?w=400&h=300&fit=crop",
        description: "حمام محشي بالأرز والفريك",
        rating: 5,
        ratingCount: 167,
        isSpecial: true
    },
    {
        id: 52,
        name: "نصف بطة",
        category: "فراخ وطيور",
        price: 425,
        image: "https://images.unsplash.com/photo-1612525676333-766257238c50?w=400&h=300&fit=crop",
        description: "نصف بطة مشوية أو محمرة",
        rating: 5,
        ratingCount: 134,
        isSpecial: true
    },
    {
        id: 53,
        name: "نصف فرخة تندوري",
        category: "فراخ وطيور",
        price: 240,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
        description: "نصف فرخة على الطريقة الهندية",
        rating: 4.5,
        ratingCount: 123
    },
    {
        id: 54,
        name: "فرخة تندوري",
        category: "فراخ وطيور",
        price: 450,
        image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
        description: "فرخة كاملة تندوري بالبهارات الهندية",
        rating: 5,
        ratingCount: 156,
        isSpecial: true
    },

    // محاشي
    {
        id: 55,
        name: "ممبار",
        category: "محاشي",
        price: 150,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "ممبار محشي بالأرز والبهارات",
        rating: 4.5,
        ratingCount: 145
    },
    {
        id: 56,
        name: "محاشي مشكل",
        category: "محاشي",
        price: 120,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "تشكيلة محاشي متنوعة",
        rating: 4.5,
        ratingCount: 134
    },
    {
        id: 57,
        name: "ورق عنب",
        category: "محاشي",
        price: 120,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "ورق عنب محشي بالأرز واللحمة",
        rating: 5,
        ratingCount: 178
    },
    {
        id: 58,
        name: "محشي كرنب",
        category: "محاشي",
        price: 110,
        image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?w=400&h=300&fit=crop",
        description: "كرنب محشي بالأرز واللحمة",
        rating: 4.5,
        ratingCount: 123
    },
    {
        id: 59,
        name: "سمبوسك جبنة",
        category: "محاشي",
        price: 100,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
        description: "سمبوسك محشية بالجبنة",
        rating: 4,
        ratingCount: 112
    },
    {
        id: 60,
        name: "سمبوسك لحمة",
        category: "محاشي",
        price: 120,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
        description: "سمبوسك محشية باللحمة المفرومة",
        rating: 4.5,
        ratingCount: 134
    },

    // أرز خاص
    {
        id: 61,
        name: "كبسة دجاج",
        category: "أرز خاص",
        price: 310,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
        description: "كبسة دجاج على الطريقة الخليجية",
        rating: 5,
        ratingCount: 198,
        isSpecial: true
    },
    {
        id: 62,
        name: "برياني لحمة",
        category: "أرز خاص",
        price: 480,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
        description: "برياني لحمة بالبهارات الهندية",
        rating: 5,
        ratingCount: 189,
        isSpecial: true
    },
    {
        id: 63,
        name: "برياني دجاج",
        category: "أرز خاص",
        price: 310,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
        description: "برياني دجاج بالتوابل الآسيوية",
        rating: 5,
        ratingCount: 167
    },
    {
        id: 64,
        name: "مندي فراخ",
        category: "أرز خاص",
        price: 310,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
        description: "مندي فراخ باللحمة المدخنة",
        rating: 5,
        ratingCount: 178
    },
    {
        id: 65,
        name: "مندي لحمة",
        category: "أرز خاص",
        price: 480,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
        description: "مندي لحمة على الطريقة اليمنية",
        rating: 5,
        ratingCount: 201,
        isSpecial: true
    },

    // ساندوتشات
    {
        id: 66,
        name: "سندوتش كفتة",
        category: "ساندوتشات",
        price: 100,
        image: "https://images.unsplash.com/photo-1619740455993-32e66b3c9e27?w=400&h=300&fit=crop",
        description: "سندوتش كفتة مشوية مع الخضار",
        rating: 4.5,
        ratingCount: 234
    },
    {
        id: 67,
        name: "سندوتش طرب",
        category: "ساندوتشات",
        price: 120,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "سندوتش طرب مشوي بالتوابل",
        rating: 4.5,
        ratingCount: 189
    },
    {
        id: 68,
        name: "سندوتش لحمة",
        category: "ساندوتشات",
        price: 120,
        image: "https://images.unsplash.com/photo-1619740455993-32e66b3c9e27?w=400&h=300&fit=crop",
        description: "سندوتش لحمة مشوية مع الصلصة",
        rating: 4.5,
        ratingCount: 198
    },
    {
        id: 69,
        name: "سندوتش شيش",
        category: "ساندوتشات",
        price: 90,
        image: "https://images.unsplash.com/photo-1619740455993-32e66b3c9e27?w=400&h=300&fit=crop",
        description: "سندوتش شيش كباب مع الخضار",
        rating: 4.5,
        ratingCount: 167
    },
    {
        id: 70,
        name: "سندوتش سجق مشوي",
        category: "ساندوتشات",
        price: 90,
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&h=300&fit=crop",
        description: "سندوتش سجق حار مشوي",
        rating: 4,
        ratingCount: 145
    },

    // مشويات
    {
        id: 71,
        name: "مشكل لحمة وكفتة - ثلث كيلو",
        category: "مشويات",
        price: 400,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "مشكل لحمة مشوية وكفتة (ثلث كيلو)",
        rating: 5,
        ratingCount: 198,
        isSpecial: true
    },
    {
        id: 72,
        name: "مشكل لحمة وكفتة - نصف كيلو",
        category: "مشويات",
        price: 600,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "مشكل لحمة مشوية وكفتة (نصف كيلو)",
        rating: 5,
        ratingCount: 234,
        isSpecial: true
    },
    {
        id: 73,
        name: "مشكل لحمة وكفتة - كيلو",
        category: "مشويات",
        price: 1200,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "مشكل لحمة مشوية وكفتة (كيلو كامل)",
        rating: 5,
        ratingCount: 289,
        isSpecial: true
    },
    {
        id: 74,
        name: "مشكل كباب وكفتة - ثلث كيلو",
        category: "مشويات",
        price: 430,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "مشكل كباب وكفتة مشوي (ثلث كيلو)",
        rating: 5,
        ratingCount: 201
    },
    {
        id: 75,
        name: "مشكل كباب وكفتة - نصف كيلو",
        category: "مشويات",
        price: 645,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "مشكل كباب وكفتة مشوي (نصف كيلو)",
        rating: 5,
        ratingCount: 223
    },
    {
        id: 76,
        name: "مشكل كباب وكفتة - كيلو",
        category: "مشويات",
        price: 1290,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "مشكل كباب وكفتة مشوي (كيلو كامل)",
        rating: 5,
        ratingCount: 267,
        isSpecial: true
    },
    {
        id: 77,
        name: "كفتة - ثلث كيلو",
        category: "مشويات",
        price: 350,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        description: "كفتة ضاني مشوية (ثلث كيلو)",
        rating: 5,
        ratingCount: 189
    },
    {
        id: 78,
        name: "كفتة - نصف كيلو",
        category: "مشويات",
        price: 525,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        description: "كفتة ضاني مشوية (نصف كيلو)",
        rating: 5,
        ratingCount: 212
    },
    {
        id: 79,
        name: "كفتة - كيلو",
        category: "مشويات",
        price: 1050,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
        description: "كفتة ضاني مشوية (كيلو كامل)",
        rating: 5,
        ratingCount: 256,
        isSpecial: true
    },
    {
        id: 80,
        name: "كباب بتلو - ثلث كيلو",
        category: "مشويات",
        price: 450,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كباب بتلو مشوي على الفحم (ثلث كيلو)",
        rating: 5,
        ratingCount: 198,
        isSpecial: true
    },
    {
        id: 81,
        name: "كباب بتلو - نصف كيلو",
        category: "مشويات",
        price: 740,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كباب بتلو مشوي على الفحم (نصف كيلو)",
        rating: 5,
        ratingCount: 234
    },
    {
        id: 82,
        name: "كباب بتلو - كيلو",
        category: "مشويات",
        price: 1350,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كباب بتلو مشوي على الفحم (كيلو كامل)",
        rating: 5,
        ratingCount: 289,
        isSpecial: true
    },
    {
        id: 83,
        name: "كباب ضاني - ثلث كيلو",
        category: "مشويات",
        price: 450,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كباب ضاني مشوي بالبهارات (ثلث كيلو)",
        rating: 5,
        ratingCount: 201,
        isSpecial: true
    },
    {
        id: 84,
        name: "كباب ضاني - نصف كيلو",
        category: "مشويات",
        price: 740,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كباب ضاني مشوي بالبهارات (نصف كيلو)",
        rating: 5,
        ratingCount: 245
    },
    {
        id: 85,
        name: "كباب ضاني - كيلو",
        category: "مشويات",
        price: 1350,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كباب ضاني مشوي بالبهارات (كيلو كامل)",
        rating: 5,
        ratingCount: 298,
        isSpecial: true
    },
    {
        id: 86,
        name: "ريش ضاني - ثلث كيلو",
        category: "مشويات",
        price: 450,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "ريش ضاني مشوية على الفحم (ثلث كيلو)",
        rating: 5,
        ratingCount: 234,
        isSpecial: true
    },
    {
        id: 87,
        name: "ريش ضاني - نصف كيلو",
        category: "مشويات",
        price: 740,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "ريش ضاني مشوية على الفحم (نصف كيلو)",
        rating: 5,
        ratingCount: 267
    },
    {
        id: 88,
        name: "ريش ضاني - كيلو",
        category: "مشويات",
        price: 1350,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "ريش ضاني مشوية على الفحم (كيلو كامل)",
        rating: 5,
        ratingCount: 312,
        isSpecial: true
    },
    {
        id: 89,
        name: "ريش بتلو - ثلث كيلو",
        category: "مشويات",
        price: 450,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "ريش بتلو طرية مشوية (ثلث كيلو)",
        rating: 5,
        ratingCount: 223,
        isSpecial: true
    },
    {
        id: 90,
        name: "ريش بتلو - نصف كيلو",
        category: "مشويات",
        price: 740,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "ريش بتلو طرية مشوية (نصف كيلو)",
        rating: 5,
        ratingCount: 256
    },
    {
        id: 91,
        name: "ريش بتلو - كيلو",
        category: "مشويات",
        price: 1350,
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop",
        description: "ريش بتلو طرية مشوية (كيلو كامل)",
        rating: 5,
        ratingCount: 298,
        isSpecial: true
    },
    {
        id: 92,
        name: "طرب - ثلث كيلو",
        category: "مشويات",
        price: 380,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "طرب مشوي بنكهة مميزة (ثلث كيلو)",
        rating: 4.5,
        ratingCount: 178
    },
    {
        id: 93,
        name: "طرب - نصف كيلو",
        category: "مشويات",
        price: 600,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "طرب مشوي بنكهة مميزة (نصف كيلو)",
        rating: 4.5,
        ratingCount: 201
    },
    {
        id: 94,
        name: "طرب - كيلو",
        category: "مشويات",
        price: 1200,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        description: "طرب مشوي بنكهة مميزة (كيلو كامل)",
        rating: 5,
        ratingCount: 245
    },
    {
        id: 95,
        name: "روزبيف - ثلث كيلو",
        category: "مشويات",
        price: 400,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        description: "روزبيف لحم مشوي (ثلث كيلو)",
        rating: 5,
        ratingCount: 189
    },
    {
        id: 96,
        name: "روزبيف - نصف كيلو",
        category: "مشويات",
        price: 600,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        description: "روزبيف لحم مشوي (نصف كيلو)",
        rating: 5,
        ratingCount: 212
    },
    {
        id: 97,
        name: "روزبيف - كيلو",
        category: "مشويات",
        price: 1200,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        description: "روزبيف لحم مشوي (كيلو كامل)",
        rating: 5,
        ratingCount: 267
    },
    {
        id: 98,
        name: "فيليه - ثلث كيلو",
        category: "مشويات",
        price: 400,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        description: "فيليه لحم طري مشوي (ثلث كيلو)",
        rating: 5,
        ratingCount: 198,
        isSpecial: true
    },
    {
        id: 99,
        name: "فيليه - نصف كيلو",
        category: "مشويات",
        price: 600,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        description: "فيليه لحم طري مشوي (نصف كيلو)",
        rating: 5,
        ratingCount: 223
    },
    {
        id: 100,
        name: "فيليه - كيلو",
        category: "مشويات",
        price: 1200,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        description: "فيليه لحم طري مشوي (كيلو كامل)",
        rating: 5,
        ratingCount: 278,
        isSpecial: true
    },
    {
        id: 101,
        name: "كبدة مشوية - ثلث كيلو",
        category: "مشويات",
        price: 370,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كبدة مشوية بالتوابل (ثلث كيلو)",
        rating: 4.5,
        ratingCount: 167
    },
    {
        id: 102,
        name: "كبدة مشوية - نصف كيلو",
        category: "مشويات",
        price: 500,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كبدة مشوية بالتوابل (نصف كيلو)",
        rating: 4.5,
        ratingCount: 189
    },
    {
        id: 103,
        name: "كبدة مشوية - كيلو",
        category: "مشويات",
        price: 1000,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كبدة مشوية بالتوابل (كيلو كامل)",
        rating: 5,
        ratingCount: 234
    },
    {
        id: 104,
        name: "كلاوي - ثلث كيلو",
        category: "مشويات",
        price: 290,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كلاوي مشوية بالليمون (ثلث كيلو)",
        rating: 4,
        ratingCount: 134
    },
    {
        id: 105,
        name: "كلاوي - نصف كيلو",
        category: "مشويات",
        price: 480,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كلاوي مشوية بالليمون (نصف كيلو)",
        rating: 4,
        ratingCount: 156
    },
    {
        id: 106,
        name: "كلاوي - كيلو",
        category: "مشويات",
        price: 960,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "كلاوي مشوية بالليمون (كيلو كامل)",
        rating: 4.5,
        ratingCount: 189
    },
    {
        id: 107,
        name: "شيش طاووق - ثلث كيلو",
        category: "مشويات",
        price: 250,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        description: "شيش طاووق دجاج متبل (ثلث كيلو)",
        rating: 4.5,
        ratingCount: 198
    },
    {
        id: 108,
        name: "شيش طاووق - نصف كيلو",
        category: "مشويات",
        price: 300,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        description: "شيش طاووق دجاج متبل (نصف كيلو)",
        rating: 4.5,
        ratingCount: 223
    },
    {
        id: 109,
        name: "شيش طاووق - كيلو",
        category: "مشويات",
        price: 600,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        description: "شيش طاووق دجاج متبل (كيلو كامل)",
        rating: 5,
        ratingCount: 267
    },
    {
        id: 110,
        name: "سجق مشوي - ثلث كيلو",
        category: "مشويات",
        price: 270,
        image: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&h=300&fit=crop",
        description: "سجق حار مشوي على الفحم (ثلث كيلو)",
        rating: 4.5,
        ratingCount: 167
    },
    {
        id: 111,
        name: "كفتة فراخ - ثلث كيلو",
        category: "مشويات",
        price: 220,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
        description: "كفتة فراخ مشوية طرية (ثلث كيلو)",
        rating: 4.5,
        ratingCount: 145
    },
    {
        id: 112,
        name: "مشكل ميكس لحوم - نصف كيلو",
        category: "مشويات",
        price: 700,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "تشكيلة لحوم مشوية مختلفة (نصف كيلو)",
        rating: 5,
        ratingCount: 234,
        isSpecial: true
    },
    {
        id: 113,
        name: "مشكل ميكس لحوم - كيلو",
        category: "مشويات",
        price: 1400,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
        description: "تشكيلة لحوم مشوية مختلفة (كيلو كامل)",
        rating: 5,
        ratingCount: 298,
        isSpecial: true
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
