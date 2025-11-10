import fs from 'fs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-19',
  modules: ['@nuxt/content', '@nuxt/image'],
  ssr: true,
  hooks: {
    'prerender:routes'(ctx) {
      const projects = fs.readdirSync('./content')
      for (const project of projects) {
        const pageName = project.replace('.md', '')
        ctx.routes.add(`/projects/${pageName}`)
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/css/_reset.scss', '@/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/css/_colors.scss" as *; @use "@/assets/css/_mixins.scss" as *;',
        },
      },
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        toc: {
          depth: 4,
          searchDepth: 4,
        },
      },
    },
  },
});
