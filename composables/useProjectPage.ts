export const useProjectPage = (path: Ref<string>) =>
  useAsyncData(
    () => `content-page-${path.value}`,
    async () =>
      (await queryCollection('content').path(path.value).first()) ||
      ({} as any),
    { watch: [path] }
  )
