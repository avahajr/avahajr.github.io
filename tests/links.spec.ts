import { test, expect } from "./fixtures";

test.describe("Link validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("all links should be valid and accessible", async ({ page }) => {
    // Get all links on the page
    const links = await page.locator("a[href]").all();

    console.log(`Found ${links.length} links to validate`);

    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      const href = await link.getAttribute("href");
      const linkText = await link.textContent();

      if (!href) continue;

      // LinkedIn will give a 999 error
      if (href.includes("linkedin.com")) {
        expect(href).toMatch(/^https:\/\/(www\.)?linkedin\.com\/.+/);
        console.log(`Skipping LinkedIn URL validation: ${href}`);
        continue;
      }

      console.log(`Checking link ${i + 1}: "${linkText}" -> ${href}`);

      // For external and internal HTTP links
      if (href.startsWith("http") || href.startsWith("/")) {
        const response = await page.request.get(href);

        // Check status code is successful (2xx or 3xx)
        expect(
          response.status(),
          `Link "${linkText}" (${href}) returned status ${response.status()}`,
        ).toBeLessThan(400);

        // For PDF links, verify content type
        if (href.includes(".pdf") || href.includes("resume")) {
          const contentType = response.headers()["content-type"];
          expect(contentType).toContain("application/pdf");
        }
      }
    }
  });
});
