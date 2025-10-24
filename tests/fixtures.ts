import { test as base } from '@playwright/test';

export const test = base.extend({
  context: async ({ context }, use) => {
    await context.route('**/*', request => {
      const url = request.request().url()
      if (
        // Google Analytics
        url.startsWith('https://www.googletagmanager.com') ||
        // Microsoft Clarity
        url.startsWith('https://www.clarity.ms') ||
        // Google Adsense
        url.startsWith('https://pagead2.googlesyndication.com')
      ) {
        request.abort()
      } else {
        request.continue()
      }
    })

    await use(context);
  },
});

export { expect } from '@playwright/test';