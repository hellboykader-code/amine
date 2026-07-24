import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" pour un déploiement statique (Netlify, GitHub Pages, Vercel…)
export default defineConfig({
  base: "./",
  plugins: [react()],
});
