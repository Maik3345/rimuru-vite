/// <reference types="vitest" />
/* errors by not import testing functions do not appear */
/// <reference types="Vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import * as packageJson from "./package.json";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "rimuru-vite",
      formats: ["es", "umd"],
      fileName: (format) => {
        const extension = format === "umd" ? "cjs" : "js";
        return `rimuru-vite.${format}.${extension}`;
      },
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies),
        "@emotion/react",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/react": "emotionReact",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true, // the testing functions do not have to be imported
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
