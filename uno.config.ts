import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      min: "#144273",
    },
  },

  presets: [
    presetUno(),
    presetWebFonts({
      provider: "none",

      fonts: {
        ro: "RO-SansWebText-Regular",
      },

      processors: createLocalFontProcessor({
        fontAssetsDir: "public/assets/fonts",
        fontServeBaseUrl: "/assets/fonts",
      }),
    }),
  ],
});
