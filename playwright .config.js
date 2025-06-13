// playwright.config.js

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 60000, 
  retries: process.env.CI ? 1 : 0, 
  testDir: './tests', 
  // workers: process.env.CI ? 1 : undefined, 
  workers : 8,
  reporter: [
       ['html', { open: 'never' }], // HTML report
    ['allure-playwright'], // Allure report
  ],
  use: {
    baseURL: 'https://your-app-url.com',
    headless: true,
    // screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'WebKit',
    //   use: { browserName: 'webkit' },
    // },
  ],
  fullyParallel: false,
  forbidOnly: !!process.env.CI, // Prevent accidental .only in CI
});