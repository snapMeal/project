import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "SnapMeal",
        short_name: "SnapMeal",
        theme_color: "#3A5CD6",
        background_color: "#FBFCFE",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable"
          },
        ],
      },
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: [
        "**/*",
      ],
    })
  ],
})
