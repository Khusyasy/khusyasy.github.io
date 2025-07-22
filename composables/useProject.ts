export const useProject = (path: string) => useAsyncData(path, () => queryCollection('content').path(path).first())
