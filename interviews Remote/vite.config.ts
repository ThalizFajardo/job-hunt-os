import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5002,
    origin: "http://localhost:5002",
  },
  base: "http://localhost:5002",
  plugins: [
    react(),
    federation({
      name: "interviews",
      filename: "interviewsRemote.js",
      exposes: { "./InterviewsApp": "./src/InterviewsApp.tsx" },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
 build: {
    target: "chrome89",
  },
});
