import { test as base } from "@playwright/test";

export const test = base.extend({
  userAgent: "PlaywrightBotAgent/1.0",
});

export { expect } from "@playwright/test";
