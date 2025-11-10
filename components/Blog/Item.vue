<template>
  <a class="card blog" :href="url" target="_blank" rel="noopener noreferrer">
    <div class="image-container">
      <img :src="cover_image" alt="" />
    </div>
    <div class="blog-content">
      <h3 class="text-highlight">
        {{ title }}
      </h3>
      <p>
        {{ description }}
      </p>
      <div class="footer">
        <div class="info">
          <div>
            {{ formatDate(published_at) }}
          </div>
          <div>
            <IconLove :size="16" />
            {{ positive_reactions_count }}
          </div>
          <div>
            <IconComment :size="16" />
            {{ comments_count }}
          </div>
        </div>
        <div class="link">
          <IconLinkTo :size="16" />
          dev.to
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Blog } from './types';

const props = defineProps<{
  data: Blog
}>()

const {
  title,
  description,
  url,
  cover_image,
  published_at,
  tags,
  comments_count,
  positive_reactions_count
} = props.data

</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  flex-direction: row;
  gap: 1em;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  text-decoration: none;
  color: $white;
  min-height: 7rem;

  &:hover {
    .image-container {
      border-color: $primary-1;
    }

    .footer {
      color: $primary-1;
    }
  }

  @include device('mobile') {
    flex-direction: column;
    gap: 0.5em;
    padding: 0.5rem;
  }
}

.image-container {
  flex: 1;
  overflow: hidden;
  border-radius: 0.5rem;
  width: 50%;
  max-width: 18ch;
  border: solid 2px $primary-2;
  transition: all 0.2s ease-in-out;

  >img {
    object-fit: cover;
    height: 100%;
  }

  @include device('mobile') {
    width: 100%;
    max-width: 100%;
  }
}

.blog-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.footer {
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: $primary-2;
  transition: all 0.2s ease-in-out;


  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25em;
    text-decoration: underline;
  }
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;

  * {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25em;
  }
}
</style>
