import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Para dominio personalizado usa '/'
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "SOURCEMAP_ERROR" ||
          warning.message.includes("dynamic import") ||
          warning.message.includes("cannot be analyzed") ||
          warning.plugin === "vite:import-analysis"
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
  esbuild: {
    logOverride: {
      "this-is-undefined-in-esm": "silent",
      "unsupported-jsx-comment": "silent",
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
