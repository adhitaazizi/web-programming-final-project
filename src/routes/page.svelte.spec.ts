import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('renders hero, section headings, and key navigation links', async () => {
		render(Page);

		const heroHeading = page.getByRole('heading', {
			level: 1,
			name: /gojo satoru\s*portfolio/i
		});
		await expect.element(heroHeading).toBeInTheDocument();

		const featuredWorks = page.getByRole('heading', { level: 2, name: 'FEATURED WORKS' });
		const services = page.getByRole('heading', { level: 2, name: 'SKILLS' });
		const articles = page.getByRole('heading', { level: 2, name: 'ARTICLES' });

		await expect.element(featuredWorks).toBeInTheDocument();
		await expect.element(services).toBeInTheDocument();
		await expect.element(articles).toBeInTheDocument();

		const worksLink = page.getByRole('link', { name: 'Works', exact: true });
		const aboutLink = page.getByRole('link', { name: 'About' });
		const contactLink = page.getByRole('link', { name: 'Contact', exact: true });
		const briefingLink = page.getByRole('link', { name: 'BOOK A BRIEFING' });

		await expect.element(worksLink).toHaveAttribute('href', '#works');
		await expect.element(aboutLink).toHaveAttribute('href', '#about');
		await expect.element(contactLink).toHaveAttribute('href', '#contact');
		await expect.element(briefingLink).toHaveAttribute('href', '#contact');
	});
});
