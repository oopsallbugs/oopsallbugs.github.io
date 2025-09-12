import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // React and React DOM in separate chunk
          "react-vendor": ["react", "react-dom"],

          // React Router in separate chunk
          router: ["react-router-dom"],

          // Three.js and related libraries in separate chunk
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
    chunkSizeWarningLimit: 1024,
    sourcemap: false,
    target: "es2025",
  },

  // TODO: Set the correct base for GitHub Pages
  // For project pages: e.g., 'https://<username>.github.io/<repo-name>/'
  // base: "/my-repo-name/",
});
