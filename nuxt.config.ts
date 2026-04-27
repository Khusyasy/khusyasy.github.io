import fs from 'fs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/eslint'],
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  css: ['@/assets/css/_reset.scss', '@/assets/css/main.scss'],
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
  experimental: {
    payloadExtraction: false,
  }, compatibilityDate: '2025-07-19',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *; @use "@/assets/css/_mixins.scss" as *;',
        },
      },
    },
  },
  hooks: {
    'prerender:routes'(ctx) {
      const projects = fs.readdirSync('./content')
      for (const project of projects) {
        const pageName = project.replace('.md', '')
        ctx.routes.add(`/projects/${pageName}`)
      }
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  image: {
    domains: ['media.dev.to', 'dev-to-uploads.s3.amazonaws.com'],
  },
})
