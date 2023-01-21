import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { reactRouterPlugin } from "vite-plugin-next-react-router";

export default defineConfig({
  plugins: [react(), reactRouterPlugin()],
});
