<template>
  <div v-if="pending">
    Loading...
  </div>
  <div v-else>
    <ProjectItem v-for="feed in feeds" :key="feed.title" :data="feed" />
  </div>
</template>

<script setup lang="ts">
export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: Date;
  crossposted_at: null;
  published_at: Date;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: User;
}

export interface User {
  name: string;
  username: string;
  twitter_username: string;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

const { pending, data: raw_feeds } = useLazyAsyncData('feeds', async () => $fetch('https://dev.to/api/articles?username=khusyasy'), { server: false })

const feeds = computed(() => {
  return (raw_feeds.value as Article[]).slice(0, 3).map((feed: Article) => {
    return {
      title: feed.title,
      description: feed.description,
      url: feed.url,
      cover_image: feed.cover_image,
      published_at: feed.published_at,
      tags: feed.tag_list,
      comments_count: feed.comments_count,
      positive_reactions_count: feed.positive_reactions_count,
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
