import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/module-f-1/", // Pakeisk pagal savo repo pavadinimą
});