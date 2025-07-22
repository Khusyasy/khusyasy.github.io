export const useProjects = () => useAsyncData('projects', () => queryCollection('content').all())
