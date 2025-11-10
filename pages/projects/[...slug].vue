<template>
  <div class="cover-container" v-if="page?.meta?.cover_image">
    <NuxtImg :src="page.meta.cover_image" class="cover-image" width="100%" height="auto" :alt="page.title" />
  </div>
  <span class="text-highlight" v-if="page?.title">
    {{ page?.meta?.date ? formatDate(page.meta.date) : '' }}
  </span>
  <div class="content-wrapper">
    <ContentRenderer v-if="page?.title" :value="page" class="content-renderer" />
    <div v-else class="not-found">
      <h2>
        Project not found {{ route.path }}
      </h2>
      <NuxtLink class="text-highlight" to="/">Go back to home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const path = computed(() => route.path)
const { data: page } = useAsyncData(
  () => path.value,
  async () => await queryCollection('content').path(path.value).first()
)

useSeoMeta({
  title: page?.value?.title || 'Project Not Found',
  // description: page?.value?.meta?.description || 'Details about the project are not available.',
  ogImage: page?.value?.meta?.cover_image || null,
})
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @include device('mobile') {
    gap: 3rem;
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
