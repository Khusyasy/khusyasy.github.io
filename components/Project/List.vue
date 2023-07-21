<template>
  <div v-if="pending">
    Loading...
  </div>
  <div v-else>
    <ProjectItem v-for="feed in feeds" :key="feed.title" :data="feed" />
  </div>
</template>

<script setup lang="ts">
import type { APIArticle } from './types';

const { pending, data: res } = useLazyAsyncData('feeds', async () => $fetch('https://dev.to/api/articles?username=khusyasy') as any, { server: false })

const feeds = computed(() => {
  return (res.value as APIArticle[]).slice(0, 3).map((data: APIArticle) => {
    return {
      title: data.title,
      description: data.description,
      url: data.url,
      cover_image: data.cover_image,
      published_at: data.published_at,
      tags: data.tag_list,
      comments_count: data.comments_count,
      positive_reactions_count: data.positive_reactions_count,
    }
  })
})
// const { data, pending, error, refresh } = await useFetch('https://dev.to/feed/khusyasy')
// console.log(data, pending, error, refresh)
  // .then((e) => e.text())
  // .then((e) => new window.DOMParser().parseFromString(e, 'text/xml'))
  // .then((e) => {
  //   const t = e.querySelectorAll('item');
  //   document
  //     .getElementById('projects-container')
  //     .insertAdjacentHTML(
  //       'beforeend',
  //       [...t].slice(0, 3).map(renderProjectCard).join('')
  //     );
  // });
</script>

<style lang="scss" scoped>
</style>
