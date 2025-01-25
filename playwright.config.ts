import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    port: 5174,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:5174',
  },
});
