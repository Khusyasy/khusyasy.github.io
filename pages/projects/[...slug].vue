<template>
  <!-- TODO: show breadcrumbs / navigation, jangan di sidebar ig -->
  <!-- TODO: show cover image -->
  <ContentRenderer v-if="page" :value="page" class="content-renderer" />
  <div v-else class="not-found">
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
// const pathName = computed(() => {
//   return route.path === '/projects' ? '/' : route.path.replace('/projects', '')
// })

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<style lang="scss">
.content-renderer {
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 0.75rem;
  min-height: calc(100vh - 16rem);
  max-width: 80ch;
}

.content-renderer ul,
.content-renderer ol {
  margin: 0.5rem 0;
}

.content-renderer p:has(img) {
  display: flex;
  justify-content: center;
}

.content-renderer img {
  width: auto;
  height: 100%;
  max-height: 75vh;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 16rem);
}
</style>
