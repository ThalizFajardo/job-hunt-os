import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5003,
    origin: "http://localhost:5003",
  },
  base: "http://localhost:5003",
  plugins: [
    react(),
    federation({
      name: "companies",
      filename: "companiesRemote.js",
      exposes: { "./CompaniesApp": "./src/CompaniesApp.tsx" },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "chrome86",
  },
});
