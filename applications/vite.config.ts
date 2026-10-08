import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    port : 5001, 
    origin : 'http://localhost:5001'    
  },
  base : 'http://localhost:5001',  
  plugins: [
    react(), 
  federation({
    name : 'applications', 
    filename : 'applicationsRemote.js', 
    exposes : { './ApplicationsApp': './src/ApplicationsApp.tsx' },
    shared : ["react", "react-dom",  "react-router-dom"]
  })
  ],
  build: {
    target: "chrome89",
  },
})
