import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $assets: "/src/assets",
      $components: "/src/components",
      $pages: "/src/pages",
      $router: "/src/router",
      $styles: "/src/styles",
      $layouts: "/src/layouts",
    },
  },
});
