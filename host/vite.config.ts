import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5000,
    origin: "http://localhost:5000",
  },
  base: "http://localhost:5000",
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        applications: {
          type: "module",
          name: "applications",
          entry: "http://localhost:5001/applicationsRemote.js",
        },
        interviews: {
          type: "module",
          name: "interviews",
          entry: "http://localhost:5002/interviewsRemote.js",
        },
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
});
