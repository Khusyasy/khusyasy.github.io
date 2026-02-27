<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :title="title"
    :width="width"
    :height="height"
    loading="lazy"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    title?: string
    width?: string | number
    height?: string | number
  }>(),
  {
    width: 800,
    height: 450,
  }
)
</script>
