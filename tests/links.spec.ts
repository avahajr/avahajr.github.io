import { test, expect } from '@playwright/test';

test.describe('Link validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('all links should be valid and accessible', async ({ page }) => {
    // Get all links on the page
    const links = await page.locator('a[href]').all();

    console.log(`Found ${links.length} links to validate`);

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const href = await link.getAttribute('href');
      const linkText = await link.textContent();

      if (!href) continue;

      // LinkedIn will give a 999 error
      if (href.includes('linkedin.com')) {
        expect(href).toMatch(/^https:\/\/(www\.)?linkedin\.com\/.+/);
        console.log(`Skipping LinkedIn URL validation: ${href}`);
        continue;
      }

      console.log(`Checking link ${i + 1}: "${linkText}" -> ${href}`);

      // For external and internal HTTP links
      if (href.startsWith('http') || href.startsWith('/')) {
        const response = await page.request.get(href);

        // Check status code is successful (2xx or 3xx)
        expect(response.status(), `Link "${linkText}" (${href}) returned status ${response.status()}`).toBeLessThan(400);

        // For PDF links, verify content type
        if (href.includes('.pdf') || href.includes('resume')) {
          const contentType = response.headers()['content-type'];
          expect(contentType).toContain('application/pdf');
        }
      }
    }
  });


  test('external links open in new tab', async ({ page }) => {
    const externalLinks = await page.locator('a[href^="http"]:not([href*="' + new URL(page.url()).hostname + '"])').all();

    for (const link of externalLinks) {
      console.log(`Validating external link: ${await link.getAttribute('href')}`);
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');

      // External links should open in new tab
      expect(target).toBe('_blank');

      // Should have security attributes
      expect(rel).toContain('noopener');
    }
  });
});