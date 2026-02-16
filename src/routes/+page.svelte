<script lang="ts">
	const images = {
		hero: '/images/hero.png',
		work1: '/images/work1.png',
		work2: '/images/work2.png',
		work3: '/images/work3.png',
		work4: '/images/work4.png',
		about: '/images/about.png',
		service1: '/images/service1.png',
		service2: '/images/service2.png',
		article1: '/images/article1.png',
		article2: '/images/article2.png',
		article3: '/images/article3.png',
		contact: '/images/contact.png',
		footerTitle: '/images/footer-title.svg'
	};

	const works = [
		{ name: 'Build', src: images.work1 },
		{ name: 'Circle', src: images.work2 },
		{ name: 'GLT', src: images.work3 },
		{ name: 'Node', src: images.work4 }
	];

	const articles = [
		{ date: 'Medium - Aug 19th', title: 'Oneday, Things Might Change', src: images.article1 },
		{ date: 'Medium - Aug 19th', title: 'A Moving Man must meet his luck', src: images.article2 },
		{
			date: 'Medium - Aug 23rd',
			title: 'A Recap of 2023, Resolutions for 2024',
			src: images.article3
		}
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.cdnfonts.com/css/neue-montreal" rel="stylesheet" />
	<title>Gojo Satoru - Personal Portfolio</title>
</svelte:head>

<main class="page" id="top">
	<nav class="nav" aria-label="Primary">
		<div class="links">
			<a href="#works">Works</a>
			<a href="#about">About</a>
			<a href="#contact">Contact</a>
		</div>
	</nav>

	<section class="hero">
		<div class="hero-content">
			<h1>Gojo Satoru<br />Portfolio</h1>
			<p>
				I design beautiful visual identities and websites for startups with big ideas and bigger
				goals.
			</p>
			<a class="cta" href="#contact">START A PROJECT</a>
		</div>
		<img src={images.hero} alt="Agency hero visual" class="hero-image" loading="eager" />
	</section>

	<section class="works" id="works">
		<div class="section-head">
			<h2>FEATURED WORKS</h2>
			<p>Curated collection of purposeful and memorable digital design.</p>
		</div>
		<div class="works-grid">
			{#each works as work (work.name)}
				<article>
					<img src={work.src} alt={work.name} loading="lazy" />
					<div class="work-meta">
						<span>{work.name}</span>
						<span class="dot" aria-hidden="true"></span>
					</div>
				</article>
			{/each}
		</div>
		<a class="all-works" href="#works">All works</a>
	</section>

	<section class="about" id="about">
		<p class="about-label">(About)</p>
		<div class="about-body">
			<img src={images.about} alt="Portrait detail" loading="lazy" />
			<p>
				Whether you’re launching something new or leveling up what you already have, 
				I’m here to make the design process feel easy (and maybe even fun). I’ve been designing for over 6 years, 
				and in that time, I’ve worked with coaches, makers, freelancers, and founders from all kinds of industries.
			</p>
		</div>
	</section>

	<section class="services" id="services">
		<div class="section-head">
			<h2>SERVICES</h2>
			<p>Curated collection of purposeful and memorable digital design.</p>
		</div>
		<article class="service service-dark">
			<div class="service-left">
				<p class="index">01</p>
				<ul>
					<li>Brand identity</li>
					<li>Brand guidelines</li>
					<li>Brand strategy</li>
					<li>Rebranding</li>
				</ul>
			</div>
			<div class="service-copy">
				<h3>Brand<br />Identity</h3>
				<p>
					I craft meaningful brand identities that reflect who you are, connect with the right
					people, and give you the confidence to show up as your best self - online and off.
				</p>
			</div>
			<img src={images.service1} alt="Brand identity service" loading="lazy" />
		</article>
		<article class="service service-light">
			<div class="service-left">
				<p class="index">02</p>
				<ul>
					<li>Website strategy</li>
					<li>Custom Web Design</li>
					<li>Responsive Design</li>
					<li>Web Development</li>
				</ul>
			</div>
			<div class="service-copy">
				<h3>Web<br />Design</h3>
				<p>
					I design intentional websites that reflect who you are, connect with the right people, and
					give you the confidence to show up online with clarity and purpose.
				</p>
			</div>
			<img src={images.service2} alt="Web design service" loading="lazy" />
		</article>
	</section>

	<section class="articles" id="articles">
		<h2>ARTICLES</h2>
		<div class="article-grid">
			{#each articles as article (article.title)}
				<article>
					<img src={article.src} alt={article.title} loading="lazy" />
					<p>{article.date}</p>
					<h4>{article.title}</h4>
				</article>
			{/each}
		</div>
	</section>

	<section class="contact" id="contact">
		<img src={images.contact} alt="Vehicle concept visual" loading="lazy" />
		<div class="contact-overlay">
			<p>Take your brand to the next level.</p>
			<a href="#contact" class="book">BOOK A CALL</a>
		</div>
	</section>

	<footer class="footer">
		<img src={images.footerTitle} alt="The Great" class="footer-title" loading="lazy" />
		<div class="footer-grid">
			<div>
				<h5>SITEMAP</h5>
				<p>HOME</p>
				<p>WORKS</p>
				<p>ABOUT</p>
				<p>SERVICES</p>
				<p>CONTACT</p>
			</div>
			<div>
				<h5>SOCIALS</h5>
				<p>BEHANCE</p>
				<p>LINKEDIN</p>
				<p>X (TWITTER)</p>
				<p>INSTAGRAM</p>
				<p>DRIBBBLE</p>
			</div>
			<div>
				<h5>FIND US</h5>
				<p>32 STREET, THE 21TH BUILDING,</p>
				<p>Tokyo, Japan</p>
			</div>
			<div>
				<h5>CONTACT</h5>
				<p>GOJOSATORU@GMAIL.COM</p>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; 2023</p>
			<p>GOJO SATORU</p>
			<a href="#top">BACK TO TOP</a>
		</div>
	</footer>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Neue Montreal', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background: #f0f1f1;
		color: #000;
		scroll-behavior: smooth;
	}

	* {
		box-sizing: border-box;
	}

	main.page {
		max-width: 1440px;
		margin: 0 auto;
		padding: 12px 24px 48px;
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20px;
		font-weight: 500;
		opacity: 0;
		animation: rise-in 640ms cubic-bezier(0.22, 1, 0.36, 1) 60ms forwards;
	}

	.links {
		display: flex;
		gap: 32px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.hero {
		margin-top: 32px;
		opacity: 0;
		animation: rise-in 720ms cubic-bezier(0.22, 1, 0.36, 1) 140ms forwards;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr auto;
		column-gap: 24px;
		align-items: end;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	p {
		margin: 0;
	}

	h1 {
		font-size: clamp(58px, 8vw, 96px);
		line-height: 0.94;
		letter-spacing: -1.92px;
		font-weight: 700;
	}

	.hero-content p {
		grid-column: 1;
		font-size: clamp(20px, 3.4vw, 36px);
		line-height: 0.95;
		color: #454747;
		max-width: 620px;
		margin-top: 28px;
	}

	.cta {
		grid-column: 2;
		align-self: end;
		background: #000;
		color: #f0f1f1;
		padding: 14px 24px;
		border-radius: 5px;
		font-size: 20px;
		font-weight: 700;
		line-height: 1;
		transition:
			transform 220ms ease,
			box-shadow 220ms ease,
			opacity 220ms ease;
	}

	.cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgb(0 0 0 / 18%);
	}

	.hero-image {
		margin-top: 48px;
		width: 100%;
		height: auto;
		border-radius: 20px 20px 0 0;
		display: block;
	}

	section {
		margin-top: 56px;
	}

	.works,
	.about,
	.services,
	.articles,
	.contact,
	.footer {
		opacity: 0;
		animation: rise-in 740ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	.works {
		animation-delay: 220ms;
	}

	.about {
		animation-delay: 300ms;
	}

	.services {
		animation-delay: 380ms;
	}

	.articles {
		animation-delay: 460ms;
	}

	.contact {
		animation-delay: 540ms;
	}

	.footer {
		animation-delay: 620ms;
	}

	.section-head {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: end;
		gap: 16px;
	}

	h2 {
		font-size: clamp(52px, 7vw, 96px);
		line-height: 0.94;
		letter-spacing: -1.92px;
		font-weight: 700;
		color: #1e1e1e;
	}

	.section-head p {
		font-size: clamp(18px, 2.5vw, 32px);
		line-height: 1;
		letter-spacing: -0.96px;
		color: #454747;
		max-width: 500px;
	}

	.works-grid {
		margin-top: 26px;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 20px;
	}

	.works-grid article:nth-child(1) {
		grid-column: 1;
		grid-row: 1;
	}

	.works-grid article:nth-child(2) {
		grid-column: 3;
		grid-row: 1;
	}

	.works-grid article:nth-child(3) {
		grid-column: 2;
		grid-row: 2;
	}

	.works-grid article:nth-child(4) {
		grid-column: 3;
		grid-row: 2;
	}

	.works-grid img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 10px;
	}

	.works-grid article,
	.article-grid article,
	.service {
		opacity: 0;
		transform: translateY(14px);
		animation: item-in 680ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
	}

	.works-grid article:nth-child(1),
	.article-grid article:nth-child(1),
	.services .service:nth-child(2) {
		animation-delay: 260ms;
	}

	.works-grid article:nth-child(2),
	.article-grid article:nth-child(2),
	.services .service:nth-child(3) {
		animation-delay: 340ms;
	}

	.works-grid article:nth-child(3),
	.article-grid article:nth-child(3) {
		animation-delay: 420ms;
	}

	.works-grid article:nth-child(4) {
		animation-delay: 500ms;
	}

	.work-meta {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 40px;
		line-height: 1;
	}

	.dot {
		width: 28px;
		height: 28px;
		background: #000;
		border-radius: 999px;
	}

	.all-works {
		display: inline-block;
		margin-top: 24px;
		padding-bottom: 2px;
		font-size: 64px;
		line-height: 0.95;
		border-bottom: 5px solid #000;
		transition:
			transform 220ms ease,
			opacity 220ms ease;
	}

	.all-works:hover {
		transform: translateY(-2px);
	}

	.about-label {
		font-size: 32px;
		line-height: 1;
		letter-spacing: -0.96px;
		color: #5f5e5e;
	}

	.about-body {
		margin-top: 20px;
		display: grid;
		grid-template-columns: 174px 1fr;
		gap: 28px;
		align-items: start;
	}

	.about-body img {
		width: 174px;
		height: 208px;
		object-fit: cover;
	}

	.about-body p {
		font-size: clamp(30px, 4.6vw, 64px);
		line-height: 0.95;
	}

	.services .section-head {
		margin-bottom: 24px;
	}

	.service {
		display: grid;
		grid-template-columns: 240px 1fr 440px;
		gap: 24px;
		padding: 24px;
	}

	.service-dark {
		background: #aaabac;
	}

	.service-light {
		background: #ececec;
	}

	.service-left .index {
		font-size: 96px;
		line-height: 0.94;
		font-weight: 700;
		letter-spacing: -1.92px;
	}

	.service-left ul {
		list-style: none;
		padding: 0;
		margin: 24px 0 0;
		font-size: 20px;
		line-height: 1.2;
	}

	.service-copy {
		display: grid;
		align-content: space-between;
		gap: 20px;
	}

	.service-copy h3 {
		font-size: clamp(52px, 6vw, 96px);
		line-height: 0.94;
		font-weight: 700;
		letter-spacing: -1.92px;
	}

	.service-copy p {
		font-size: clamp(28px, 3vw, 40px);
		line-height: 1;
	}

	.service img {
		width: 100%;
		height: 100%;
		max-height: 544px;
		object-fit: cover;
		border-radius: 10px;
	}

	.articles h2 {
		margin-bottom: 22px;
	}

	.article-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 20px;
	}

	.article-grid img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 10px;
	}

	.article-grid p {
		margin-top: 12px;
		font-size: 32px;
		line-height: 1;
		color: #454747;
		letter-spacing: -0.96px;
	}

	.article-grid h4 {
		margin-top: 10px;
		font-size: 32px;
		line-height: 1;
		font-weight: 500;
		letter-spacing: -0.96px;
	}

	.contact {
		position: relative;
	}

	.contact img {
		display: block;
		width: 100%;
		height: auto;
	}

	.contact-overlay {
		position: absolute;
		inset: 0;
		display: grid;
		place-content: center;
		justify-items: center;
		gap: 20px;
		text-align: center;
	}

	.contact-overlay p {
		font-size: clamp(22px, 3vw, 32px);
		line-height: 1;
		font-weight: 700;
		letter-spacing: -0.96px;
		color: #ececec;
		text-transform: uppercase;
	}

	.book {
		background: #ececec;
		color: #000;
		padding: 12px 30px;
		border-radius: 5px;
		font-size: 20px;
		line-height: 1;
		font-weight: 700;
		transition:
			transform 220ms ease,
			box-shadow 220ms ease;
	}

	.book:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgb(0 0 0 / 16%);
	}

	@keyframes rise-in {
		from {
			opacity: 0;
			transform: translateY(18px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes item-in {
		from {
			opacity: 0;
			transform: translateY(14px) scale(0.99);
		}

		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.footer {
		margin-top: 56px;
	}

	.footer-title {
		display: block;
		width: 100%;
		height: auto;
	}

	.footer-grid {
		margin-top: 36px;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 20px;
	}

	.footer-grid h5 {
		font-size: 20px;
		line-height: 1.4;
		font-weight: 700;
		letter-spacing: -0.2px;
	}

	.footer-grid p {
		font-size: 20px;
		line-height: 1.4;
		letter-spacing: -0.2px;
	}

	.footer-bottom {
		margin-top: 36px;
		padding-top: 12px;
		border-top: 1px solid #000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20px;
		color: #454747;
	}

	@media (max-width: 1024px) {
		main.page {
			padding: 12px 14px 30px;
		}

		.hero-content {
			grid-template-columns: 1fr;
		}

		.cta {
			grid-column: 1;
			justify-self: end;
			margin-top: 10px;
			font-size: 11px;
			padding: 6px 10px;
		}

		.section-head,
		.works-grid,
		.about-body,
		.service,
		.article-grid,
		.footer-grid {
			grid-template-columns: 1fr 1fr;
		}

		.works-grid article:nth-child(2),
		.works-grid article:nth-child(3),
		.works-grid article:nth-child(4) {
			grid-column: auto;
			grid-row: auto;
		}

		.work-meta,
		.all-works {
			font-size: 20px;
		}

		.dot {
			width: 10px;
			height: 10px;
		}

		.about-label,
		.section-head p,
		.article-grid p,
		.article-grid h4,
		.footer-grid p,
		.footer-grid h5,
		.footer-bottom {
			font-size: 10px;
			line-height: 1.2;
			letter-spacing: 0;
		}

		h2,
		.service-left .index,
		.service-copy h3,
		.all-works {
			font-size: 48px;
			letter-spacing: -0.8px;
		}

		.about-body img {
			width: 84px;
			height: 100px;
		}

		.about-body p,
		.service-copy p,
		.work-meta span,
		.hero-content p,
		.book,
		.nav {
			font-size: 10px;
			line-height: 1.2;
			letter-spacing: 0;
		}

		h1 {
			font-size: 40px;
			letter-spacing: -0.8px;
		}

		.hero-image {
			margin-top: 16px;
			border-radius: 0;
		}

		.service {
			padding: 10px;
			gap: 10px;
		}

		.service-left ul {
			font-size: 6px;
			margin-top: 8px;
		}

		.footer-bottom {
			margin-top: 14px;
			padding-top: 8px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			animation: none !important;
			transition: none !important;
			scroll-behavior: auto !important;
		}
	}
</style>
