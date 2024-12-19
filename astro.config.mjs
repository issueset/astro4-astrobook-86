import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // See https://unpic.pics/img/astro/#placeholders
  integrations: [ tailwind()],
  output: 'static', // This ensures the site is built as a static site
  build: {
    inlineStylesheets: 'never', // Do not use inline CSS
  },
  vite: {
    css: {
      //transformer: "lightningcss",
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/entry-[name].js',
          chunkFileNames: 'assets/chunk-[name].js',
          assetFileNames: 'assets/asset-[name].[ext]',
        },
      },
    },
  },
});
