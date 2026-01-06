import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // Use IPv4-friendly binding for testing on iOS Safari / devices on LAN.
    host: true,
    port: 8080,
  },
  plugins: [
    react(),
    // Improves compatibility for older Safari versions (and other legacy browsers).
    legacy({
      targets: ["defaults", "safari >= 12"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
