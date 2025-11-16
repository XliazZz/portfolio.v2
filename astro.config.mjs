import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
        theme: {
          extend: {
            fontWeight: {
              light: 300,
              normal: 400,
              semibold: 600,
              bold: 700,
              extrabold: 800,
            },
          },
        },
      }),
    ],
  },
});
