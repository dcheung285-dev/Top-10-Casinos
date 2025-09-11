// ===================================================================
// BLOG POST 2 CONFIGURATION - Welcome Offers vs Reality (Crypto Casinos)
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
	title: "Welcome Offers vs Reality: WR, Weighting, and EV in 2025",
	excerpt: "We decode wagering requirements, game weighting, time limits, max‑bet rules, and true expected value—compare offers the right way before you deposit.",
	category: "Bonus Math",
	categoryColor: "accent",
	date: "September 2025",
	author: "Top 10 Crypto Casinos Editorial",
    readTime: 10,
	keywords: "casino bonus wagering requirements, game weighting, expected value, promo math, non-sticky bonus, sticky bonus",
	// Leave images as-is per instructions
    image: "./assets/images/casino_test/bonuses.webp",
	imageAlt: "Casino bonus wagering explained",
    imageScale: 1.0,
	imagePositioning: { objectPosition: 'center', objectFit: 'cover' },
    socialImage: "./assets/images/casino_test/bonuses.webp",
    tags: [
		{ text: "WR", type: "secondary" },
		{ text: "Weighting", type: "primary" },
		{ text: "EV", type: "success" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    tableOfContents: [
		{ id: "wr", title: "What Wagering Requirements Really Mean", level: 1 },
		{ id: "weighting", title: "Game Weighting: Slots vs Live", level: 1 },
		{ id: "timers", title: "Time Limits, Max Bets, and Eligible Games", level: 1 },
		{ id: "bonus-types", title: "Sticky vs Non‑Sticky Bonuses", level: 1 },
		{ id: "ev", title: "Expected Value: A Simple Framework", level: 1 },
		{ id: "compare", title: "How to Compare Offers Fairly", level: 1 }
	],
    sections: [
        {
			id: "wr",
			title: "What Wagering Requirements Really Mean",
            content: `
				<p><strong>Wagering Requirements (WR)</strong> specify how much you must stake before withdrawing bonus‑related funds. Common forms:</p>
				<ul>
					<li><strong>Bonus x WR</strong>: e.g., 30× bonus — deposit $100, get $100 bonus → must wager $3,000.</li>
					<li><strong>(Deposit + Bonus) x WR</strong>: e.g., 30× on $100 + $100 → must wager $6,000.</li>
					<li><strong>Cashback/Rakeback WR</strong>: often lower, but still check timers and caps.</li>
                </ul>
				<p>Higher WR, combined with short time limits, can make offers hard to clear. Always read the <em>exact base</em> used for WR (bonus only vs deposit+bonus).</p>
			`
		},
		{
			id: "weighting",
			title: "Game Weighting: Slots vs Live",
            content: `
				<p>Not all games contribute equally to WR. Typical patterns:</p>
				<ul>
					<li><strong>Slots:</strong> often 100% contribution (some titles excluded or capped).</li>
					<li><strong>Live dealer/table games:</strong> commonly 5–20% or excluded.</li>
					<li><strong>Low‑RTP / advantage titles:</strong> frequently excluded or limited by max bet rules.</li>
                </ul>
				<p>Weighting directly affects how fast you can finish WR. If live games are your priority, many offers become less practical — plan accordingly.</p>
			`
		},
		{
			id: "timers",
			title: "Time Limits, Max Bets, and Eligible Games",
            content: `
				<p>Welcome offers usually include <strong>time limits</strong> (e.g., 7–30 days), <strong>max bet per spin/hand</strong> during WR (e.g., $5), and lists of <strong>excluded or capped games</strong>.</p>
				<ul>
					<li><strong>Timers:</strong> Ensure you can realistically complete WR in the window.</li>
					<li><strong>Max bet:</strong> Exceeding caps can void the bonus — a common pitfall.</li>
					<li><strong>Excluded lists:</strong> Check the T&Cs page; some high‑volatility or bonus‑buy slots are restricted.</li>
                </ul>
				<p>Geo‑specific terms and KYC checks may apply to large withdrawals (standard AML compliance).</p>
			`
		},
		{
			id: "bonus-types",
			title: "Sticky vs Non‑Sticky Bonuses",
            content: `
				<p><strong>Non‑sticky (parachute) bonus:</strong> Your cash balance is used first. If you win and withdraw before touching the bonus, you keep profits — best flexibility.</p>
				<p><strong>Sticky bonus:</strong> The bonus becomes part of your balance but cannot be withdrawn; only winnings above the bonus are cashable. Read the exact definition in T&Cs.</p>
			`
		},
		{
			id: "ev",
			title: "Expected Value: A Simple Framework",
            content: `
				<p>Think in terms of <strong>playthrough cost</strong> vs <strong>bonus value</strong>.</p>
				<ul>
					<li><strong>Playthrough cost ≈</strong> house edge × required wagering × weighting effects.</li>
					<li><strong>Effective value ≈</strong> bonuses + cashback + rakeback − playthrough cost.</li>
					<li><strong>Higher‑weight, fair‑RTP games</strong> improve EV; low‑weight games drag completion.</li>
                </ul>
				<p>Non‑sticky structures can dramatically improve practical EV for skilled bankroll management.</p>
            `
        },
        {
			id: "compare",
			title: "How to Compare Offers Fairly",
            content: `
				<ul>
					<li>Normalize by <strong>WR base</strong> (bonus vs deposit+bonus), <strong>weighting</strong>, <strong>timer</strong>, and <strong>max bet</strong>.</li>
					<li>Prefer transparent dashboards and clear <strong>promo pages</strong>.</li>
					<li>Segment bankroll: <strong>bonus play</strong> vs <strong>cash play</strong> to avoid accidental violations.</li>
					<li>Track progress; avoid last‑minute high‑risk bets to “force” completion.</li>
                </ul>
                <div class="final-cta">
					<h4>Pick the Right Offer for You</h4>
					<p>Start with transparent terms; if you value headline size, pace your play to finish WR comfortably.</p>
					<a href="./index.html#top10" class="btn btn-primary">See Current Top Picks</a>
                </div>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
	title: "📊 Compare Offers the Smart Way",
	description: "Balance WR, weighting, timers, and EV—don't chase ceilings you can't realistically clear.",
	buttonText: "View Top Picks",
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
        title: "Fast Payouts in 2025: Testing Notes and Practical Tips",
        excerpt: "What actually speeds up crypto withdrawals — and what slows them down. Our testing notes plus a pre‑withdrawal checklist.",
        image: "./assets/images/casino_test/fast2.jpg",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'center',
            objectFit: 'fill'
        },
        link: "./blogpost3.html",
        category: "Banking",
        date: "September 2025"
    }
    /* you can add more related posts here */
];

// ========== DYNAMIC CONTENT SYSTEM ==========
class BlogPost2Manager {
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
        console.log('✅ Blog Post 2 content system loaded');
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
const blogPost2Manager = new BlogPost2Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost2Manager
    };
}

console.log('🎯 Blog Post 2 configuration loaded successfully');
