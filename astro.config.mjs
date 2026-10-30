import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://portfolio-v2-rust-kappa.vercel.app/",
  integrations: [sitemap()],
  // One small page: inlining the CSS saves a render-blocking request.
  build: { inlineStylesheets: "always" },
  vite: {
    plugins: [tailwindcss()],
  },
});
