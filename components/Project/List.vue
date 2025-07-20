<template>
  <template v-if="projects.length == 0">
    <p>No projects found.</p>
  </template>
  <template v-else>
    <ProjectItem v-for="(project, i) in projects" :key="i" :data="project" />
  </template>
</template>

<script setup lang="ts">
import type { Project } from './types';

const { projects } = defineProps<{
  projects: Project[]
}>()
</script>

<style lang="scss" scoped></style>
