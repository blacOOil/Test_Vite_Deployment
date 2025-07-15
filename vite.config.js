import { defineConfig } from 'vite'
import vitePluginString from 'vite-plugin-string'



// https://vite.dev/config/
export default defineConfig({
  plugins: [vitePluginString()],
  base: '/Test_Vite_Deployment/',
})
