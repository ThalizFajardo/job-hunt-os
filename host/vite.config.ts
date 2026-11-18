import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";

 export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      port: 5000,
    },

    plugins: [
      react(),

      federation({
        name: "host",

        remotes: {
          applications: {
            type: "module",
            name: "applications",
            entry: env.VITE_APPLICATIONS_URL,
          },

          interviews: {
            type: "module",
            name: "interviews",
            entry: env.VITE_INTERVIEWS_URL,
          },

          companies: {
            type: "module",
            name: "companies",
            entry: env.VITE_COMPANIES_URL,
          },
        },

        shared: ["react", "react-dom", "react-router-dom"],

        dts: {
          consumeTypes: false,
        },
      }),

      tailwindcss(),
    ],
  };
});