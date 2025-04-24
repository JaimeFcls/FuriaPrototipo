import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    root: '.', // força usar a raiz como ponto de partida
    publicDir: 'public',
})
