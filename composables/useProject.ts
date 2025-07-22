export const useProject = async (path: string) => await useAsyncData(path, async () => {
  const data = await queryCollection('content').path(path).first()
  if (!data) {
    return {} as any
  }
  return data
})
