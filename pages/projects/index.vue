<template>
  <div>
    <h2>
      Projects and lists
    </h2>
    <ProjectList :projects="projects" />
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/components/Project/types';

const { data } = await useAsyncData('projects', () => {
  return queryCollection('content').all()
})

const projects = computed(() => {
  if (!data.value) return [];
  return data.value.map((item) => {
    const project: Project = {
      title: item.title,
      description: item.description,
      url: item.path,
      cover_image: item.meta['cover_image'] as string || '/images/default-cover.png',
    };
    return project;
  })
})
</script>

<style lang="scss" scoped></style>
