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
    chunkSizeWarningLimit: 1100,
    sourcemap: false,
    target: "es2020",
  },

  // If you are deploying to https://<USERNAME>.github.io/, or to a custom domain through GitHub Pages (eg. www.example.com), set base to '/'.
  // Alternatively, you can remove base from the configuration, as it defaults to '/'.
  base: "/oopsallbugs.github.io/",
});
