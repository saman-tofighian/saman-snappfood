import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/saman-snappfood/",
  plugins: [react()],
  resolve: {
    alias: {
      "react-router-dom": "react-router-dom",
      aos: "aos", // اضافه کردن alias برای aos
    },
  },
});
