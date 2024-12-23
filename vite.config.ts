import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
    svgr(), // SVG React component plugin
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setupTests.ts",
    // You can add other vitest-related settings here
  },
});
