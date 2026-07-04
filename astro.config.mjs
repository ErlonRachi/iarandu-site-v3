// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://iarandu.tech",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "it"],
    routing: {
      prefixDefaultLocale: false, // pt at "/", en at "/en/", it at "/it/"
    },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
