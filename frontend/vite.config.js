import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://aa-uchat-2-backend-vrrl.onrender.com",
        secure: false,
      },
    },
  },
})
