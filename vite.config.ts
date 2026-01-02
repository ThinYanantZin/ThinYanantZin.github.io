import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// For GitHub Pages, replace 'your-repo-name' with your actual repository name
export default defineConfig(({ mode }) => ({
  // Set base path for GitHub Pages - change 'your-repo-name' to your repo name
  base: mode === "production" ? "/ThinYanantZin.github.io/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
