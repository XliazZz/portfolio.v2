import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tu-dominio.com",
  vite: {
    plugins: [
      tailwindcss({
        content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
        theme: {
          extend: {
            fontFamily: {
              heading: ['Lexend', 'system-ui', 'sans-serif'],
              body: ['Nunito', 'system-ui', 'sans-serif'],
              sans: ['Lexend', 'system-ui', 'sans-serif'],
            },
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
