import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  // These tests hit the live production domains directly (no local server).
  // Running them with many parallel workers, or duplicating every check
  // across two device projects, fires enough request volume to trip
  // Cloudflare's rate-limiting/bot protection (429s / "Access denied").
  // The mobile-specific behavior already gets its own dedicated describe
  // block with its own viewport, so a second full-suite "mobile" project
  // would only duplicate every other check for no added coverage.
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 2,
  reporter: process.env.CI ? 'github' : 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
