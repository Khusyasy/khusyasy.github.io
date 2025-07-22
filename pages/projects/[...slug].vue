<template>
  <div class="cover-container">
    <NuxtImg v-if="page?.meta?.cover_image" :src="page.meta.cover_image" class="cover-image" width="100%" height="auto"
      :alt="page.title" />
  </div>
  <span class="text-highlight">
    {{ page?.meta?.date ? formatDate(page.meta.date) : '' }}
  </span>
  <div class="content-wrapper">
    <ContentRenderer v-if="page" :value="page" class="content-renderer" />
    <div v-else class="not-found">
      <h2>
        Page not found
        {{ route.path }}
      </h2>
      <a class="text-highlight" href="/">Go back to home</a>
    </div>
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

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @include device('mobile') {
    gap: 2rem;
  }
}

.cover-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 1rem 0;
  max-width: 80ch;
  object-fit: contain;
  overflow: hidden;
  border: 2px solid $primary-2;
  border-radius: 4px;
}

.cover-image {
  width: 100%;
  height: auto;
  max-width: unset !important;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 16rem);
}
</style>

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

.content-renderer blockquote {
  background-color: $black;
  border-left: 0.2rem solid $primary-1;
  border-radius: 0.2rem;
  padding: 0.25rem 0.5rem;
}

.content-renderer code {
  background-color: $black;
  padding: 0.15rem 0.25rem;
  border-radius: 0.25rem;
  font-variation-settings:
    "MONO" 1,
    "CASL" 0,
    "slnt" 0,
    "CRSV" 0;
}
</style>
