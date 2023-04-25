import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/new-repo/",
  build: {
    resolve: {
      alias: {
        $imgs: resolve("./public/"),
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
