<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else class="w-full h-screen flex items-center justify-center">
    <h2>
      Page not found
      {{ route.path }}
    </h2>
    <a class="text-highlight" href="/">Go back to home</a>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// /projects/<slugs>
const pathName = computed(() => {
  return route.path === '/projects' ? '/' : route.path.replace('/projects', '')
})

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>
