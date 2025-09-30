/*
===========================================
AFFILIATE WEBSITE TEMPLATE - CONFIGURATION
===========================================
🎯 CHANGE YOUR MAIN SETTINGS HERE - ONLY EDIT THESE LINES:
*/

// ========== MAIN SETTINGS - EDIT THESE LINES ONLY ==========
const NICHE = "Crypto Casinos";                          // ← Your niche (e.g., "Gaming Laptops", "Coffee Makers")
const PRODUCT_TYPE = "Crypto Casino";                   // ← Product type eg. "Gaming Laptops"
const AUDIENCE = "Global crypto gamblers";                       // ← Target audience eg. "Gamers"
const CONTACT_EMAIL = "contact@RollReviews.com";           // ← Your contact email "eg. contact@yoursite.com"
// const SITE_URL = "{{Site URL}}";                // ← COMMENTED OUT - using smart detection below instead


// 🔧 SMART URL DETECTION (ALTERNATIVE):
// Replace the SITE_URL line above with this code for automatic dev/production switching:

const SITE_URL = (() => {
    // Auto-detect development environment
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' || 
        window.location.hostname.includes('gitpod') ||
        window.location.hostname.includes('codesandbox') ||
        window.location.hostname.includes('stackblitz')) {
        const devUrl = window.location.origin;
        console.log('🔧 Development mode detected - Using URL:', devUrl);
        return devUrl; // Use current development URL
    }
    
    // Production URL - CHANGE THIS to your live domain
    const prodUrl = "https://rollreviews.com";
    console.log('🌍 Production mode detected - Using URL:', prodUrl);
    return prodUrl;
})();


const FAVICON = "./assets/images/casino_test/dice2_icon.png";       // ← Your favicon path (browser tab icon)

// Don't touch INDEX_PAGE_TITLE - it's automatically generated from the settings above
const INDEX_PAGE_TITLE = "Top 10 Crypto Casinos - Best Bitcoin & Crypto Casinos 2025"; // ← Homepage browser tab title 

// ========== TRUST INDICATORS - EDIT THESE ==========
const REVIEW_COUNT = "50 million";                      // ← Number of reviews "+"
const USER_COUNT = "5 million";                         // ← Users helped "+"
const LAST_UPDATE = "September 2025";                   // ← Last updated
const NUMBER_TESTED = "50"                    // ← Products tested "+" this is for the Editor's choice section

// ========== HERO SECTION CONFIGURATION ==========
const HERO_CONFIG = {
    // Hero image settings
    image: {
        src: "./assets/images/casino_test/casino18.jpg",  // ← Change this to use different hero image
        alt: "Top 10 Crypto Casinos",  // ← Alt text for the hero image (shows what the site reviews)
        fallback: "./assets/images/hero-image.jpg"  // ← Fallback image if main image fails to load
    },
    
    // Optional: Video settings
    video: {
        enabled: false,  // ← Set to true to enable video functionality
        src: "./assets/videos/Monti's_test_video.mp4",        // ← Add your video URL here (MP4, WebM, or OGV)
        type: "video/mp4", // ← Video MIME type (video/mp4, video/webm, video/ogg)
        text: "Watch Our Review Video", // ← Placeholder text when no video URL
        autoplay: false, // ← Set to true for autoplay (not recommended)
        muted: false,    // ← Set to true to start muted
        loop: false,     // ← Set to true to loop video
        poster: "",      // ← Optional: Video poster image URL
        
        // Supported video formats and guidelines:
        // MP4: Best compatibility (recommended) - file.mp4
        // WebM: Good for web, smaller file sizes - file.webm  
        // OGV: Ogg format for Firefox - file.ogv
        // 
        // Video Guidelines:
        // - Recommended size: 1920x1080 (Full HD) or 1280x720 (HD)
        // - Duration: 30-60 seconds for hero videos
        // - File size: Keep under 10MB for good loading speed
        // - Format: MP4 H.264 codec for best compatibility
        // - Add captions/subtitles for accessibility
    }
    
    // HERO IMAGE GUIDELINES:
    // - Should show multiple products grouped together
    // - Represents the product category you review (coffee makers, laptops, etc.)
    // - Builds trust by showing you test multiple products
    // - Recommended size: 800x600px minimum (1200x900px preferred)
    // - Supported formats: .jpg, .webp, .png
    // - Alt text should describe what products you review, not "comparison"
};

// Make HERO_CONFIG globally available
window.HERO_CONFIG = HERO_CONFIG;

// ========== EDITOR'S CHOICE CONFIGURATION ==========
const EDITORS_CHOICE_CONFIG = {
    // =============================================
    // CHOOSE YOUR EDITOR'S CHOICE PRODUCT
    // =============================================
    // Option 1: Use any product from your product list
    // Change this to any product key: 'product1', 'product2', 'product3', etc.
    selectedProduct: 'product1',  // ← CHANGE THIS LINE TO SWITCH PRODUCTS
    
    // =============================================
    // EDITOR'S CHOICE BADGE CONFIGURATION
    // =============================================
    badgeSettings: {
        // For product cards: add editor's choice badge next to existing badge
        addToProductCard: true,              // ← Show "EDITOR'S CHOICE" badge on product cards
        replaceProductBadge: false,          // ← Replace product badge with editor's choice badge (set true to replace, false to show both)
        
        // Badge text and styling
        badgeText: "EDITOR'S CHOICE",        // ← Text for the editor's choice badge
        badgeIcon: "fas fa-crown"            // ← Icon for the editor's choice badge
    },
    
    // Option 2: Manual override (set useManualOverride to true)
    useManualOverride: true,     // ← Set to true to use manual data below instead of product data
    
    // Manual override data (only used if useManualOverride is true)
    manualOverride: {
        name: "ROCKETPOT Casino",
        
        // =============================================
        // TITLE DISPLAY CONFIGURATION
        // =============================================
        titleDisplay: {
            type: 'combined',                    // ← 'text', 'image', or 'combined'
            logoImage: './assets/images/casino_test/rocketpot_rocket_2D.png', // ← Logo image path (leave as-is)
            logoScale: 3.0,                  // ← Logo scaling (1.0 = 100%, 1.5 = 150%, etc.)
            logoAlt: 'Rocketpot Casino Logo', // ← Alt text for logo
            gap: '24px'                      // ← Gap between logo and text in combined mode (e.g., '24px', '-10px', '2rem', '-50px' for overlapping)
        },
        description: "Our #1 Editor's Pick - Rocketpot stands out with exceptional security, massive game selection, and industry-leading bonuses. Their instant crypto withdrawals and provably fair gaming make them the gold standard.",
        productLogo: "./assets/images/casino_test/rocketpot_text_logo_white.webp",
        productImage: "./assets/images/casino_test/rocketpot_website.webp",
        rating: 4.9,
        reviewCount: 6547,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "100% Deposit Bonus, up to $10,000",
        welcomePackage: "Tournaments & cash drops daily",
        addedBonus: "Earn up to 20% cashback now!",
        
        // Sports Betting
        signupBonus: "",
        oddsBoost: "",
        freeBet: "",
        
        // Software/SaaS
        monthlyPrice: "",
        yearlyPrice: "",
        trialPeriod: "",
        
        affiliateLink: "https://rocketpot.io/",
        ctaText: "Join Today!",
        
        /*
        logoScale: {
            grid: 1.0,  // Scale for grid view (1.0 = 100%, 1.2 = 120%, etc.)
            list: 1.0   // Scale for list view
        }, */
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0px'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.5rem'       // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: "1st",
        rankBadge: "EDITOR'S PICK",

        // CTA section configuration for detailed reviews
        cta: {
            title: "Play fast. Withdraw faster.",
            description: "Rocketpot's exceptional security, massive game selection, and industry-leading bonuses make them the gold standard.",
            boxInfo: "Hidden Gem in the crypto casino world",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list) - CASINO FEATURES
        features: [
            { text: "Instant crypto withdrawals", icon: "fas fa-bolt" },
            { text: "Multi‑coin support (BTC/ETH/USDT etc.)", icon: "fas fa-coins" },
            { text: "3,000+ slots & live dealer", icon: "fas fa-dice" },
            { text: "Daily tournaments & cash drops", icon: "fas fa-trophy" },
            { text: "Provably fair gaming (select titles)", icon: "fas fa-check" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Crypto casino with instant payouts and rich cashback",
            paragraphs: [
                "Rocketpot pairs a massive game selection with instant crypto withdrawals and a clean, responsive UI. Funding and cashouts are streamlined across major coins.",
                "Ongoing value comes via tournaments, cash drops, and tiered cashback that rewards active play. Support coverage and responsible‑gaming tooling round out a mature product.",
                "If you want a polished, crypto‑first casino that emphasizes speed, bonuses, and variety, Rocketpot is an easy top pick."
            ]
        },
        
        // Perks for product cards and detailed reviews - CASINO PERKS
        perks: [
            { text: "Up to 20% cashback (tiers)", icon: "fas fa-gem" },
            { text: "Multi‑language interface", icon: "fas fa-globe" },
            { text: "Mobile‑first experience", icon: "fas fa-mobile-alt" },
            { text: "24/7 support availability", icon: "fas fa-headset" },
            { text: "Responsible gaming tools", icon: "fas fa-user-shield" }
        ],
        
        // Technical specifications - CASINO SPECS
        specifications: [
            { name: "License", value: "Curaçao", icon: "fas fa-certificate" },
            { name: "Cryptos", value: "BTC, ETH, LTC, BCH, DOGE, USDT (and more)", icon: "fas fa-coins" },
            { name: "Withdrawals", value: "Instant to ~1 hr typical", icon: "fas fa-clock" },
            { name: "Providers", value: "Evolution, Pragmatic, Hacksaw, Nolimit City", icon: "fas fa-th" },
            { name: "Provably Fair", value: "Available on select titles", icon: "fas fa-check" }
        ]
    }
    
    // =============================================
    // HOW THE SYSTEM WORKS:
    // =============================================
    // 1. PRODUCT SELECTION: If useManualOverride = false, the system uses 
    //    the product specified in selectedProduct (e.g., 'product2')
    //    
    // 2. MANUAL OVERRIDE: If useManualOverride = true, the system uses
    //    the custom data from manualOverride object
    //    
    // 3. GOLD STYLING: The selected product gets gold gradient styling
    //    that overrides any theme, making it stand out as editor's choice
    //    
    // 4. SMART SCROLLING: The "Read Full Review" button automatically
    //    scrolls to the correct review section:
    //    - For product selection: scrolls to that product's review
    //    - For manual override: scrolls to special editor's choice review
    //    
    // 5. DYNAMIC REVIEW CARDS: If manual override is used, a special
    //    gold-themed review card is created automatically
    //    
    // EXAMPLES:
    // - selectedProduct: 'product1' → Uses product1 data, scrolls to review-1
    // - selectedProduct: 'product8' → Uses product8 data, scrolls to review-8  
    // - useManualOverride: true → Uses custom data, creates special review card
};

// Make EDITORS_CHOICE_CONFIG globally available
window.EDITORS_CHOICE_CONFIG = EDITORS_CHOICE_CONFIG;

// ========== PRODUCT DATA CONFIGURATION ==========
const PRODUCTS_CONFIG = {
    // Product 1 Configuration - #1 Ranked Gaming Laptop - ASUS ZenBook Pro 14 OLED
    product1: {
        name: "Stake",
        description: "Stake blends 3,000+ games, originals, and a VIP program inside a minimalist, lightning-quick UI. It supports 20+ cryptocurrencies and emphasizes instant crypto withdrawals with no house-imposed limits.",
        productLogo: "./assets/images/casino_test/stake_text_logo_white.png",     // Product logo for content area (leave asset path)
        productImage: "./assets/images/casino_test/stake_website.webp",          // Main product image (leave asset path)
        logoScale: {
            grid: 1.9,
            list: 1.2,
            tablet: {
                grid: 1.5,
                list: 1.2
            }
        },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'center', objectFit: 'cover' } },
        logoPositioning: { grid: { left: '0px', top: '0px' }, list: { left: '0px', top: '0px' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 2.0 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.5rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'center', objectFit: 'cover' }
        },
        rank: 1,
        rankBadge: "TOP UX",
        rating: 4.8,
        reviewCount: 5000,
        badgeSettings: { showOnProductCard: true, showOnDetailedReview: true },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "Daily/weekly races & raffles",
        welcomePackage: "Fast crypto withdrawals with no posted max",
        addedBonus: "Stake Originals (Crash, Plinko, Dice)",
        monthlyPrice: "",
        yearlyPrice: "",
        trialPeriod: "",
        affiliateLink: "https://stake.com/",
        ctaText: "Stake It",
        cta: {
            title: "Ready to Join the Community?",
            description: "Rakeback and VIP rewards",
            boxInfo: "Most popular crypto casino",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "Stake Originals (Crash/Plinko/Dice)", icon: "fas fa-bolt" },
            { text: "20+ cryptocurrencies supported", icon: "fas fa-coins" },
            { text: "Instant crypto withdrawals", icon: "fas fa-exchange-alt" },
            { text: "3,000+ games incl. live dealer", icon: "fas fa-gamepad" },
            { text: "VIP rewards & weekly races", icon: "fas fa-trophy" }
        ],
        fullReview: {
            tagline: "Fast, sleek, crypto-first gaming at scale",
            paragraphs: [
                "Stake nails performance and polish with a clean, instant UI. The catalog spans thousands of games plus Stake Originals, and instant crypto withdrawals with no posted max are a major draw.",
                "Value comes via ongoing races and raffles; VIP perks are responsive. Support live chat opens post-login. Broad coin support and on-ramps make funding simple.",
                "Against rivals, Stake is the speed/UX benchmark. While BC.Game may headline bigger bonus ceilings, Stake's tooling and payouts keep it #1 for all-around crypto casino experience."
            ]
        },
        perks: [
            { text: "No minimum crypto deposit (network fees only)", icon: "fas fa-wallet" },
            { text: "Multi-language + localization", icon: "fas fa-globe" },
            { text: "Rapid VIP response & bonuses", icon: "fas fa-gem" },
            { text: "Mobile-first browser experience", icon: "fas fa-mobile-alt" },
            { text: "Responsible gaming tools", icon: "fas fa-user-shield" }
        ],
        specifications: [
            { name: "License", value: "Curaçao + Brazil SIGAP system", icon: "fas fa-shield-alt" },
            { name: "Cryptos", value: "BTC, ETH, LTC, DOGE, XRP, TRX, USDT/USDC, BNB, MATIC, more", icon: "fas fa-coins" },
            { name: "Withdrawals", value: "Typically 0–1 hr; no posted limits", icon: "fas fa-clock" },
            { name: "Providers", value: "Evolution, Pragmatic, Play'n GO, Hacksaw, Nolimit City", icon: "fas fa-th" },
            { name: "RG Tools", value: "Limits, time-outs, self-exclusion", icon: "fas fa-balance-scale" }
        ]
    },
    
    // Product 2 Configuration - #2 Ranked Gaming Laptop - Dell XPS 15 Plus
    product2: {
        name: "BC.Game",
        description: "BC.Game mixes an 8,000+ game lobby with 'BC Originals' and an active community. Its four-tier deposit bonus architecture headlines the value proposition, plus 24/7 support and crypto-first payments.",
        productLogo: "./assets/images/casino_test/bc.game_text_logo_white.webp",
        productImage: "./assets/images/casino_test/bc.game_website.webp",
        logoScale: { grid: 4.0, list: 2.5, tablet: { grid: 3.2, list: 2.5 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'center', objectFit: 'cover' } },
        logoPositioning: { grid: { left: '0px', top: '0rem' }, list: { left: '0px', top: '0rem' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 4.0 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.25rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top left', objectFit: 'fill' }
        },
        rank: 2,
        rankBadge: "BIG BONUS",
        rating: 4.7,
        reviewCount: 3000,
        badgeSettings: { showOnProductCard: true, showOnDetailedReview: true },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "Up to $20,000 (multi-tier)",
        welcomePackage: "Four-tier matched deposits",
        addedBonus: "Daily cashback & quests",
        monthlyPrice: "",
        yearlyPrice: "",
        trialPeriod: "",
        affiliateLink: "https://bc.game/",
        ctaText: "Unlock Bonus",
        cta: {
            title: "Unlock the 4-tier bonus.",
            description: "Massive ceilings with flexible deposit ladders and micro crypto minimums.",
            boxInfo: "Big headline bonus + 8,000+ games",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "Four-tier matched deposit structure", icon: "fas fa-layer-group" },
            { text: "BC Originals crash/limbo/dice", icon: "fas fa-bolt" },
            { text: "8,000+ games + micro-stakes", icon: "fas fa-gamepad" },
            { text: "24/7 multilingual support", icon: "fas fa-headset" },
            { text: "Integrated sportsbook", icon: "fas fa-futbol" }
        ],
        fullReview: {
            tagline: "Four-tier bonuses, thousands of games",
            paragraphs: [
                "BC.Game suits promo hunters with flexible deposit ladders and tiny crypto minimums for low-friction testing.",
                "Originals and 8,000+ games broaden appeal beyond standard providers; payments are smooth across major coins.",
                "Safety Index ~7/10 at Casino.Guru — for bigger bonuses it's great; for highest safety, see BitStarz/Cloudbet."
            ]
        },
        perks: [
            { text: "Daily/weekly cashback & quests", icon: "fas fa-calendar-check" },
            { text: "Rakeback-style VIP", icon: "fas fa-gem" },
            { text: "Spin-to-win & chat rains", icon: "fas fa-comments" },
            { text: "Tiny crypto minimums", icon: "fas fa-wallet" },
            { text: "Wide coin coverage", icon: "fas fa-coins" }
        ],
        specifications: [
            { name: "License", value: "Curaçao", icon: "fas fa-shield-alt" },
            { name: "Cryptos", value: "BTC, ETH, USDT, XRP, ADA, DOGE, BNB, more", icon: "fas fa-coins" },
            { name: "Min Deposit (promo)", value: "$10+ fiat typical; crypto negligible", icon: "fas fa-dollar-sign" },
            { name: "Live Dealer", value: "550+ tables (Evolution, Playtech)", icon: "fas fa-chess-board" },
            { name: "Sportsbook", value: "Included", icon: "fas fa-futbol" }
        ]
    },
    
    // Product 3 Configuration - #3 Ranked Crypto Casino - Cloudbet
    product3: {
        name: "Cloudbet",
        description: "Since 2013—crypto sportsbook + casino with fast payouts, 35–40+ coins, and a balanced welcome. Strong safety ratings and clear help docs.",
        productLogo: "./assets/images/casino_test/cloudbet_logo.png",
        productImage: "./assets/images/casino_test/cloudbet_website.webp",
        logoScale: { grid: 4.0, list: 2.8, tablet: { grid: 3.0, list: 1.9 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'center', objectFit: 'cover' } },
        logoPositioning: { grid: { left: '0px', top: '0px' }, list: { left: '0px', top: '0px' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 3.0 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.25rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top left', objectFit: 'fill' }
        },
        rank: 3,
        rankBadge: "TRACK RECORD",
        rating: 4.6,
        reviewCount: 2500,
        badgeSettings: { showOnProductCard: true, showOnDetailedReview: true },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "100% up to $2,500 + daily promos",
        welcomePackage: "loyalty rewards",
        addedBonus: "10% Rakeback",
        affiliateLink: "https://www.cloudbet.com",
        ctaText: "Join Now!",
        cta: {
            title: "Start with stablecoins",
            description: "Since 2013 with fast withdrawals and dozens of coins.",
            boxInfo: "High safety marks and clear banking pages",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "Sportsbook + casino hub", icon: "fas fa-futbol" },
            { text: "30–40+ coins incl. stablecoins", icon: "fas fa-coins" },
            { text: "Fast crypto withdrawals", icon: "fas fa-bolt" },
            { text: "2,500+ games + top providers", icon: "fas fa-gamepad" },
            { text: "Daily promos + clear docs", icon: "fas fa-file-alt" }
        ],
        fullReview: {
            tagline: "Since 2013—crypto sportsbook + casino that pays fast",
            paragraphs: [
                "Cloudbet's longevity and strong third‑party ratings make it a reliable hybrid option.",
                "Clear payment pages and multi‑coin support ease onboarding for new crypto players.",
                "Not the largest lobby, but well‑curated with consistently fast cashouts."
            ]
        },
        perks: [
            { text: "Long operating history (2013)", icon: "fas fa-history" },
            { text: "High safety index (8.7)", icon: "fas fa-shield-alt" },
            { text: "Sports + casino in one", icon: "fas fa-layer-group" },
            { text: "Stablecoins simplify bankroll", icon: "fas fa-dollar-sign" },
            { text: "24/7 support", icon: "fas fa-headset" }
        ],
        specifications: [
            { name: "License", value: "Curaçao", icon: "fas fa-certificate" },
            { name: "Coins", value: "35–40+ supported", icon: "fas fa-coins" },
            { name: "Games", value: "2,500+", icon: "fas fa-th" },
            { name: "Safety Index", value: "8.7 (Casino.Guru)", icon: "fas fa-shield-alt" },
            { name: "Welcome", value: "100% up to $2,500 (check site)", icon: "fas fa-gift" }
        ]
    },
    
    // Product 4 Configuration - #4 Ranked Crypto Casino - Bitcasino.io
    product4: {
        name: "Bitcasino.io",
        description: "Sleek crypto casino that lets you filter by RTP in the lobby—rare transparency players love. Quick withdrawals and strong provider mix.",
        productLogo: "./assets/images/casino_test/bitcasino_text_logo_white.webp",
        productImage: "./assets/images/casino_test/bitcasino_website.webp",
        logoScale: { grid: 3.0, list: 2.5, tablet: { grid: 2.5, list: 1.5 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'top left', objectFit: 'fill' } },
        logoPositioning: { grid: { left: '0px', top: '0rem' }, list: { left: '0px', top: '0rem' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 3.0 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.25rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top center', objectFit: 'fill' }
        },
        rank: 4,
        rankBadge: "RTP CONTROL",
        rating: 4.5,
        reviewCount: 1500,
        badgeSettings: { showOnProductCard: true, showOnDetailedReview: true },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "Tiered free spins (250–5,000 USDT deposits)",
        welcomePackage: "RTP/volatility filters in lobby",
        addedBonus: "On-ramps incl. Apple/Google Pay",
        affiliateLink: "https://bitcasino.io/",
        ctaText: "Filter by RTP, Play Smarter",
        cta: {
            title: "Play with RTP visibility",
            description: "See RTP/volatility filters before you play.",
            boxInfo: "Fast withdrawals; clear limits",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "RTP & volatility filters", icon: "fas fa-chart-line" },
            { text: "Fast withdrawals; clear caps", icon: "fas fa-bolt" },
            { text: "On-ramps (Apple/Google Pay)", icon: "fas fa-credit-card" },
            { text: "Live-casino depth", icon: "fas fa-chess-board" },
            { text: "Mobile-first UI", icon: "fas fa-mobile-alt" }
        ],
        fullReview: {
            tagline: "Casino that lets you filter by RTP",
            paragraphs: [
                "Transparency stands out—RTP and volatility filters are rare in crypto casinos.",
                "On-ramps simplify fiat-to-crypto; low practical deposit floors help testing.",
                "Great for data-forward players who want control and speed."
            ]
        },
        perks: [
            { text: "Low entry (≈$0.25 equiv)", icon: "fas fa-wallet" },
            { text: "High-roller FS tiers", icon: "fas fa-gem" },
            { text: "24/7 help center", icon: "fas fa-headset" },
            { text: "Rich provider mix", icon: "fas fa-th" },
            { text: "Esports promos (guides)", icon: "fas fa-gamepad" }
        ],
        specifications: [
            { name: "License", value: "Curaçao", icon: "fas fa-certificate" },
            { name: "Cryptos", value: "BTC, ETH, USDT/USDC, more", icon: "fas fa-coins" },
            { name: "Welcome", value: "FS tiers 250–5,000 USDT", icon: "fas fa-gift" },
            { name: "Rating", value: "4.5/5 (CoinBettors)", icon: "fas fa-star" },
            { name: "Focus", value: "RTP transparency + polished UX", icon: "fas fa-eye" }
        ]
    },
    
    // Product 5 Configuration - #5 Ranked Crypto Casino - BitStarz
    product5: {
        name: "BitStarz",
        description: "Award-winning Bitcoin casino with 4,600+ slots and fast withdrawals. Top-tier safety reputation and clear banking pages.",
        productLogo: "./assets/images/casino_test/bitstarz_logo.webp",
        productImage: "./assets/images/casino_test/bitstarz_website.jpg",
        logoScale: { grid: 2.5, list: 2.0, tablet: { grid: 2.0, list: 1.5 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'center', objectFit: 'cover' } },
        logoPositioning: { grid: { left: '0px', top: '0rem' }, list: { left: '0px', top: '0rem' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 2.5 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.25rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top center', objectFit: 'cover' }
        },
        rank: 5,
        rankBadge: "SAFETY",
        rating: 4.4,
        reviewCount: 4000,
        badgeSettings: { showOnProductCard: true, showOnDetailedReview: true },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "$500 or 5BTC + 180 free spins",
        welcomePackage: "deposit prizes",
        addedBonus: "50% Monday reload bonus",
        affiliateLink: "https://www.bitstarz.com/",
        ctaText: "Play Safe",
        cta: {
            title: "Top safety rating",
            description: "Fast withdrawals and clear banking info.",
            boxInfo: "Great slot depth and weekly promos",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "4,600+ slots + live", icon: "fas fa-dice" },
            { text: "Seven in-house exclusives", icon: "fas fa-star" },
            { text: "Quick verification & cashouts", icon: "fas fa-bolt" },
            { text: "Payment methods visibility", icon: "fas fa-list" },
            { text: "Mobile-optimized lobby", icon: "fas fa-mobile-alt" }
        ],
        fullReview: {
            tagline: "Award-winning Bitcoin casino with elite safety marks",
            paragraphs: [
                "BitStarz pairs a huge slot catalog with fast, transparent banking and a 9.8/10 safety index.",
                "Weekly promo cadence and occasional no-deposit spins keep value flowing.",
                "A safe first stop if you want top safety signals alongside breadth."
            ]
        },
        perks: [
            { text: "Very High Safety Index (9.8)", icon: "fas fa-shield-alt" },
            { text: "No-deposit FS appear periodically", icon: "fas fa-gift" },
            { text: "Clear min/max payment tables", icon: "fas fa-file-invoice-dollar" },
            { text: "Large provider variety", icon: "fas fa-th" },
            { text: "Strong review footprint", icon: "fas fa-users" }
        ],
        specifications: [
            { name: "License", value: "Curaçao", icon: "fas fa-certificate" },
            { name: "Games", value: "4,600+", icon: "fas fa-dice" },
            { name: "Min Deposit", value: "$20 fiat / 0.0001 BTC", icon: "fas fa-wallet" },
            { name: "Promos", value: "Reloads + FS; weekly races", icon: "fas fa-bullhorn" },
            { name: "Trustpilot", value: "~4/5 avg", icon: "fas fa-star" }
        ]
    },
    
    // Product 6 Configuration - #6 Ranked Crypto Casino - LuckyBlock
    product6: {
        name: "Roobet",
        description: "Crypto casino with viral brand energy, 4,400+ games, originals, quick withdrawals, and frequent sports tie-ins.",
        productLogo: "./assets/images/casino_test/roobet_text_logo.png",
        productImage: "./assets/images/casino_test/roobet_website.webp",
        logoScale: { grid: 3.0, list: 2.5, tablet: { grid: 2.5, list: 1.0 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'top center', objectFit: 'cover' } },
        logoPositioning: { grid: { left: '0px', top: '0rem' }, list: { left: '0px', top: '0rem' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 2.0 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.5rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top center', objectFit: 'fill' }
        },
        rank: 6,
        rankBadge: "COMMUNITY",
        rating: 4.3,
        reviewCount: 2000,
        badgeSettings: { showOnProductCard: false, showOnDetailedReview: false },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "Weekly Raffle",
        welcomePackage: "Low mins (~$2) method-dependent",
        addedBonus: "Mission Uncrossable (Roobet Original)",
        affiliateLink: "https://roobet.com/",
        ctaText: "Test The Waters",
        cta: {
            title: "sports-driven promos",
            description: "Catch sports tie-ins and coupons",
            boxInfo: "Quick withdrawals; active socials",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "Roobet Originals & crash games", icon: "fas fa-bolt" },
            { text: "Branded sports promos", icon: "fas fa-futbol" },
            { text: "Fiat + crypto pathways", icon: "fas fa-random" },
            { text: "Active social presence", icon: "fas fa-users" },
            { text: "Mobile-first UX", icon: "fas fa-mobile-alt" }
        ],
        fullReview: {
            tagline: "Crypto casino with viral brand energy",
            paragraphs: [
                "Roobet blends casino and culture with partnerships and social activity.",
                "Large catalog and responsive withdrawals; low mins suit cautious testing.",
                "Trustpilot is mixed vs. top peers—expect standard KYC friction at scale."
            ]
        },
        perks: [
            { text: "Low minimums (~$2)", icon: "fas fa-wallet" },
            { text: "4,400+ games", icon: "fas fa-gamepad" },
            { text: "Frequent promos", icon: "fas fa-bullhorn" },
            { text: "Fast withdrawals", icon: "fas fa-bolt" },
            { text: "Engaged community", icon: "fas fa-users" }
        ],
        specifications: [
            { name: "License", value: "Curaçao", icon: "fas fa-certificate" },
            { name: "Games", value: "4,400+", icon: "fas fa-th" },
            { name: "Min Deposit", value: "~$2 (method-dependent)", icon: "fas fa-dollar-sign" },
            { name: "Trustpilot", value: "~3.7/5 avg", icon: "fas fa-star" },
            { name: "Promos", value: "Team tie-ins; coupons", icon: "fas fa-ticket-alt" }
        ]
    },
    
    // Product 7 Configuration - #7 Ranked Crypto Casino - mBit Casino
    product7: {
        name: "mBit Casino",
        description: "All-crypto casino with 5,000+ games and blazing cashouts—often ~10 minutes. Transparent coin-by-coin min/withdraw tables.",
        productLogo: "./assets/images/casino_test/mbitcasino_logo.png",
        productImage: "./assets/images/casino_test/mbitcasino_website.png",
        logoScale: { grid: 2.1, list: 1.5, tablet: { grid: 1.8, list: 1.5 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'top left', objectFit: 'fill' } },
        logoPositioning: { grid: { left: '0px', top: '0rem' }, list: { left: '0px', top: '0rem' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 2.0 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.25rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top center', objectFit: 'fill' }
        },
        rank: 7,
        rankBadge: "FAST PAYOUTS",
        rating: 4.3,
        reviewCount: 1600,
        badgeSettings: { showOnProductCard: false, showOnDetailedReview: false },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "Up to 4 BTC + 325 FS (3-part)",
        welcomePackage: "Crypto-only banking; no house fees",
        addedBonus: "Discord support",
        affiliateLink: "https://www.mbitcasino.io/",
        ctaText: "Join Today!",
        cta: {
            title: "All-crypto speed",
            description: "Transparent coin minimums and quick payouts.",
            boxInfo: "Fastest overall cashouts we saw",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "5,000+ games; 400+ live", icon: "fas fa-dice" },
            { text: "Transparent coin tables", icon: "fas fa-table" },
            { text: "Audited RNG (iTech Labs)", icon: "fas fa-certificate" },
            { text: "Crypto-only focus", icon: "fas fa-coins" },
            { text: "Mobile-optimized", icon: "fas fa-mobile-alt" }
        ],
        fullReview: {
            tagline: "All-crypto banking with blazing cashouts",
            paragraphs: [
                "Among the fastest crypto payout experiences with clear min/withdraw tables.",
                "Banking focus keeps flows lean; no fiat rails but strong coin coverage.",
                "Welcome is rich but time-boxed; races and social promos add value."
            ]
        },
        perks: [
            { text: "No deposit/withdrawal fees (house)", icon: "fas fa-ban" },
            { text: "Frequent slot races", icon: "fas fa-flag-checkered" },
            { text: "Large live-dealer mix", icon: "fas fa-chess-board" },
            { text: "Discord help + email", icon: "fas fa-headset" },
            { text: "Detailed RG page", icon: "fas fa-user-shield" }
        ],
        specifications: [
            { name: "License", value: "Curaçao (Antillephone N.V.)", icon: "fas fa-certificate" },
            { name: "Coins", value: "BTC, ETH, LTC, XRP, DOGE, USDT, BCH", icon: "fas fa-coins" },
            { name: "Min Deposit", value: "10 USDT (~$10)", icon: "fas fa-wallet" },
            { name: "Withdrawals", value: "~10 minutes typical", icon: "fas fa-bolt" },
            { name: "Welcome", value: "Up to 4 BTC + 325 FS", icon: "fas fa-gift" }
        ]
    },
    
    // Product 8 Configuration - #8 Ranked Crypto Casino - Vave
    product8: {
        name: "Sportsbet.io",
        description: "Top crypto sportsbook with a legit 3,000+ game casino. Sharp odds, high limits, and fast crypto rails.",
        productLogo: "./assets/images/casino_test/sportsbet.io_logo.png",
        productImage: "./assets/images/casino_test/sportsbet.io_website.webp",
        logoScale: { grid: 3.7, list: 3.0, tablet: { grid: 3.2, list: 1.6 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'top left', objectFit: 'cover' } },
        logoPositioning: { grid: { left: '0px', top: '0rem' }, list: { left: '0px', top: '0rem' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 2.8 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.25rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top left', objectFit: 'cover' }
        },
        rank: 8,
        rankBadge: "SPORTS + CASINO",
        rating: 4.3,
        reviewCount: 2300,
        badgeSettings: { showOnProductCard: true, showOnDetailedReview: true },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "50% cashback 3 days a week",
        welcomePackage: "100% bonus up to 300USDT",
        addedBonus: "Daily Bet Boosts",
        affiliateLink: "https://sportsbet.io/sports",
        ctaText: "Bet The Match, Hit The Casino",
        cta: {
            title: "Elite odds + full casino",
            description: "One account for sports and live tables.",
            boxInfo: "Safety Index 8.7; broad coin support",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "Odds boosts & in-play depth", icon: "fas fa-percentage" },
            { text: "Full live-dealer lineup", icon: "fas fa-chess-board" },
            { text: "Instant deposits & fast withdrawals", icon: "fas fa-bolt" },
            { text: "No extra crypto payment fees", icon: "fas fa-ban" },
            { text: "High bet limits", icon: "fas fa-trophy" }
        ],
        fullReview: {
            tagline: "Elite odds meets full casino",
            paragraphs: [
                "Sports-first with a strong casino arm—ideal for split focus players.",
                "Crypto rails are quick; safety rating and coin coverage reassure.",
                "Promo cadence favors sports; casino has depth where it counts."
            ]
        },
        perks: [
            { text: "Trusted sportsbook reputation", icon: "fas fa-award" },
            { text: "Broad coin support", icon: "fas fa-coins" },
            { text: "Live-betting speed", icon: "fas fa-running" },
            { text: "High limits for VIPs", icon: "fas fa-crown" },
            { text: "Solid safety index (8.7)", icon: "fas fa-shield-alt" }
        ],
        specifications: [
            { name: "License", value: "Curaçao", icon: "fas fa-certificate" },
            { name: "Casino Games", value: "3,000+", icon: "fas fa-dice" },
            { name: "Max Bet (illustrative)", value: "Football up to ~$2M", icon: "fas fa-futbol" },
            { name: "Safety Index", value: "8.7 (Casino.Guru)", icon: "fas fa-shield-alt" },
            { name: "Coins", value: "BTC, ETH, USDT, XRP, ADA, DOGE, BNB, USDC, MATIC, TON, more", icon: "fas fa-coins" }
        ]
    },
    
    // Product 9 Configuration - #9 Ranked Crypto Casino - Shuffle
    product9: {
        name: "Gamdom",
        description: "Micro-deposits and deep live-casino coverage. Friendly to penny-stake players with modern UI and fast loads.",
        productLogo: "./assets/images/casino_test/gamdom_text_logo_white.svg",
        productImage: "./assets/images/casino_test/gamdom_website.webp",
        logoScale: { grid: 3.0, list: 2.5, tablet: { grid: 2.5, list: 1.2 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'top left', objectFit: 'cover' } },
        logoPositioning: { grid: { left: '0px', top: '0rem' }, list: { left: '0px', top: '0rem' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 2.5 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.25rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top left', objectFit: 'fill' }
        },
        rank: 9,
        rankBadge: "MICRO-STAKE",
        rating: 4.2,
        reviewCount: 1400,
        badgeSettings: { showOnProductCard: false, showOnDetailedReview: false },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "15% boost for first week",
        welcomePackage: "Daily, Weekly, and Monthly Bonuses",
        addedBonus: "Friday Free Spins",
        affiliateLink: "https://gamdom.com/",
        ctaText: "Play Live Now",
        cta: {
            title: "Micro-friendly casino",
            description: "Live tables and penny slots, fast loads.",
            boxInfo: "Good variety across providers",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "Micro-deposit support", icon: "fas fa-wallet" },
            { text: "Evolution/Pragmatic live depth", icon: "fas fa-chess-board" },
            { text: "Multi-language lobbies", icon: "fas fa-globe" },
            { text: "Crash/dice variants", icon: "fas fa-bolt" },
            { text: "Mobile-ready app", icon: "fas fa-mobile-alt" }
        ],
        fullReview: {
            tagline: "Low entry, high variety",
            paragraphs: [
                "Gamdom is ideal for first-time crypto testers given tiny deposit floors.",
                "Live-casino depth and penny-stake options reduce variance while learning.",
                "Reputation is mid-pack vs. safety leaders, but the micro angle is compelling."
            ]
        },
        perks: [
            { text: "Frequent table availability", icon: "fas fa-table" },
            { text: "Broad provider mix", icon: "fas fa-th" },
            { text: "VIP perks for high rollers", icon: "fas fa-gem" },
            { text: "Penny-slot friendly", icon: "fas fa-coins" },
            { text: "Simple onboarding", icon: "fas fa-sign-in-alt" }
        ],
        specifications: [
            { name: "License", value: "Curaçao (Smein Hosting N.V.)", icon: "fas fa-certificate" },
            { name: "Min Deposit", value: "1e-6 BTC; SOL mins vary", icon: "fas fa-dollar-sign" },
            { name: "Live Tables", value: "Extensive Evolution/Pragmatic", icon: "fas fa-chess-board" },
            { name: "Established", value: "2016", icon: "fas fa-calendar" },
            { name: "Editorial", value: "Strong 2025 reviews (Webopedia/CryptoCasinos)", icon: "fas fa-newspaper" }
        ]
    },
    
    // Product 10 Configuration - #10 Ranked Crypto Casino - Rollbit
    product10: {
        name: "Rollbit",
        description: "Casino meets crypto trading—NFTs, token markets, and futures alongside slots/live. Innovative but higher complexity.",
        productLogo: "./assets/images/casino_test/rollbit_logo_white.png",
        productImage: "./assets/images/casino_test/rollbit_website.png",
        logoScale: { grid: 4.5, list: 2.6, tablet: { grid: 3.5, list: 2.5 } },
        imageScale: { grid: 1.0, list: 1.0 },
        imagePositioning: { grid: { objectPosition: 'top center', objectFit: 'cover' } },
        logoPositioning: { grid: { left: '0px', top: '0rem' }, list: { left: '0px', top: '0rem' } },
        detailedReviewScale: { productImage: 1.0, productLogo: 4.0 },
        detailedReviewPositioning: {
            productLogo: { left: '0px', top: '-0.25rem' },
            productImage: { left: '0px', top: '0px', objectPosition: 'top left', objectFit: 'fill' }
        },
        rank: 10,
        rankBadge: "INNOVATION",
        rating: 4.1,
        reviewCount: 1200,
        badgeSettings: { showOnProductCard: true, showOnDetailedReview: true },
        price: "",
        originalPrice: "",
        discount: "",
        welcomeBonus: "$25.000 Daily Race",
        welcomePackage: "Daily, Weekly, and Monthly Rakeback",
        addedBonus: "Daily Prizes through Discord",
        affiliateLink: "https://rollbit.com/",
        ctaText: "Roll The Dice",
        cta: {
            title: "Hybrid casino",
            description: "Games + DeFi/trading in one account.",
            boxInfo: "Best for power users comfortable with risk",
            display: { showTitle: false, showDescription: false, showBoxInfo: false, showPricingInfo: true }
        },
        features: [
            { text: "Casino + futures dashboards", icon: "fas fa-chart-line" },
            { text: "NFT integration", icon: "fas fa-cubes" },
            { text: "Provably-fair titles", icon: "fas fa-check" },
            { text: "Active T&C monitoring", icon: "fas fa-file-alt" },
            { text: "Mobile-friendly UI", icon: "fas fa-mobile-alt" }
        ],
        fullReview: {
            tagline: "Casino meets crypto trading",
            paragraphs: [
                "Rollbit is unique for users who want both gaming and trading tools in one place.",
                "Innovation velocity is high—expect frequent updates and new utilities.",
                "Complexity adds risk; segment bankroll if using trading modules."
            ]
        },
        perks: [
            { text: "One wallet for play & trading", icon: "fas fa-wallet" },
            { text: "Instant crypto payouts (house-side)", icon: "fas fa-bolt" },
            { text: "Large catalog incl. live", icon: "fas fa-dice" },
            { text: "Community events", icon: "fas fa-users" },
            { text: "High-velocity changes", icon: "fas fa-rocket" }
        ],
        specifications: [
            { name: "License", value: "Curaçao", icon: "fas fa-certificate" },
            { name: "Safety Index", value: "Active review (Casino.Guru)", icon: "fas fa-search" },
            { name: "Product", value: "Casino, NFTs, token trading", icon: "fas fa-layer-group" },
            { name: "Payments", value: "Crypto deposits/withdrawals", icon: "fas fa-coins" },
            { name: "Focus", value: "Innovation + hybrid features", icon: "fas fa-lightbulb" }
        ]
    }
};

// ========== SECTION TITLES CONFIGURATION ==========
const SECTION_TITLES = {
    // Section titles and icons (easily customizable for your niche) - FOR DETAILED REVIEW CARDS and comparison section titles
    perks: {
        title: 'Key Perks & Benefits', // ← Title when showing perks in product cards
        icon: 'fas fa-star',   // ← Icon for perks in detailed review cards
        color: '#f59e0b'        // ← Color for perks icons in detailed review cards
    },
    specs: {
        title: 'Platform Specifications', // ← Title when showing specs in product cards
        icon: 'fas fa-cogs',    // ← Icon for specs in detailed review cards
        color: '#06b6d4'        // ← Color for specs icons in detailed review cards
    },
    features: {
        title: 'Key Features', // ← Title when showing features in product cards
        icon: 'fas fa-list',    // ← Icon for features in detailed review cards
        color: '#10b981'        // ← Color for features icons in detailed review cards
    },
    reviews: {
        title: 'Detailed Reviews',
        icon: 'fas fa-star'
    },
    comparison: 'Casino Comparison',                  // ← Gets overridden by the comparison section Below
    
    // Helper function to get section info with backward compatibility
    getSection: function(sectionName) {
        const section = this[sectionName];
        if (typeof section === 'string') {
            // Backward compatibility for old string format
            return { title: section, icon: 'fas fa-star' };
        } else if (section && section.title) {
            // New object format
            return section;
        } else {
            // Fallback defaults
            const defaults = {
                perks: { title: 'Perks', icon: 'fas fa-star' },
                specs: { title: 'Specs', icon: 'fas fa-cogs' },
                features: { title: 'Features', icon: 'fas fa-list' },
                reviews: { title: 'Detailed Reviews', icon: 'fas fa-star' }
            };
            return defaults[sectionName] || { title: 'Section', icon: 'fas fa-star' };
        }
    },
    
    // Product card display options
    productCards: {
        displaySection: 'perks'                        // ← 'perks', 'specs', or 'features'
    },
    
    // Sort options configuration
    sortOptions: {
        // Configure which sort options to show (reorder or remove as needed)
        enabled: [
            { value: 'rank', label: 'Sort by Rank', field: 'rank' },
            { value: 'rating', label: 'Sort by Rating', field: 'rating' },
            { value: 'primary', label: 'Sort by {{PRIMARY_FIELD}}', field: 'primary' },
            { value: 'secondary', label: 'Sort by {{SECONDARY_FIELD}}', field: 'secondary' }
        ],
        // Field mappings based on template type - customize labels for your niche
        fieldLabels: {
            physical_products: {
                primary: 'Price',
                secondary: 'Original Price'
            },
            casino_websites: {
                primary: 'Welcome Bonus',
                secondary: 'Welcome Package'
            },
            sports_betting: {
                primary: 'Sign Up Bonus',
                secondary: 'Deposit Match'
            }
            // Add more template types here as needed
        }
    },
    
    // Editor's Choice section configuration
    editorsChoice: {
        title: 'Editor\'s Choice',                          // ← Title for editor's choice section
        subtitle: 'Our top recommendation',                 // ← Subtitle
        ctaText: 'Get Started',                            // ← Call-to-action button text
        featureCount: 5,                                   // ← CONFIGURABLE: Number of features/specs/perks to show (3, 4, 5, 7, etc.)
        displaySection: 'perks',                          // ← 'perks', 'features', or 'specs' to show in editor's choice
    },
    
    // Editor's Pick Cards configuration
    editorsPicks: {
        title: 'Editor\'s Picks',                          // ← Title for editor's picks section
        subtitle: 'Handpicked recommendations',            // ← Subtitle 
        featureCount: 5,                                   // ← CONFIGURABLE: Number of features/specs/perks to show in each pick card (3, 4, 5, 7, etc.)
        displaySection: 'perks',                          // ← 'perks', 'features', or 'specs' to show in pick cards
    },

    // Comparison section configuration
    comparisonSection: {
        title: 'Casino Comparison',                       // ← Title for comparison section
        subtitle: 'Select 2-3 casinos to compare their features and specifications side by side', // ← Subtitle
        placeholderTitle: 'Select casinos to compare',   // ← Placeholder title when no casinos selected
        placeholderDescription: 'Choose 2-3 casinos from the dropdowns above to see a detailed comparison', // ← Placeholder description
        resultsTitle: 'Comparison Results',               // ← Title shown above comparison results
        resultsSubtitle: 'Comparing {count} casinos',    // ← Subtitle for results (use {count} for casino count)
        featureCount: 5,                                  // ← CONFIGURABLE: Max features/specs/perks to show per casino in comparison (5, 7, 10, etc.)
        
        // Dropdown configuration
        dropdownLabels: {
            product1: 'Casino 1:',                       // ← Label for first dropdown
            product2: 'Casino 2:',                       // ← Label for second dropdown
            product3: 'Casino 3 (Optional):'            // ← Label for third dropdown
        },
        dropdownPlaceholder: 'Select a casino...',      // ← Placeholder text in dropdown options
        
        // Comparison table header icons and colors (separate from detailed review cards)
        sectionTitles: { //titles for comparison chosen in const SECTION_TITLES = { up above in the detailed review titles part
            perks: {
                icon: 'fas fa-star',                      // ← CHANGEABLE: Icon for perks section in comparison table (CHANGED FROM BOLT TO STAR)
                color: '#f59e0b'                          // ← CHANGEABLE: Color for perks icons in comparison table
            },
            features: {
                icon: 'fas fa-list',                     // ← CHANGEABLE: Icon for features section in comparison table (CHANGED FROM GIFT TO HEART)
                color: '#10b981'                          // ← CHANGEABLE: Color for features icons in comparison table
            },
            specs: {
                icon: 'fas fa-cog',                       // ← CHANGEABLE: Icon for specs section in comparison table (CHANGED FROM WRENCH TO COG)
                color: '#06b6d4'                          // ← CHANGEABLE: Color for specs icons in comparison table
            }
        }
    }
};

// Make configurations globally available
window.PRODUCTS_CONFIG = PRODUCTS_CONFIG;
window.SECTION_TITLES = SECTION_TITLES;



// ========== TEMPLATE TYPE CONFIGURATION ==========
// Choose your template type to customize what displays in place of pricing
const TEMPLATE_TYPE = "casino_websites"; // ← CHANGE THIS TO MATCH YOUR WEBSITE TYPE

// Available template types:
// "physical_products"    - Shows price, original price, discount (default)
// "casino_websites"      - Shows bonus offers, welcome packages, free spins
// "sports_betting"       - Shows sign-up bonuses, odds boosts, free bets
// "software_saas"        - Shows subscription plans, trial info, monthly/yearly pricing
// "streaming_services"   - Shows subscription cost, trial period, content highlights
// "vpn_services"         - Shows pricing plans, server count, speed info
// "crypto_exchanges"     - Shows trading fees, supported coins, security features
// "web_hosting"          - Shows hosting plans, storage, bandwidth, uptime
// "restaurants"          - Shows price range, cuisine type, special offers
// "hotels_travel"        - Shows room rates, amenities, location highlights

// Template type display configurations
const TEMPLATE_DISPLAY_CONFIG = {
    physical_products: {
        primaryField: "price",
        secondaryField: "originalPrice", 
        tertiaryField: "discount",
        primaryLabel: "Price",
        secondaryLabel: "Original Price",
        tertiaryLabel: "Discount",
        icon: "💰",
        ctaDefault: "Buy Now",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: true // Enable crossthrough styling for secondary field
    },
    casino_websites: {
        primaryField: "welcomeBonus",
        secondaryField: "welcomePackage",
        tertiaryField: "addedBonus", // Remove free spins - not needed
        primaryLabel: "Welcome Bonus",
        secondaryLabel: "Welcome Package",
        tertiaryLabel: "Added Bonus",
        icon: "🎰",
        ctaDefault: "Claim Bonus",
        fieldsToShow: 3, // Show only 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Only show Welcome Bonus and Welcome Package
        secondaryFieldCrossthrough: false // No crossthrough for casino welcome packages
    },
    sports_betting: {
        primaryField: "signupBonus",
        secondaryField: "oddsBoost", 
        tertiaryField: "freeBet",
        primaryLabel: "Sign-up Bonus",
        secondaryLabel: "Odds Boost",
        tertiaryLabel: "Free Bet",
        icon: "⚽",
        ctaDefault: "Get Bonus",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for sports betting
    },
    software_saas: {
        primaryField: "monthlyPrice",
        secondaryField: "yearlyPrice",
        tertiaryField: "trialPeriod",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Yearly Price",
        tertiaryLabel: "Free Trial",
        icon: "💻",
        ctaDefault: "Start Free Trial",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for SaaS yearly pricing
    },
    streaming_services: {
        primaryField: "monthlyPrice",
        secondaryField: "trialPeriod",
        tertiaryField: "contentHighlight",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Free Trial",
        tertiaryLabel: "4K Content",
        icon: "📺",
        ctaDefault: "Start Watching",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for streaming services
    },
    vpn_services: {
        primaryField: "monthlyPrice",
        secondaryField: "serverCount",
        tertiaryField: "speedInfo",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Server Network",
        tertiaryLabel: "High Speed",
        icon: "🛡️",
        ctaDefault: "Get VPN",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for VPN services
    },
    crypto_exchanges: {
        primaryField: "tradingFee",
        secondaryField: "supportedCoins",
        tertiaryField: "securityRating",
        primaryLabel: "Trading Fee",
        secondaryLabel: "Coin Support",
        tertiaryLabel: "Security Rating",
        icon: "💰",
        ctaDefault: "Start Trading",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for crypto exchanges
    },
    web_hosting: {
        primaryField: "monthlyPrice",
        secondaryField: "storage",
        tertiaryField: "uptime",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Storage",
        tertiaryLabel: "Uptime Guarantee",
        icon: "🌐",
        ctaDefault: "Get Hosting",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for web hosting
    },
    restaurants: {
        primaryField: "priceRange",
        secondaryField: "specialOffer",
        tertiaryField: null, // Only show 2 fields
        primaryLabel: "Price Range",
        secondaryLabel: "Special Offers",
        tertiaryLabel: null,
        icon: "🍕",
        ctaDefault: "Make Reservation",
        fieldsToShow: 2, // Only show 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary"], // Only show primary and secondary
        secondaryFieldCrossthrough: false // No crossthrough for restaurants
    },
    hotels_travel: {
        primaryField: "roomRate",
        secondaryField: "amenities",
        tertiaryField: null, // Only show 2 fields
        primaryLabel: "Room Rate",
        secondaryLabel: "Premium Amenities",
        tertiaryLabel: null,
        icon: "🏨",
        ctaDefault: "Book Now",
        fieldsToShow: 2, // Only show 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary"], // Only show primary and secondary
        secondaryFieldCrossthrough: false // No crossthrough for hotels
    }
};

// Make template configuration globally available
window.TEMPLATE_TYPE = TEMPLATE_TYPE;
window.TEMPLATE_DISPLAY_CONFIG = TEMPLATE_DISPLAY_CONFIG;
window.CURRENT_TEMPLATE_CONFIG = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];

/*
===========================================
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

// ===========================================
// MAIN SITE CONFIGURATION
// ===========================================

const SITE_CONFIG = {
    // Basic Site Information
    brand: {
        name: "Brand Name", // Will be overridden by brand-config.js
        tagline: "Brand Tagline", // Will be overridden by brand-config.js
        description: `We review and rank the best ${PRODUCT_TYPE.toLowerCase()} to help you make informed decisions.`,
        logo: "./assets/images/logo.png", // Will be overridden by brand-config.js
        favicon: FAVICON // Browser tab icon
    },
    
    // SEO Settings
    seo: {
        title: `Top 10 ${NICHE} - Best ${PRODUCT_TYPE} Reviews 2025`,
        description: `Discover the best ${PRODUCT_TYPE.toLowerCase()} with our comprehensive reviews. Compare features, prices, and user ratings.`,
        keywords: `${NICHE.toLowerCase()}, best ${PRODUCT_TYPE.toLowerCase()}, reviews, top 10, comparison, 2025`,
        ogImage: "./assets/images/og-image.jpg", // Social media preview image (1200x630px recommended)
        siteUrl: SITE_URL,
        author: "Brand Name", // Will be overridden by brand-config.js
        language: "en-US"
    },
    
    // Legal Pages
    legal: {
        privacyPolicy: "./privacy.html",
        termsOfService: "./terms.html",
        affiliateDisclosure: "./disclaimer.html",
        cookiePolicy: "./cookies.html",
        contactPage: "./contact.html"
    }
};

// ===========================================
// NICHE-SPECIFIC CONFIGURATION
// ===========================================

const NICHE_CONFIG = {
    // Main Topic Settings
    niche: NICHE,
    productType: PRODUCT_TYPE,
    audience: AUDIENCE,
    
    // Hero Section Content
    hero: {
        title: `The Top 10 ${NICHE} Reviewed & Ranked for 2025`,
        subtitle: `We've tested ${NUMBER_TESTED} ${PRODUCT_TYPE.toLowerCase()} and ranked the best ones. Save hours of research with our expert recommendations.`,
        ctaText: "See Our Top Pick",
        secondaryCtaText: "Compare All Options",
        
        // Trust Indicators
        trustIndicators: {
            reviewCount: REVIEW_COUNT,
            userCount: USER_COUNT,
            lastUpdate: LAST_UPDATE,
            numberTested: NUMBER_TESTED
        }
    },
    
    // Navigation Menu
    navigation: {
        menuItems: [
            { text: "Home", url: "#home" },
            { text: `🏆 Top 10 ${NICHE}`, url: "#top10", highlight: true },
            { text: "Reviews", url: "#reviews" },
            { text: "Compare", url: "#comparison" },
            { text: "Blog", url: "./blog.html" },
            { text: "Contact", url: "#contact" }
        ]
    },
    
    // Top Pick Section
    topPick: {
        badge: "EDITOR'S CHOICE",
        title: "Breville Barista Express",
        description: "The perfect balance of convenience and quality. This coffee maker delivers exceptional espresso with built-in grinder and milk frother.",
        rating: "4.8",
        reviewCount: "1,247",
        price: "£699",
        priceNote: "Starting at",
        features: [
            "Built-in conical burr grinder",
            "15-bar pressure pump",
            "Milk frother for lattes"
        ],
        ctaText: "Get Best Price",
        affiliateLink: "https://example.com/affiliate-link-1" // REPLACE WITH YOUR ACTUAL AFFILIATE LINK
    }
};

// ===========================================
// STYLING CONFIGURATION
// ===========================================

const STYLE_CONFIG = {
    // Color Scheme - Change these to match your brand
    colors: {
        primary: "#2563eb",        // Main brand color
        primaryHover: "#1d4ed8",   // Darker shade for hover
        secondary: "#64748b",      // Secondary color
        accent: "#10b981",         // Accent color (green)
        warning: "#f59e0b",        // Warning color (yellow)
        danger: "#ef4444",         // Danger color (red)
        success: "#10b981",        // Success color
        
        // Background colors
        bgPrimary: "#ffffff",      // Main background
        bgSecondary: "#f9fafb",    // Secondary background
        bgDark: "#1f2937",         // Dark background
        bgCard: "#ffffff",         // Card backgrounds
        
        // Text colors
        textPrimary: "#1f2937",    // Main text
        textSecondary: "#6b7280",  // Secondary text
        textLight: "#9ca3af",      // Light text
        textWhite: "#ffffff"       // White text
    },
    
    // Typography
    fonts: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        secondary: "'Georgia', serif",
        monospace: "'Fira Code', monospace"
    },
    
    // Spacing (in rem)
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem"
    },
    
    // Border radius
    borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem"
    },
    
    // Animations
    animations: {
        fast: "0.15s ease-in-out",
        normal: "0.3s ease-in-out",
        slow: "0.5s ease-in-out"
    }
};

// ===========================================
// TRACKING CONFIGURATION
// ===========================================

const TRACKING_CONFIG = {
    // Analytics Settings
    analytics: {
        googleAnalytics: {
            enabled: true,
            trackingId: "G-BQKJMHS9XZ", // REPLACE WITH YOUR GA4 MEASUREMENT ID
            anonymizeIp: true,
            cookieDomain: "auto"
        },
        
        metaPixel: {
            enabled: true,
            pixelId: "YOUR_PIXEL_ID", // REPLACE WITH YOUR META PIXEL ID
            advancedMatching: true
        },
        
        // Add other tracking services as needed
        customTracking: {
            enabled: false,
            // Replace this with your Google Apps Script Web App URL after deployment
            endpointUrl: "https://script.google.com/macros/s/AKfycbx36STHE0byk1X2HPKF-alEWYL4iakVnYygBT58A96Y5KpbKqOLfGb4VNnGaPKsemgEYA/exec"
        }
    },
    
    // Event Tracking Settings
    events: {
        affiliateClicks: true,
        emailCapture: true,
        scrollDepth: true,
        timeOnPage: true,
        exitIntent: true
    },
    
    // Conversion Tracking
    conversions: {
        primaryGoal: "affiliate_click",
        secondaryGoal: "email_capture",
        conversionValue: 0.50 // Average value per conversion
    }
};

// ===========================================
// FEATURE FLAGS
// ===========================================

const FEATURE_FLAGS = {
    // Enable/disable features
    mobileMenu: true,
    backToTop: true,
    floatingCTA: true,
    emailCapture: true,
    socialSharing: true,
    darkMode: false,
    animations: true,
    lazyLoading: true,
    
    // A/B Testing flags
    testVariants: {
        heroLayout: "default", // "default", "minimal", "video"
        ctaStyle: "default",   // "default", "animated", "minimal"
        productLayout: "grid"  // "grid", "list", "cards"
    }
};

// ===========================================
// THIRD-PARTY INTEGRATIONS
// ===========================================

const INTEGRATIONS = {
    // Email Marketing
    emailService: {
        provider: "mailchimp", // "mailchimp", "convertkit", "klaviyo", "custom"
        apiKey: "YOUR_API_KEY",
        listId: "YOUR_LIST_ID",
        apiUrl: "https://api.mailchimp.com/3.0/"
    },
    
    // Form Handling
    formService: {
        provider: "netlify", // "netlify", "formspree", "custom"
        actionUrl: "https://formspree.io/f/YOUR_FORM_ID"
    },
    
    // CDN and Performance
    cdn: {
        images: "https://your-cdn.com/images/",
        assets: "https://your-cdn.com/assets/"
    },
    
    // Reviews and Ratings
    reviews: {
        provider: "trustpilot", // "trustpilot", "google", "custom"
        accountId: "YOUR_ACCOUNT_ID"
    }
};

// ===========================================
// RESPONSIVE BREAKPOINTS
// ===========================================

const BREAKPOINTS = {
    mobile: "767px",
    tablet: "1023px",
    desktop: "1024px",
    large: "1200px",
    xlarge: "1400px"
};

// ===========================================
// EXPORT CONFIGURATION
// ===========================================

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    window.NICHE_CONFIG = NICHE_CONFIG;
    window.PRODUCTS_CONFIG = PRODUCTS_CONFIG;
    window.STYLE_CONFIG = STYLE_CONFIG;
    window.TRACKING_CONFIG = TRACKING_CONFIG;
    window.FEATURE_FLAGS = FEATURE_FLAGS;
    window.INTEGRATIONS = INTEGRATIONS;
    window.BREAKPOINTS = BREAKPOINTS;
}

// Export for Node.js/modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        NICHE_CONFIG,
        PRODUCTS_CONFIG,
        STYLE_CONFIG,
        TRACKING_CONFIG,
        FEATURE_FLAGS,
        INTEGRATIONS,
        BREAKPOINTS
    };
}

// ===========================================
// CONFIGURATION HELPERS
// ===========================================

/**
 * Helper function to get configuration value
 */
function getConfig(path, defaultValue = null) {
    const keys = path.split('.');
    let value = window;
    
    for (const key of keys) {
        value = value?.[key];
        if (value === undefined) {
            return defaultValue;
        }
    }
    
    return value;
}

/**
 * Helper function to update configuration
 */
function updateConfig(path, newValue) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let target = window;
    
    for (const key of keys) {
        if (!target[key]) {
            target[key] = {};
        }
        target = target[key];
    }
    
    target[lastKey] = newValue;
}

/**
 * Replace placeholders in DOM elements
 */
function replacePlaceholdersInDOM() {
    // Replace all text content that contains placeholders
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
        // Skip script and style elements
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
            return;
        }
        
        // Replace text content
        if (element.childNodes.length > 0) {
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('{{')) {
                    node.textContent = replacePlaceholders(node.textContent);
                }
            });
        }
        
        // Replace attributes that might contain placeholders
        const attributes = ['href', 'src', 'alt', 'title', 'placeholder'];
        attributes.forEach(attr => {
            if (element.hasAttribute(attr)) {
                const value = element.getAttribute(attr);
                if (value && value.includes('{{')) {
                    element.setAttribute(attr, replacePlaceholders(value));
                }
            }
        });
    });
    
    // Handle data attributes
    const elementsWithDataConfig = document.querySelectorAll('[data-config]');
    elementsWithDataConfig.forEach(element => {
        const configPath = element.getAttribute('data-config');
        const value = getConfig(configPath);
        if (value !== null) {
            element.textContent = value;
        }
    });
    
    console.log('✅ Placeholders replaced in DOM');
}

// Helper function to get editor's choice product
function getEditorsChoiceProduct() {
    const editorsConfig = window.EDITORS_CHOICE_CONFIG || EDITORS_CHOICE_CONFIG;
    
    // Check if manual override is enabled
    if (editorsConfig.useManualOverride) {
        return editorsConfig.manualOverride;
    }
    
    // Otherwise use selected product from config
    const selectedProductKey = editorsConfig.selectedProduct || 'product1';
    return PRODUCTS_CONFIG[selectedProductKey] || PRODUCTS_CONFIG.product1;
}

// Helper functions to get template-aware values for top pick section
function getTopPickPrimaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.primaryField) {
        return product[templateConfig.primaryField] || product.price || '£699';
    }
    return product.price || '£699';
}

function getTopPickSecondaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.secondaryField) {
        return product[templateConfig.secondaryField] || product.originalPrice || '£799';
    }
    return product.originalPrice || '£799';
}

function getTopPickTertiaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.tertiaryField) {
        return product[templateConfig.tertiaryField] || product.discount || '13% OFF';
    }
    return product.discount || '13% OFF';
}

// Helper functions for feature text/icons removed - now handled dynamically by TopPickManager


/**
 * Helper function to replace placeholders in text
 */
function replacePlaceholders(text, config = {}) {
    const allConfig = {
        // Basic settings
        SITE_NAME: SITE_CONFIG.brand.name,
        SITE_TAGLINE: SITE_CONFIG.brand.tagline,
        NICHE: NICHE,
        PRODUCT_TYPE: PRODUCT_TYPE,
        AUDIENCE: AUDIENCE,
        CONTACT_EMAIL: CONTACT_EMAIL,
        SITE_URL: SITE_URL,
        REVIEW_COUNT: REVIEW_COUNT,
        USER_COUNT: USER_COUNT,
        LAST_UPDATE: LAST_UPDATE,
        NUMBER_TESTED: NUMBER_TESTED,
        
        // Product 1 placeholders
        PRODUCT_1_NAME: PRODUCTS_CONFIG.product1?.name || 'Product 1',
        PRODUCT_1_DESCRIPTION: PRODUCTS_CONFIG.product1?.description || 'Product description',
        RATING_1: PRODUCTS_CONFIG.product1?.rating || '4.5',
        REVIEW_COUNT_1: PRODUCTS_CONFIG.product1?.reviewCount || '100',
        PRICE_1: PRODUCTS_CONFIG.product1?.price || '£99',
        ORIGINAL_PRICE_1: PRODUCTS_CONFIG.product1?.originalPrice || '£129',
        DISCOUNT_1: PRODUCTS_CONFIG.product1?.discount || '23% OFF',
        AFFILIATE_LINK_1: PRODUCTS_CONFIG.product1?.affiliateLink || '#',
        CTA_TEXT_1: PRODUCTS_CONFIG.product1?.ctaText || 'Get Best Price',
        
        // Product 2 placeholders
        PRODUCT_2_NAME: PRODUCTS_CONFIG.product2?.name || 'Product 2',
        PRODUCT_2_DESCRIPTION: PRODUCTS_CONFIG.product2?.description || 'Product description',
        RATING_2: PRODUCTS_CONFIG.product2?.rating || '4.3',
        REVIEW_COUNT_2: PRODUCTS_CONFIG.product2?.reviewCount || '85',
        PRICE_2: PRODUCTS_CONFIG.product2?.price || '£79',
        ORIGINAL_PRICE_2: PRODUCTS_CONFIG.product2?.originalPrice || '£99',
        DISCOUNT_2: PRODUCTS_CONFIG.product2?.discount || '20% OFF',
        AFFILIATE_LINK_2: PRODUCTS_CONFIG.product2?.affiliateLink || '#',
        CTA_TEXT_2: PRODUCTS_CONFIG.product2?.ctaText || 'Get Best Price',
        
        // Product 3 placeholders
        PRODUCT_3_NAME: PRODUCTS_CONFIG.product3?.name || 'Product 3',
        PRODUCT_3_DESCRIPTION: PRODUCTS_CONFIG.product3?.description || 'Product description',
        RATING_3: PRODUCTS_CONFIG.product3?.rating || '4.2',
        REVIEW_COUNT_3: PRODUCTS_CONFIG.product3?.reviewCount || '72',
        PRICE_3: PRODUCTS_CONFIG.product3?.price || '£149',
        ORIGINAL_PRICE_3: PRODUCTS_CONFIG.product3?.originalPrice || '£179',
        DISCOUNT_3: PRODUCTS_CONFIG.product3?.discount || '17% OFF',
        AFFILIATE_LINK_3: PRODUCTS_CONFIG.product3?.affiliateLink || '#',
        CTA_TEXT_3: PRODUCTS_CONFIG.product3?.ctaText || 'Get Best Price',
        
        // Product 4 placeholders
        PRODUCT_4_NAME: PRODUCTS_CONFIG.product4?.name || 'Product 4',
        PRODUCT_4_DESCRIPTION: PRODUCTS_CONFIG.product4?.description || 'Product description',
        RATING_4: PRODUCTS_CONFIG.product4?.rating || '4.4',
        REVIEW_COUNT_4: PRODUCTS_CONFIG.product4?.reviewCount || '567',
        PRICE_4: PRODUCTS_CONFIG.product4?.price || '£179',
        ORIGINAL_PRICE_4: PRODUCTS_CONFIG.product4?.originalPrice || '£219',
        DISCOUNT_4: PRODUCTS_CONFIG.product4?.discount || '18% OFF',
        AFFILIATE_LINK_4: PRODUCTS_CONFIG.product4?.affiliateLink || '#',
        CTA_TEXT_4: PRODUCTS_CONFIG.product4?.ctaText || 'Get Best Price',
        
        // Product 5 placeholders
        PRODUCT_5_NAME: PRODUCTS_CONFIG.product5?.name || 'Product 5',
        PRODUCT_5_DESCRIPTION: PRODUCTS_CONFIG.product5?.description || 'Product description',
        RATING_5: PRODUCTS_CONFIG.product5?.rating || '4.2',
        REVIEW_COUNT_5: PRODUCTS_CONFIG.product5?.reviewCount || '743',
        PRICE_5: PRODUCTS_CONFIG.product5?.price || '£89',
        ORIGINAL_PRICE_5: PRODUCTS_CONFIG.product5?.originalPrice || '£119',
        DISCOUNT_5: PRODUCTS_CONFIG.product5?.discount || '25% OFF',
        AFFILIATE_LINK_5: PRODUCTS_CONFIG.product5?.affiliateLink || '#',
        CTA_TEXT_5: PRODUCTS_CONFIG.product5?.ctaText || 'Get Best Price',
        
        // Product 6 placeholders
        PRODUCT_6_NAME: PRODUCTS_CONFIG.product6?.name || 'Product 6',
        PRODUCT_6_DESCRIPTION: PRODUCTS_CONFIG.product6?.description || 'Product description',
        RATING_6: PRODUCTS_CONFIG.product6?.rating || '4.3',
        REVIEW_COUNT_6: PRODUCTS_CONFIG.product6?.reviewCount || '789',
        PRICE_6: PRODUCTS_CONFIG.product6?.price || '£149',
        ORIGINAL_PRICE_6: PRODUCTS_CONFIG.product6?.originalPrice || '£179',
        DISCOUNT_6: PRODUCTS_CONFIG.product6?.discount || '17% OFF',
        AFFILIATE_LINK_6: PRODUCTS_CONFIG.product6?.affiliateLink || '#',
        CTA_TEXT_6: PRODUCTS_CONFIG.product6?.ctaText || 'Get Best Price',
        
        // Product 7 placeholders
        PRODUCT_7_NAME: PRODUCTS_CONFIG.product7?.name || 'Product 7',
        PRODUCT_7_DESCRIPTION: PRODUCTS_CONFIG.product7?.description || 'Product description',
        RATING_7: PRODUCTS_CONFIG.product7?.rating || '4.0',
        REVIEW_COUNT_7: PRODUCTS_CONFIG.product7?.reviewCount || '334',
        PRICE_7: PRODUCTS_CONFIG.product7?.price || '£39',
        ORIGINAL_PRICE_7: PRODUCTS_CONFIG.product7?.originalPrice || '£59',
        DISCOUNT_7: PRODUCTS_CONFIG.product7?.discount || '34% OFF',
        AFFILIATE_LINK_7: PRODUCTS_CONFIG.product7?.affiliateLink || '#',
        CTA_TEXT_7: PRODUCTS_CONFIG.product7?.ctaText || 'Get Best Price',
        
        // Product 8 placeholders
        PRODUCT_8_NAME: PRODUCTS_CONFIG.product8?.name || 'Product 8',
        PRODUCT_8_DESCRIPTION: PRODUCTS_CONFIG.product8?.description || 'Product description',
        RATING_8: PRODUCTS_CONFIG.product8?.rating || '4.1',
        REVIEW_COUNT_8: PRODUCTS_CONFIG.product8?.reviewCount || '256',
        PRICE_8: PRODUCTS_CONFIG.product8?.price || '£49',
        ORIGINAL_PRICE_8: PRODUCTS_CONFIG.product8?.originalPrice || '£69',
        DISCOUNT_8: PRODUCTS_CONFIG.product8?.discount || '29% OFF',
        AFFILIATE_LINK_8: PRODUCTS_CONFIG.product8?.affiliateLink || '#',
        CTA_TEXT_8: PRODUCTS_CONFIG.product8?.ctaText || 'Get Best Price',
        
        // Product 9 placeholders
        PRODUCT_9_NAME: PRODUCTS_CONFIG.product9?.name || 'Product 9',
        PRODUCT_9_DESCRIPTION: PRODUCTS_CONFIG.product9?.description || 'Product description',
        RATING_9: PRODUCTS_CONFIG.product9?.rating || '4.6',
        REVIEW_COUNT_9: PRODUCTS_CONFIG.product9?.reviewCount || '189',
        PRICE_9: PRODUCTS_CONFIG.product9?.price || '£159',
        ORIGINAL_PRICE_9: PRODUCTS_CONFIG.product9?.originalPrice || '£189',
        DISCOUNT_9: PRODUCTS_CONFIG.product9?.discount || '16% OFF',
        AFFILIATE_LINK_9: PRODUCTS_CONFIG.product9?.affiliateLink || '#',
        CTA_TEXT_9: PRODUCTS_CONFIG.product9?.ctaText || 'Get Best Price',
        
        // Product 10 placeholders
        PRODUCT_10_NAME: PRODUCTS_CONFIG.product10?.name || 'Product 10',
        PRODUCT_10_DESCRIPTION: PRODUCTS_CONFIG.product10?.description || 'Product description',
        RATING_10: PRODUCTS_CONFIG.product10?.rating || '4.2',
        REVIEW_COUNT_10: PRODUCTS_CONFIG.product10?.reviewCount || '167',
        PRICE_10: PRODUCTS_CONFIG.product10?.price || '£129',
        ORIGINAL_PRICE_10: PRODUCTS_CONFIG.product10?.originalPrice || '£159',
        DISCOUNT_10: PRODUCTS_CONFIG.product10?.discount || '19% OFF',
        AFFILIATE_LINK_10: PRODUCTS_CONFIG.product10?.affiliateLink || '#',
        CTA_TEXT_10: PRODUCTS_CONFIG.product10?.ctaText || 'Get Best Price',
        
        // Top pick placeholders (using EDITORS_CHOICE_CONFIG) - consistent with product naming
        TOP_PICK_NAME: getEditorsChoiceProduct()?.name || 'Top Pick Product',
        TOP_PICK_DESCRIPTION: getEditorsChoiceProduct()?.description || 'Top pick description',
        TOP_PICK_RATING: getEditorsChoiceProduct()?.rating || '4.8',
        TOP_PICK_REVIEW_COUNT: getEditorsChoiceProduct()?.reviewCount || '1247',
        TOP_PICK_AFFILIATE_LINK: getEditorsChoiceProduct()?.affiliateLink || '#',
        TOP_PICK_CTA_TEXT: getEditorsChoiceProduct()?.ctaText || 'Get Best Price',
        
        // Top pick features are now handled dynamically by TopPickManager
        
        // Hero section placeholders
        HERO_IMAGE_SRC: HERO_CONFIG?.image?.src || './assets/images/hero-image.jpg',
        HERO_IMAGE_ALT: HERO_CONFIG?.image?.alt || '{{PRODUCT_TYPE}} Reviews',
        HERO_VIDEO_TEXT: HERO_CONFIG?.video?.text || 'Watch Our Review Video',
        
        // Spread all config objects
        ...SITE_CONFIG.brand,
        ...SITE_CONFIG.seo,
        ...SITE_CONFIG.contact,
        ...NICHE_CONFIG,
        ...NICHE_CONFIG.hero,
        ...NICHE_CONFIG.hero.trustIndicators,
        ...NICHE_CONFIG.topPick,
        ...SECTION_TITLES.comparisonSection, // Add comparison section config
        ...config
    };
    
    return text.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        // Handle nested properties
        const keys = key.trim().split('.');
        let value = allConfig;
        
        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) {
                break;
            }
        }
        
        return value !== undefined ? value : match;
    });
}

/**
 * Apply configuration to page elements
 */
function applyConfigToPage() {
    // Update page title for homepage
    const currentPage = window.location.pathname.toLowerCase();
    const title = document.querySelector('title');
    if (title && (currentPage.includes('index.html') || currentPage === '/' || currentPage === '')) {
        title.textContent = replacePlaceholders(INDEX_PAGE_TITLE);
    }
    
    // Update favicon
    let favicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = FAVICON;
    
    // Update meta descriptions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', replacePlaceholders(metaDescription.getAttribute('content') || ''));
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', replacePlaceholders(metaKeywords.getAttribute('content') || ''));
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', replacePlaceholders(ogTitle.getAttribute('content') || ''));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', replacePlaceholders(ogDescription.getAttribute('content') || ''));
    }
    
    // Update Open Graph image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
        ogImage.setAttribute('content', SITE_CONFIG.seo.ogImage);
    }
    
    console.log('✅ Configuration applied to page elements');
}

/**
 * Initialize configuration and replace placeholders
 */
function initializeConfig() {
    console.log('🎯 Affiliate Template Configuration Loading...');
    console.log('📊 Niche:', NICHE_CONFIG.niche);
    console.log('🎨 Brand:', SITE_CONFIG.brand.name);
    console.log('📈 Tracking:', TRACKING_CONFIG.analytics.googleAnalytics.enabled ? 'Enabled' : 'Disabled');

    // Mark app as loading immediately (in case this ran before DOMContentLoaded handler)
    try {
        document.documentElement.classList.add('app-loading');
    } catch (e) {}
    
    // Apply configuration to page
    applyConfigToPage();
    
    // Replace placeholders in HTML
    replacePlaceholdersInDOM();
    
    console.log('✅ Configuration initialization complete');

    // Toggle ready state to reveal UI
    try {
        const root = document.documentElement;
        root.classList.remove('app-loading');
        root.classList.add('app-ready');
        document.dispatchEvent(new CustomEvent('app:ready'));
    } catch (e) {}
}

// Make helpers available globally
if (typeof window !== 'undefined') {
    window.getConfig = getConfig;
    window.updateConfig = updateConfig;
    window.replacePlaceholders = replacePlaceholders;
    window.applyConfigToPage = applyConfigToPage;
    window.initializeConfig = initializeConfig;
}

/**

 * Top pick icons are now managed directly through product.features in config
 * Edit the manual override product.features array to change icons
 */

// Initialize when DOM is loaded
if (typeof document !== 'undefined') {
    // Ensure the root has loading class as early as possible
    try { document.documentElement.classList.add('app-loading'); } catch (e) {}
    document.addEventListener('DOMContentLoaded', initializeConfig);
    // Failsafe: if something blocks init, reveal after load/timeout
    window.addEventListener('load', () => {
        setTimeout(() => {
            const root = document.documentElement;
            if (!root.classList.contains('app-ready')) {
                root.classList.remove('app-loading');
                root.classList.add('app-ready');
            }
        }, 1500);
    });
} 