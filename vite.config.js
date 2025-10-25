import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  return {
    mode: command === 'build' ? 'production' : 'development', // Явное указание режима
    base: './', // базовый путь для ресурсов в продакшне
    plugins: [react(), tailwindcss()],
    server: {
  host: true,
  port: 5173
},

    build: {
      outDir: 'dist', // Папка для сборки
      sourcemap: false, // Отключить source maps для продакшена (можно включить для отладки)
      minify: 'esbuild', // Минификация с помощью esbuild по умолчанию
      rollupOptions: {
        // дополнительные опции для rollup при необходимости
        // input, output, external, plugins и др.
      },
      target: 'es2015', // Целевая версия JS
      cssCodeSplit: true, // Разделять CSS на чанки
      emptyOutDir: true, // Очищать папку сборки перед новым билдом
      
    },
  }
})
