<template>
  <template v-if="pending || projects.length == 0">
    <ProjectItemSkeleton v-for=" i  in  [0, 1, 2] " :key="i" />
  </template>
  <template v-else>
    <ProjectItem v-for="( project, i ) in  projects " :key="i" :data="project" />
  </template>
</template>

<script setup lang="ts">
import type { APIArticle, Project } from './types';

const { pending, data: res } = useLazyAsyncData('projects', async () => $fetch('https://dev.to/api/articles?username=khusyasy') as any, { server: false })

const projects = computed(() => {
  if (pending.value) return ([] as Project[])
  return (res.value as APIArticle[]).slice(0, 3).map((data: APIArticle) => {
    return {
      title: data.title,
      description: data.description,
      url: data.url,
      cover_image: data.cover_image,
      readable_publish_date: data.readable_publish_date,
      tags: data.tag_list,
      comments_count: data.comments_count,
      positive_reactions_count: data.positive_reactions_count,
    } as Project
  })
})
</script>

<style lang="scss" scoped>
</style>
