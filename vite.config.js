import { defineConfig } from 'vite'
import glsl from 'vite-plugin-string'

// https://vite.dev/config/
export default defineConfig({
  plugins: [glsl()],
  base: '/Test_Vite_Deployment/',
})
