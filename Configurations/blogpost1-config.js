// ===================================================================
// BLOG POST 1 CONFIGURATION - Crypto Casino Safety 101
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
	title: "Crypto Casino Safety 101: Ratings, KYC, and Payouts",
	excerpt: "How to read safety indices, when KYC triggers, and what to expect for withdrawals — play safer in 2025 with practical checklists.",
	category: "Safety Guide",
	categoryColor: "success",
	date: "September 2025",
	author: "Top 10 Crypto Casinos Editorial",
	readTime: 12,
	keywords: "crypto casino safety, KYC, payouts, responsible gaming, safety index, AML, licensing",
	image: "./assets/images/casino_test/kyc.webp",
	imageAlt: "Crypto casino safety guide",
	imageScale: 1.0,
	imagePositioning: { objectPosition: 'center', objectFit: 'cover' },
	socialImage: "./assets/images/casino_test/kyc.webp",
	tags: [
		{ text: "Safety", type: "success" },
		{ text: "KYC", type: "primary" },
		{ text: "Payouts", type: "accent" }
	]
};

const ARTICLE_CONTENT = {
	tableOfContents: [
		{ id: "indices", title: "Understanding Safety Indices", level: 1 },
		{ id: "licensing", title: "Licensing and Jurisdictions", level: 1 },
		{ id: "kyc", title: "KYC: Why, When, and What's Needed", level: 1 },
		{ id: "payouts", title: "Payout Speed: What Actually Affects It", level: 1 },
		{ id: "rg", title: "Responsible Gaming Tools to Use", level: 1 },
		{ id: "checklist", title: "Pre‑Deposit Checklist (2 Minutes)", level: 1 }
	],
	sections: [
		{
			id: "indices",
			title: "Understanding Safety Indices",
			content: `
				<p>Independent <strong>safety indices</strong> and review portals aggregate <strong>complaints, terms, license signals, dispute history</strong>, and responsiveness. Treat them as a <em>starting point</em> — read a few recent complaints to see how issues were handled and whether responses were timely.</p>
				<ul>
					<li>Favor casinos with <strong>clear banking pages</strong> (limits, networks, KYC triggers published).</li>
					<li>Check <strong>date stamps</strong> on ratings; sentiment can change quickly after policy updates.</li>
					<li>Look for <strong>patterned issues</strong> (identity checks, bonus violations) and how they’re resolved.</li>
				</ul>
			`
		},
		{
			id: "licensing",
			title: "Licensing and Jurisdictions",
			content: `
				<p>Most global crypto casinos operate under offshore licenses (e.g., <strong>Curaçao</strong>). While this allows global reach, it places extra responsibility on players to vet terms and reputation. Key signals:</p>
				<ul>
					<li><strong>Published license</strong> with verifiable company details.</li>
					<li><strong>Transparent T&Cs</strong> — bonus rules, verification, country restrictions.</li>
					<li><strong>Responsible‑gaming pages</strong> and clear support channels.</li>
				</ul>
				<p>Some brands also maintain enhanced <strong>compliance frameworks</strong> (e.g., region‑specific KYC, proof‑of‑funds on large withdrawals) consistent with AML expectations.</p>
			`
		},
		{
			id: "kyc",
			title: "KYC: Why, When, and What's Needed",
			content: `
				<p><strong>KYC</strong> is standard for larger withdrawals and AML checks. Prepare <strong>government ID</strong>, <strong>proof of address (last 3 months)</strong>, and <strong>payment method proof</strong> when requested. Name and address should match your account details.</p>
				<ul>
					<li><strong>When it triggers:</strong> High‑value withdrawals, risk flags, or region rules.</li>
					<li><strong>What helps:</strong> Upload high‑quality scans/photos; ask support for accepted file types.</li>
					<li><strong>Timing:</strong> Completing KYC <em>before</em> requesting large payouts avoids delays.</li>
				</ul>
			`
		},
		{
			id: "payouts",
			title: "Payout Speed: What Actually Affects It",
			content: `
				<p>Crypto rails are fast, but <strong>manual review, network conditions, and house limits</strong> govern the true experience.</p>
				<ul>
					<li><strong>Network congestion:</strong> Busy chains slow confirmations and raise fees.</li>
					<li><strong>Limits and queues:</strong> Daily/weekly caps, anti‑fraud checks, weekend staffing.</li>
					<li><strong>Details accuracy:</strong> Wrong network (e.g., USDT ERC20 vs TRC20) or missing memo/tag on XRP/XLM adds days.</li>
				</ul>
			`
		},
		{
			id: "rg",
			title: "Responsible Gaming Tools to Use",
			content: `
				<p>Use the built‑in tools to <strong>control risk</strong> and keep play fun.</p>
				<ul>
					<li><strong>Deposit, loss, and session limits</strong> with adjustable periods.</li>
					<li><strong>Time‑outs</strong> and <strong>self‑exclusion</strong> options.</li>
					<li><strong>Budget trackers</strong> and external help links.</li>
				</ul>
			`
		},
		{
			id: "checklist",
			title: "Pre‑Deposit Checklist (2 Minutes)",
			content: `
				<ul>
					<li>Read current <strong>bonus WR</strong>, <strong>weighting</strong>, and <strong>max‑bet</strong> rules.</li>
					<li>Check <strong>payment page</strong> for supported coins, networks, and <strong>limits</strong>.</li>
					<li>Scan <strong>recent complaints</strong> (6–12 months) for patterns and responses.</li>
					<li>Decide your <strong>limits</strong> — set them before you deposit.</li>
				</ul>
				<div class="final-cta">
					<h4>Play Safer, Play Smarter</h4>
					<p>Start with our Editor's Choice, then branch out based on your priorities (speed, safety, bonuses).</p>
					<a href="./index.html#editors-choice-review" class="btn btn-primary">Go to Editor's Choice</a>
				</div>
			`
		}
	]
};

const CTA_CONTENT = {
	title: "🛡️ Play Safer in 2025",
	description: "Understand KYC and payouts, use RG tools, and verify current bonus terms before you deposit.",
	buttonText: "See Editor's Choice",
	buttonLink: "./index.html#editors-choice-review"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
	{
		title: "Welcome Offers vs Reality: WR, Weighting, and EV in 2025",
		excerpt: "We decode wagering requirements, game weighting, time limits, max‑bet rules, and true expected value—compare offers the right way before you deposit.",
		image: "./assets/images/casino_test/bonuses.webp",
		imageScale: 1.0,
		imagePositioning: {
			objectPosition: 'center',
			objectFit: 'cover'
		},
		link: "./blogpost2.html",
		category: "Bonus Math",
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
class BlogPost1Manager {
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
		console.log('✅ Blog Post 1 content system loaded');
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
const blogPost1Manager = new BlogPost1Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		BLOGPOST_META,
		ARTICLE_CONTENT,
		CTA_CONTENT,
		RELATED_POSTS,
		BlogPost1Manager
	};
}

console.log('🎯 Blog Post 1 configuration loaded successfully');
