export const useProjects = async () => await useAsyncData('projects', async () => {
  const data = await queryCollection('content').all()
  data.sort((a, b) => {
    // sort descending
    if (b.meta.date > a.meta.date) {
      return 1
    } else if (b.meta.date < a.meta.date) {
      return -1
    } else {
      return 0
    }
  })
  return data
})
