import { defineConfig } from 'vite' // Missing semicolon will generate a warning
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app',
  server: {
    https: false,
    port: 5100,
    strictPort: true,
    proxy: {
      // Missing closing bracket will generate a syntax error
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
    } 
  },
  plugins: [react()],
})


//import { defineConfig } from 'vite'; // Added missing semicolon
//import react from '@vitejs/plugin-react';
//// https://vitejs.dev/config/
//export default defineConfig({
//  base: '/app',
//  server: {
//    https: false,
//    port: 5100,
//    strictPort: true,
//    proxy: {
//      '/api': {
//        target: 'http://localhost:3000',
//        changeOrigin: true
//      } // Added closing bracket
//    }
//  },
//  plugins: [react()],
//});
