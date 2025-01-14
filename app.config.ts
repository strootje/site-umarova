import { defineConfig } from "@solidjs/start/config";
import { default as unocss } from "unocss/vite";
import type { Plugin } from "vinxi";

export default defineConfig({
  ssr: false,

  server: {
    preset: "github-pages",
    baseURL: "/site-umarova/",
  },

  vite: {
    plugins: [unocss() as Plugin[]],
  },
});
