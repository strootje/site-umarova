import { defineConfig } from "@solidjs/start/config";
import {default as unocss} from "unocss/vite";

export default defineConfig({
  ssr: true,
  
  server: {
    preset: 'github-pages'
  },

  vite: {
    plugins: [unocss()]
  }
});
