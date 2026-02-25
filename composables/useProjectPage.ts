export const useProjectPage = (path: string) => useAsyncData(
  `content-page-${path}`,
  async () => await queryCollection('content').path(path).first() || null
)
