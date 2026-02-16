import { expect, test } from '@playwright/test';

test('home page renders core sections and navigation links', async ({ page }) => {
	test.setTimeout(120000);
	await page.goto('/', { waitUntil: 'domcontentloaded' });

	await expect(
		page.getByRole('heading', { level: 1, name: /gojo satoru\s*portfolio/i })
	).toBeVisible();
	await expect(page.getByRole('heading', { level: 2, name: 'FEATURED WORKS' })).toBeVisible();
	await expect(page.getByRole('heading', { level: 2, name: 'SKILLS' })).toBeVisible();
	await expect(page.getByRole('heading', { level: 2, name: 'ARTICLES' })).toBeVisible();

	await expect(page.getByRole('link', { name: 'Works', exact: true })).toHaveAttribute(
		'href',
		'#works'
	);
	await expect(page.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
	await expect(page.getByRole('link', { name: 'Contact', exact: true })).toHaveAttribute(
		'href',
		'#contact'
	);
	await expect(page.getByRole('link', { name: 'BOOK A BRIEFING' })).toHaveAttribute(
		'href',
		'#contact'
	);
	await expect(page.getByRole('link', { name: 'BACK TO TOP' })).toHaveAttribute('href', '#top');

	await expect(page.getByRole('img', { name: 'Agency hero visual' })).toBeVisible();
	await expect(page.getByRole('img', { name: 'Vehicle concept visual' })).toHaveAttribute(
		'src',
		/figma\.com\/api\/mcp\/asset\//
	);
});
