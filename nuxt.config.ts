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
          name: 'description', content: 'I am a tech enthusiast with a strong passion for website development. Specializing in Frontend Development, JavaScript, Vue.js, and React.js.',
        }
      ],
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/css/_reset.scss', '@/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *; @use "@/assets/css/_mixins.scss" as *;',
        },
      },
    },
  },
});
