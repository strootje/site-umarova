import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      min: "#144273",
      purple1: "#452270",
      purple2: "#F7F5FE",
    },
  },

  presets: [
    presetUno(),
    presetWebFonts({
      provider: "none",

      fonts: {
        rijksoverheid: "arial",
      },

      processors: createLocalFontProcessor({
        fontAssetsDir: "public/assets/fonts",
        fontServeBaseUrl: "/assets/fonts",
      }),
    }),
  ],
});
