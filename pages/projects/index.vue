<template>
  <div class="content-wrapper">
    <div class="section" id="web-dev">
      <h2 class="section-title">Website Development</h2>
      <div class="section-content">
        <ProjectList :projects="projectsWebDev" />
      </div>
    </div>
    <div class="section" id="data-ai-llms">
      <h2 class="section-title">Data, AI, and LLMs</h2>
      <div class="section-content">
        <ProjectList :projects="projectsDataAI" />
      </div>
    </div>
    <div class="section" id="mobile-dev">
      <h2 class="section-title">Mobile Development</h2>
      <div class="section-content">
        <ProjectList :projects="projectsMobileDev" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/components/Project/types';

useSeoMeta({
  title: 'Khusyasy\'s Projects',
  description: 'Explore projects and portfolio showcasing my work and contributions.',
})

const { data } = await useProjects()

const projects = computed(() => {
  if (!data.value) return [];
  return data.value.map((item) => {
    const project: Project = {
      title: item.title,
      description: item.description,
      url: item.path,
      cover_image: item.meta.cover_image || '',
      date: item.meta.date ? new Date(item.meta.date) : new Date(),
      category: item.meta.category,
    };
    return project;
  })
})

const projectsWebDev = computed(() => projects.value.filter(p => p.category === 'web-dev'));
const projectsDataAI = computed(() => projects.value.filter(p => p.category === 'data-ai-llms'));
const projectsMobileDev = computed(() => projects.value.filter(p => p.category === 'mobile-dev'));
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @include device('mobile') {
    gap: 4rem;
  }
}
</style>
