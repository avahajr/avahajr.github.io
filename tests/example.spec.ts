import { test, expect } from '@playwright/test';

test('resume link leads to valid PDF', async ({ page }) => {
  // Navigate to your website
  await page.goto('/');

  const resumeLink = await page.getByRole('link', { name: /resume/i });

  // Ensure the resume link exists
  expect(resumeLink).toBeVisible()

  // Create a listener for the response
  const [response] = await Promise.all([
    page.waitForResponse(response =>
      response.url().includes('resume') &&
      response.status() === 200
    ),
    resumeLink.click()
  ]);

  // Check if the response headers indicate PDF content
  const contentType = response.headers()['content-type'];
  expect(contentType).toMatch(/application\/pdf/i);

  // Verify the response body is not empty
  const buffer = await response.body();
  expect(buffer.length).toBeGreaterThan(0);
});