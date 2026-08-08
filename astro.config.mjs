import { defineConfig } from 'astro/config';

// 纯静态输出，零客户端 JS 框架，构建产物极小。
export default defineConfig({
  site: 'https://yingxuan.example.com',
  compressHTML: true,
});
