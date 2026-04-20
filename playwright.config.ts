import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  use: {
    baseURL: process.env.TEST_BASE_URL ?? "http://localhost:3000",
  },
  // No browser projects — all tests are API-level (request fixture only)
  projects: [
    { name: "api", use: {} },
  ],
});
