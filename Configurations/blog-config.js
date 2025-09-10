/*
===========================================
BLOG CONFIGURATION SYSTEM
===========================================
🎯 CHANGE YOUR BLOG SETTINGS HERE - EDIT THESE LINES ONLY:
Configure individual blog posts with all their content, images, categories, and badges.
*/

// ========== BLOG HERO SECTION ==========
const BLOG_HERO = {
    title: "Crypto Casino Blog",
    subtitle: "Independent reviews, safety insights, and bonus breakdowns for Bitcoin and crypto casinos. Learn where to get fast payouts, fair games, and the best value."
};

// ========== BLOG CTA BANNER CONFIGURATION ==========
const BLOG_CTA_BANNER = {
    enabled: true,
    background: {
        type: "gradient",
        imageUrl: "./assets/images/ad_banner_test.jpg",
        imageOverlay: "rgba(0, 0, 0, 0.4)",
        imageSize: "cover",
        imagePosition: "top",
        customSize: { width: "100%", height: "auto" },
        scale: 1.0,
    },
    content: {
        icon: "fas fa-coins",
        title: "Looking for the Best Crypto Casinos?",
        subtitle: "We verified ratings, welcome offers, and cashout speeds so you don’t have to.",
        button: { text: "View Our Top 10 Crypto Casinos", icon: "fas fa-trophy", link: "./index.html#top10" }
    }
};

// ========== INDIVIDUAL BLOG POSTS CONFIGURATION ==========
const BLOG_POSTS = {
    post1: {
        title: "Rocketpot Review 2025: Why It’s Our Editor’s Choice",
        excerpt: "Rocketpot pairs instant crypto withdrawals with a massive game selection, provably fair titles, and rich cashback. We cover coins, limits, and why it’s our top pick.",
        image: "./assets/images/casino_test/rocketpot_website.webp",
        imageAlt: "Rocketpot crypto casino review overview",
        
        // Image positioning and scaling settings
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'top center',
            objectFit: 'cover'
        },
        date: "September 2025",
        category: "Casino Review",
        categoryColor: "primary",
        link: "./index.html#editors-choice-review",
        badges: [
            { text: "Editor’s Choice", type: "primary" },
            { text: "Fast Payouts", type: "success" }
        ],
        ctaText: "🚀 Try Rocketpot:",
        ctaMessage: "Play fast with <a href=\"#rocketpot\" class=\"text-primary\">instant crypto withdrawals</a> and cashback."
    },
    post2: {
        title: "BC.Game Bonus Guide: Four Tiers Explained",
        excerpt: "A clear walkthrough of BC.Game’s four-tier deposit bonuses, micro crypto minimums, Originals, and 8,000+ games, plus safety context from third-party ratings.",
        image: "./assets/images/casino_test/bc.game_website.webp",
        imageAlt: "BC.Game casino bonus guide",
        imageScale: 1.0,
        imagePositioning: { objectPosition: 'center', objectFit: 'cover' },
        date: "September 2025",
        category: "Bonus Guide",
        categoryColor: "accent",
        link: "./index.html#review-2",
        badges: [ { text: "Big Bonus", type: "secondary" }, { text: "Guide", type: "accent" } ],
        ctaText: "💰 Get the bonus:",
        ctaMessage: "See tiers for <a href=\"#bcgame\" class=\"text-primary\">BC.Game</a> before you deposit."
    },
    post3: {
        title: "Crypto Casino Safety 101: Ratings, KYC, and Payouts",
        excerpt: "How to read third‑party safety indices, typical KYC triggers, and real withdrawal times—plus which sites score highest on reputation today.",
        image: "./assets/images/casino_test/kyc.webp",
        imageAlt: "Crypto casino safety guide",
        imageScale: 1.0,
        imagePositioning: { objectPosition: 'center', objectFit: 'cover' },
        date: "September 2025",
        category: "Safety Guide",
        categoryColor: "primary",
        link: "./blogpost1.html",
        badges: [ { text: "Safety", type: "primary" }, { text: "How-To", type: "secondary" } ],
        ctaText: "🛡️ Play safer:",
        ctaMessage: "See our <a href=\"./index.html#top10\" class=\"text-primary\">Top 10 list</a> with safety notes."
    },
    post4: {
        title: "Welcome Offers vs. Reality: What WR and Weighting Mean",
        excerpt: "We decode wagering requirements, game weighting, and time limits across major crypto casinos so you can compare true expected value.",
        image: "./assets/images/casino_test/bonuses.webp",
        imageAlt: "Casino wagering requirements explained",
        imageScale: 1.0,
        imagePositioning: { objectPosition: 'center', objectFit: 'cover' },
        date: "September 2025",
        category: "Bonus Math",
        categoryColor: "success",
        link: "./blogpost2.html",
        badges: [ { text: "WR", type: "secondary" }, { text: "EV", type: "success" } ],
        ctaText: "📊 Compare EV:",
        ctaMessage: "Start with <a href=\"index.html#review-1\" class=\"text-primary\">Stake</a> and <a href=\"index.html#editors-choice-review\" class=\"text-primary\">Rocketpot</a>."
    },
    post5: {
        title: "Fast Payouts: Our Testing Notes and Tips",
        excerpt: "What we saw in 2025 when withdrawing across top crypto casinos, plus practical steps to avoid delays (limits, docs, and network fees).",
        image: "./assets/images/casino_test/fast2.jpg",
        imageAlt: "Crypto casino payout speed tips",
        imageScale: 1.0,
        imagePositioning: { objectPosition: 'center', objectFit: 'cover' },
        date: "September 2025",
        category: "Banking",
        categoryColor: "success",
        link: "./blogpost3.html",
        badges: [ { text: "Payouts", type: "success" }, { text: "How-To", type: "secondary" } ],
        ctaText: "⚡ Go faster:",
        ctaMessage: "Try <a href=\"index.html#review-6\" class=\"text-primary\">mBitcasino</a> for crypto-only speed."
    },
    post6: {
        title: "Sports + Casino Under One Roof: Who Nails It?",
        excerpt: "Why Sportsbet.io stand out with its sportsbook and casino combined.",
        image: "./assets/images/casino_test/sportsbet.io_website.webp",
        imageAlt: "Best sportsbook + casino combo",
        imageScale: 1.0,
        imagePositioning: { objectPosition: 'top center', objectFit: 'cover' },
        date: "September 2025",
        category: "Sportsbook",
        categoryColor: "accent",
        link: "./index.html#review-8",
        badges: [ { text: "Sportsbook", type: "accent" }, { text: "Live Dealer", type: "primary" } ],
        ctaText: "🏟️ One account:",
        ctaMessage: "Check <a href=\"index.html#review-8\" class=\"text-primary\">Sportsbet.io</a>."
    }
};

// ========== BLOG DISPLAY SETTINGS ==========
const BLOG_DISPLAY_CONFIG = {
    showAllPosts: true,                     // Show all posts or limit to specific ones
    postsToShow: ['post1', 'post2', 'post3', 'post4', 'post5', 'post6'], // Which posts to display
    gridColumns: "repeat(auto-fit, minmax(350px, 1fr))",  // CSS grid columns
    showCTABanner: true,                    // Show the top 10 CTA banner
    enableHoverEffects: true                // Enable hover animations
};

// ========== CATEGORY COLOR MAPPINGS ==========
const CATEGORY_COLORS = {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)", 
    accent: "var(--accent-color)",
    success: "#22c55e",
    warning: "#f59e0b", 
    danger: "#ef4444"
};

// ========== BADGE TYPE MAPPINGS ==========
const BADGE_TYPES = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    success: "badge-success", 
    warning: "badge-warning",
    danger: "badge-danger"
};

/*
===========================================
🚀 BLOG DYNAMIC CONTENT SYSTEM
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

class BlogContentManager {
    constructor() {
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        this.loadHeroContent();
        this.loadCTABanner();
        this.generateBlogPosts();
        this.updatePageTitle();
        console.log('✅ Blog content system loaded with', Object.keys(BLOG_POSTS).length, 'posts');
    }
    
    /**
     * Load hero section content
     */
    loadHeroContent() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (heroTitle) {
            heroTitle.innerHTML = this.replacePlaceholders(BLOG_HERO.title);
        }
        
        if (heroSubtitle) {
            heroSubtitle.innerHTML = this.replacePlaceholders(BLOG_HERO.subtitle);
        }
    }
    
    /**
     * Load and generate CTA banner dynamically
     */
    loadCTABanner() {
        const ctaBannerContainer = document.querySelector('.top10-ad-box');
        
        if (!BLOG_CTA_BANNER.enabled) {
            // Remove banner if disabled
            if (ctaBannerContainer) {
                ctaBannerContainer.remove();
            }
            return;
        }
        
        if (!ctaBannerContainer) {
            console.warn('CTA banner container not found');
            return;
        }
        
        // Build banner HTML
        const bannerHTML = this.createCTABannerHTML();
        ctaBannerContainer.outerHTML = bannerHTML;
        
        console.log('✅ CTA banner loaded with dynamic configuration');
    }
    
    /**
     * Create CTA banner HTML from configuration
     */
    createCTABannerHTML() {
        const config = BLOG_CTA_BANNER;
        const content = config.content;
        const background = config.background;
        
        // Determine CSS class based on background type
        let cssClass = 'top10-ad-box';
        let additionalStyle = '';
        
        if (background.type === 'image') {
            cssClass += ' top10-ad-box-image';
            
            // Build image styles
            let imageStyles = [`background-image: url(${background.imageUrl})`];
            
            // Add image size handling
            if (background.imageSize === 'custom' && background.customSize) {
                imageStyles.push(`background-size: ${background.customSize.width} ${background.customSize.height}`);
            } else {
                let baseSize = background.imageSize || 'cover';
                
                // Apply scale if specified and not using custom size
                if (background.scale && background.scale !== 1.0) {
                    if (baseSize === 'cover' || baseSize === 'contain') {
                        // For cover/contain, scale using percentage
                        const scalePercent = Math.round(background.scale * 100);
                        baseSize = `${scalePercent}%`;
                    } else if (baseSize === 'auto') {
                        // For auto, we'll use CSS transform on the container
                        cssClass += ' top10-ad-box-scaled';
                        additionalStyle += ` transform: scale(${background.scale});`;
                    }
                }
                
                imageStyles.push(`background-size: ${baseSize}`);
            }
            
            // Add image position
            if (background.imagePosition) {
                imageStyles.push(`background-position: ${background.imagePosition}`);
            }
            
            // Add repeat setting
            imageStyles.push('background-repeat: no-repeat');
            
            additionalStyle = imageStyles.join('; ') + ';';
            
            // Add overlay if specified
            if (background.imageOverlay) {
                additionalStyle += ` background-blend-mode: multiply; background-color: ${background.imageOverlay};`;
            }
        } else if (background.type === 'solid') {
            cssClass += ' top10-ad-box-solid';
        } else {
            cssClass += ' top10-ad-box-gradient'; // Default gradient
        }
        
        return `
            <div class="${cssClass}" style="${additionalStyle}">
                <h3>
                    <i class="${content.icon}"></i>
                    ${this.replacePlaceholders(content.title)}
                </h3>
                <p>
                    ${this.replacePlaceholders(content.subtitle)}
                </p>
                <a href="${content.button.link}" class="btn btn-secondary">
                    <i class="${content.button.icon}"></i>
                    ${content.button.text}
                </a>
            </div>
        `;
    }
    
    /**
     * Generate blog posts dynamically
     */
    generateBlogPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) {
            console.warn('Blog grid container not found');
            return;
        }
        
        // Clear existing content
        blogGrid.innerHTML = '';
        
        // Generate posts based on configuration
        const postsToRender = BLOG_DISPLAY_CONFIG.showAllPosts ? 
            Object.keys(BLOG_POSTS) : 
            BLOG_DISPLAY_CONFIG.postsToShow;
            
        postsToRender.forEach(postKey => {
            const post = BLOG_POSTS[postKey];
            if (!post) {
                console.warn(`Blog post ${postKey} not found in configuration`);
                return;
            }
            
            const blogPostHTML = this.createBlogPostHTML(post);
            blogGrid.insertAdjacentHTML('beforeend', blogPostHTML);
        });
        
        // Apply grid styling
        if (BLOG_DISPLAY_CONFIG.gridColumns) {
            blogGrid.style.gridTemplateColumns = BLOG_DISPLAY_CONFIG.gridColumns;
        }
    }
    
    /**
     * Create HTML for individual blog post
     */
    createBlogPostHTML(post) {
        const categoryColor = CATEGORY_COLORS[post.categoryColor] || CATEGORY_COLORS.primary;
        const badgesHTML = post.badges.map(badge => 
            `<span class="badge ${BADGE_TYPES[badge.type] || 'badge-secondary'}">${this.replacePlaceholders(badge.text)}</span>`
        ).join('');
        
        // Determine if link is external (starts with http/https) or internal
        const isExternalLink = post.link.startsWith('http://') || post.link.startsWith('https://');
        const linkAttributes = isExternalLink ? 'target="_blank" rel="noopener noreferrer"' : '';
        
        return `
            <article class="blog-post">
                <div class="blog-post-image">
                    <img src="${post.image}" 
                         alt="${this.replacePlaceholders(post.imageAlt)}" 
                         loading="lazy"
                         style="transform: scale(${post.imageScale || 1.0}); 
                                object-position: ${post.imagePositioning?.objectPosition || 'center'}; 
                                object-fit: ${post.imagePositioning?.objectFit || 'cover'};">
                </div>
                <div class="blog-post-content">
                    <div class="blog-post-meta">
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-category" style="background: ${categoryColor};">${post.category}</span>
                    </div>
                    <h2 class="blog-post-title">
                        <a href="${post.link}" ${linkAttributes}>${this.replacePlaceholders(post.title)}</a>
                    </h2>
                    <p class="blog-post-excerpt">
                        ${this.replacePlaceholders(post.excerpt)}
                    </p>
                    
                    <!-- Internal Link CTA -->
                    <div class="blog-cta-inline">
                        <p><strong>${post.ctaText}</strong> ${this.replacePlaceholders(post.ctaMessage)}</p>
                    </div>
                    
                    <div class="blog-post-footer">
                        <a href="${post.link}" ${linkAttributes} class="btn btn-outline">Read More</a>
                        <div class="blog-post-tags">
                            ${badgesHTML}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }
    
    /**
     * Update page title
     */
    updatePageTitle() {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const currentTitle = titleElement.textContent;
            titleElement.textContent = this.replacePlaceholders(currentTitle);
        }
    }
    
    /**
     * Replace placeholders with actual values
     */
    replacePlaceholders(text) {
        if (!text) return '';
        
        let result = text;
        
        // Replace from global config
        if (typeof window !== 'undefined') {
            if (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) {
                result = result.replace(/\{\{NICHE\}\}/g, window.NICHE_CONFIG.niche);
            }
            if (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) {
                result = result.replace(/\{\{PRODUCT_TYPE\}\}/g, window.NICHE_CONFIG.productType);
            }
            if (window.BRAND_NAME_TEXT) {
                result = result.replace(/\{\{BRAND_NAME_TEXT\}\}/g, window.BRAND_NAME_TEXT);
            }
            
            // Try brand config
            if (window.BrandManager) {
                const brandConfig = window.BrandManager.get();
                result = result.replace(/\{\{BRAND_NAME_TEXT\}\}/g, brandConfig.text.name);
            }
        }
        
        return result;
    }
}

// Initialize the blog content manager
const blogContentManager = new BlogContentManager();

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.BLOG_HERO = BLOG_HERO;
    window.BLOG_CTA_BANNER = BLOG_CTA_BANNER;
    window.BLOG_POSTS = BLOG_POSTS;
    window.BLOG_DISPLAY_CONFIG = BLOG_DISPLAY_CONFIG;
    window.CATEGORY_COLORS = CATEGORY_COLORS;
    window.BADGE_TYPES = BADGE_TYPES;
    window.blogContentManager = blogContentManager;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOG_HERO,
        BLOG_CTA_BANNER,
        BLOG_POSTS,
        BLOG_DISPLAY_CONFIG,
        CATEGORY_COLORS,
        BADGE_TYPES,
        BlogContentManager
    };
} 