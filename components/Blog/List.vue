<template>
  <template v-if="pending || blogs.length == 0">
    <BlogItemSkeleton
      v-for="i in [0, 1, 2]"
      :key="i"
    />
  </template>
  <template v-else>
    <BlogItem
      v-for="(blog, i) in blogs"
      :key="i"
      :data="blog"
    />
  </template>
</template>

<script setup lang="ts">
import type { APIArticle, Blog } from './types'

const { pending, data: res } = useLazyAsyncData<APIArticle[]>('blogs', async () => $fetch('https://dev.to/api/articles?username=khusyasy'), { server: false })

const blogs = computed<Blog[]>(() => {
  if (pending.value || !res.value) return []
  return res.value.slice(0, 3).map((data) => {
    return {
      title: data.title,
      description: data.description,
      url: data.url,
      cover_image: data.cover_image,
      published_at: new Date(data.published_at),
      tags: data.tag_list,
      comments_count: data.comments_count,
      positive_reactions_count: data.positive_reactions_count,
    }
  })
})
</script>

<style lang="scss" scoped></style>
