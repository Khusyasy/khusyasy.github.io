// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Khusyasy',
      meta: [
        {
          name: 'description',
          content:
            'I love building things to solve real world problems, mainly focusing on website development and data science. I enjoy working with TypeScript, JavaScript, Vue.js, Nuxt, and Python for NLP. I am flexible and open to new opportunities to collaborate with others and create impactful digital solutions.',
        },
      ],
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
});
