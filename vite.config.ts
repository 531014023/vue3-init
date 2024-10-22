import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    pages({
      dirs: 'src/views', // 需要生成路由的文件目录，默认就是识别src下面的pages文件
      exclude: ['**/components/*.vue'], // 排除在外的目录，上面配置目录的例子，里面有 components 目录，我们不希望他被解析为路由
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
