import { test, expect } from './fixtures';

// each link in the navbar that you click (if it's visible) should scroll to the correct section

test.describe('Navbar scrollspy functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    for (const navItem of [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]) {
        test(`Clicking on ${navItem.label} scrolls to the correct section`, async ({ page }) => {
            const navLink = page.getByRole('button', { name: navItem.label });

            const isVisible = await navLink.isVisible();

            test.skip(!isVisible, `${navItem.label} link is not visible, skipping test.`);

            await navLink.click();

            // wait for the document's title to be updated
            await expect.poll(async () => await page.title(), { timeout: 5000 }).toContain(navItem.label);

            const section = page.locator(navItem.href);
            await expect(section).toBeVisible();

            const boundingBox = await section.boundingBox();
            expect(boundingBox).not.toBeNull();

            if (boundingBox) {
                const viewportHeight = await page.evaluate(() => window.innerHeight);
                expect(boundingBox.y).toBeGreaterThanOrEqual(0);
                expect(boundingBox.y).toBeLessThanOrEqual(viewportHeight);
            }
        });
    }
});