import { defineContentConfig, defineCollection } from '@nuxt/content'
import z from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      // https://content.nuxt.com/docs/collections/types#schema-overrides
      schema: z.object({
        meta: z.object({
          date: z.date(),
          category: z.enum(['web-dev', 'data-ai-llms', 'mobile-dev']),
          cover_image: z.string(),
          tags: z.array(z.string()),
        })
      })
    })
  }
})
