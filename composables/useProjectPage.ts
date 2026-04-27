import type { ContentCollectionItem } from '@nuxt/content'

export const useProjectPage = (path: Ref<string>) =>
  useAsyncData(
    () => `content-page-${path.value}`,
    async () => (await queryCollection('content').path(path.value).first()) ?? {} as ContentCollectionItem, // useAsyncData cannot return undefined or null, fallback to {}
    { watch: [path] },
  )
