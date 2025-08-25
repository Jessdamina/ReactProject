import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change the default port from 5173 to 3000
    open: true, // Automatically open the browser on server start
    proxy: { // Set up a proxy for API requests
      '/api': {
        target: 'http://localhost:5000', // Backend server URL
        changeOrigin: true,
        secure: false, // Set to true if your backend uses HTTPS
      },
    },
    https: false, // Enable HTTPS (requires a valid certificate or a plugin like @vitejs/plugin-basic-ssl)
    cors: { // Configure CORS for the development server
      origin: 'http://my-backend.example.com', // Allow requests from this origin
    },
  },
});