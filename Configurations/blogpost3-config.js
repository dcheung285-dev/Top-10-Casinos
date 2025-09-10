// ===================================================================
// BLOG POST 3 CONFIGURATION - Fast Payouts in 2025 (Crypto Casinos)
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
	title: "Fast Payouts in 2025: Testing Notes and Practical Tips",
	excerpt: "What actually speeds up crypto withdrawals — and what slows them down. Our testing notes plus a pre‑withdrawal checklist.",
	category: "Banking",
    categoryColor: "success",
	date: "September 2025",
	author: "Top 10 Crypto Casinos Editorial",
	readTime: 8,
	keywords: "crypto casino fast payouts, withdrawal speed, KYC, network fees, banking tips",
	// Leave images as-is per instructions
    image: "./assets/images/laptop_test/cooling.jpg",
	imageAlt: "Crypto casino payouts speed tips",
    imageScale: 1.0,
	imagePositioning: { objectPosition: 'center', objectFit: 'cover' },
    socialImage: "./assets/images/laptop_test/laptop_cooling_system.webp",
    tags: [
		{ text: "Payouts", type: "success" },
		{ text: "Speed", type: "primary" },
		{ text: "Tips", type: "accent" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    tableOfContents: [
		{ id: "factors", title: "What Actually Affects Speed", level: 1 },
		{ id: "coins", title: "Choosing Coins and Networks", level: 1 },
		{ id: "kyc", title: "KYC Readiness: Avoiding Last‑Minute Delays", level: 1 },
		{ id: "checklist", title: "Pre‑Withdrawal Checklist", level: 1 }
	],
    sections: [
        {
			id: "factors",
			title: "What Actually Affects Speed",
            content: `
				<ul>
					<li><strong>Manual Review:</strong> Large sums, bonus‑related cashouts, or risk flags can trigger additional checks.</li>
					<li><strong>Network Congestion:</strong> Busy chains (e.g., ETH L1 during peak times) extend confirmation windows.</li>
					<li><strong>Withdrawal Limits:</strong> Daily/weekly caps can split payouts into multiple transactions.</li>
					<li><strong>Incorrect Details:</strong> Wrong chain (USDT ERC20 vs TRC20) or missing tag/memo for XRP/XLM adds delays.</li>
                </ul>
            `
        },
        {
			id: "coins",
			title: "Choosing Coins and Networks",
            content: `
				<p>Pick the <strong>right network</strong> for speed and cost. Practical patterns:</p>
				<ul>
					<li><strong>Stablecoins:</strong> USDT/USDC on TRON (TRC20) or other low‑fee chains are typically fast and cheap.</li>
					<li><strong>ETH L1:</strong> Reliable but may be slower/expensive during congestion; consider L2s where supported.</li>
					<li><strong>BTC:</strong> Confirmation times vary with mempool; fees spike at peak demand.</li>
                </ul>
				<p>Always double‑check <strong>address formats</strong> and <strong>required memos/tags</strong> before submitting.</p>
			`
		},
		{
			id: "kyc",
			title: "KYC Readiness: Avoiding Last‑Minute Delays",
            content: `
				<p>For larger withdrawals, KYC is standard. Preparing documentation <em>before</em> requesting payouts avoids back‑and‑forth.</p>
				<ul>
					<li>Have <strong>government ID</strong>, <strong>proof of address</strong> (last 3 months), and <strong>payment method proof</strong> ready.</li>
					<li>Ensure account name matches documents and wallet ownership evidence if requested.</li>
					<li>Ask support which <strong>file formats/resolutions</strong> they accept to prevent rejection.</li>
                </ul>
            `
        },
        {
			id: "checklist",
			title: "Pre‑Withdrawal Checklist",
            content: `
				<ul>
					<li>Verify <strong>coin + network</strong> (e.g., USDT TRC20 vs ERC20).</li>
					<li>Confirm <strong>address accuracy</strong> and add destination <strong>tag/memo</strong> if required.</li>
					<li>Check <strong>limits and fees</strong>; split large sums if needed.</li>
					<li>Complete <strong>KYC</strong> early for higher‑value withdrawals.</li>
                </ul>
                <div class="final-cta">
					<h4>Withdraw Faster, Stress Less</h4>
					<p>Pick casinos with clear banking pages and a track record of fast processing — our list highlights top performers.</p>
					<a href="./index.html#top10" class="btn btn-primary">See Fast‑Payout Picks</a>
                </div>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
	title: "⚡ Get Paid Faster",
	description: "Choose the right coin, prepare KYC, and know your limits before you request.",
	buttonText: "See Fast‑Payout Picks",
	buttonLink: "./index.html#top10"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
    {
        title: "Crypto Casino Safety 101: Ratings, KYC, and Payouts",
        excerpt: "How to read safety indices, when KYC triggers, and what to expect for withdrawals — play safer in 2025 with practical checklists.",
        image: "./assets/images/casino_test/kyc.webp",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'center',
            objectFit: 'cover'
        },
        link: "./blogpost1.html",
        category: "Safety Guide",
        date: "September 2025"
    },
    {
        title: "Welcome Offers vs Reality: WR, Weighting, and EV in 2025",
        excerpt: "We decode wagering requirements, game weighting, time limits, max‑bet rules, and true expected value.",
        image: "./assets/images/casino_test/bonuses.webp",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'center',
            objectFit: 'cover'
        },
        link: "./blogpost2.html",
        category: "Bonus Math",
        date: "September 2025"
    }
    /* you can add more related posts here */
];

// ========== DYNAMIC CONTENT SYSTEM ==========
class BlogPost3Manager {
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
        this.updatePageMeta();
        this.populateContent();
        this.generateTableOfContents();
        this.populateTags();
        this.populateCTA();
        this.populateRelatedPosts();
        console.log('✅ Blog Post 3 content system loaded');
    }
    
    updatePageMeta() {
        // Update page title
        document.title = this.replacePlaceholders(BLOGPOST_META.title + " | {{BRAND_NAME}}");
        
        // Update meta tags
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.content = BLOGPOST_META.excerpt;
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.content = BLOGPOST_META.keywords;
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = BLOGPOST_META.title;
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.content = BLOGPOST_META.excerpt;
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.content = BLOGPOST_META.socialImage;
    }
    
    populateContent() {
        // Update hero section
        const categoryBadge = document.getElementById('category-badge');
        if (categoryBadge) {
            categoryBadge.textContent = BLOGPOST_META.category;
            categoryBadge.className = `badge badge-${BLOGPOST_META.categoryColor}`;
        }
        
        const postTitle = document.getElementById('post-title');
        if (postTitle) postTitle.textContent = BLOGPOST_META.title;
        
        const postDate = document.getElementById('post-date');
        if (postDate) postDate.textContent = BLOGPOST_META.date;
        
        const readTime = document.getElementById('read-time');
        if (readTime) readTime.textContent = `${BLOGPOST_META.readTime} min read`;
        
        const postAuthor = document.getElementById('post-author');
        if (postAuthor) postAuthor.textContent = BLOGPOST_META.author;
        
        const postExcerpt = document.getElementById('post-excerpt');
        if (postExcerpt) postExcerpt.textContent = BLOGPOST_META.excerpt;
        
        // Update featured image
        const featuredImage = document.getElementById('featured-image');
        if (featuredImage) {
            featuredImage.src = BLOGPOST_META.image;
            featuredImage.alt = BLOGPOST_META.imageAlt;
            featuredImage.style.transform = `scale(${BLOGPOST_META.imageScale || 1.0})`;
            featuredImage.style.objectPosition = BLOGPOST_META.imagePositioning?.objectPosition || 'center';
            featuredImage.style.objectFit = BLOGPOST_META.imagePositioning?.objectFit || 'cover';
        }
        
        // Populate article content
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            let contentHTML = '';
            
            ARTICLE_CONTENT.sections.forEach(section => {
                contentHTML += `
                    <section id="${section.id}" style="margin-bottom: var(--spacing-xl);">
                        <h2 style="color: var(--text-primary); margin-bottom: var(--spacing-lg); padding-bottom: var(--spacing-sm); border-bottom: 2px solid var(--primary-color);">
                            ${section.title}
                        </h2>
                        <div class="section-content" style="line-height: 1.8; color: var(--text-secondary);">
                            ${section.content}
                        </div>
                    </section>
                `;
            });
            
            articleContent.innerHTML = contentHTML;
        }
    }
    
    generateTableOfContents() {
        const tocContainer = document.createElement('div');
        tocContainer.className = 'table-of-contents';
        tocContainer.style.cssText = `
            background: var(--background-secondary);
            padding: var(--spacing-lg);
            border-radius: var(--border-radius-lg);
            margin-bottom: var(--spacing-xl);
            border-left: 4px solid var(--primary-color);
        `;
        
        let tocHTML = '<h3 style="margin-bottom: var(--spacing-md); color: var(--text-primary);">📋 Table of Contents</h3><ul style="list-style: none; padding: 0;">';
        
        ARTICLE_CONTENT.tableOfContents.forEach((item, index) => {
            const indent = item.level === 2 ? 'margin-left: var(--spacing-lg);' : '';
            tocHTML += `
                <li style="${indent} margin-bottom: var(--spacing-sm);">
                    <a href="#${item.id}" style="color: var(--primary-color); text-decoration: none; display: block; padding: var(--spacing-xs) 0; border-radius: var(--border-radius-sm); transition: all 0.3s ease;">
                        ${index + 1}. ${item.title}
                    </a>
                </li>
            `;
        });
        
        tocHTML += '</ul>';
        tocContainer.innerHTML = tocHTML;
        
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            articleContent.insertBefore(tocContainer, articleContent.firstChild);
        }
    }
    
    populateTags() {
        const tagsContainer = document.getElementById('tags-container');
        if (tagsContainer) {
            const tagsHTML = BLOGPOST_META.tags.map(tag => 
                `<span class="badge badge-${tag.type}" style="font-size: 0.9rem;">${tag.text}</span>`
            ).join('');
            tagsContainer.innerHTML = tagsHTML;
        }
    }
    
    populateCTA() {
        const ctaContent = document.getElementById('post-cta-content');
        if (ctaContent) {
            ctaContent.innerHTML = `
                <h3 style="margin-bottom: var(--spacing-md); color: var(--text-primary);">${CTA_CONTENT.title}</h3>
                <p style="margin-bottom: var(--spacing-lg); color: var(--text-secondary);">${CTA_CONTENT.description}</p>
                <a href="${CTA_CONTENT.buttonLink}" class="btn btn-primary" style="display: inline-block; padding: var(--spacing-md) var(--spacing-lg); text-decoration: none; border-radius: var(--border-radius-md); font-weight: 600;">
                    ${CTA_CONTENT.buttonText}
                </a>
            `;
        }
    }
    
    populateRelatedPosts() {
        const relatedGrid = document.getElementById('related-posts-grid');
        if (relatedGrid) {
            const postsHTML = RELATED_POSTS.map(post => `
                <article class="related-post-card" style="background: var(--background-primary); border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-md); transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;" onclick="window.location.href='${post.link}'">
                    <div class="post-image" style="height: 200px; overflow: hidden;">
                        <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: ${post.imagePositioning?.objectFit || 'cover'}; object-position: ${post.imagePositioning?.objectPosition || 'center center'}; transform: scale(${post.imageScale || 1.0}); transition: transform 0.3s ease;">
                    </div>
                    <div class="post-content" style="padding: var(--spacing-lg);">
                        <div class="post-meta" style="margin-bottom: var(--spacing-sm);">
                            <span class="category" style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600;">${post.category}</span>
                            <span style="margin: 0 var(--spacing-xs); color: var(--text-light);">•</span>
                            <span class="date" style="font-size: 0.85rem; color: var(--text-light);">${post.date}</span>
                        </div>
                        <h4 style="margin-bottom: var(--spacing-sm); color: var(--text-primary); font-size: 1.1rem; line-height: 1.4;">${post.title}</h4>
                        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5; margin: 0;">${post.excerpt}</p>
                    </div>
                </article>
            `).join('');
            
            relatedGrid.innerHTML = postsHTML;
        }
    }
    
    replacePlaceholders(text) {
        return text
            .replace(/\{\{BRAND_NAME\}\}/g, (window.BRAND_CONFIG && window.BRAND_CONFIG.name) || 'DC\'s Top 10')
            .replace(/\{\{NICHE\}\}/g, (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) || 'Products')
            .replace(/\{\{PRODUCT_TYPE\}\}/g, (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) || 'products');
    }
}

// Initialize the blog post manager
const blogPost3Manager = new BlogPost3Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost3Manager
    };
}

console.log('🎯 Blog Post 3 configuration loaded successfully');
