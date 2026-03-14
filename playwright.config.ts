import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "tests",
    timeout: 30_000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    reporter: "list",
    use: {
        baseURL: "http://localhost:3000",
    },
    webServer: {
        command: "npm run build && node ./dist/index.js",
        port: 3000,
        reuseExistingServer: !process.env.CI,
    },
});
