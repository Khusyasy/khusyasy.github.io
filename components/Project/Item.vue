<template>
  <a class="project" :href="url" target="_blank" rel="noopener noreferrer">
    <div class="image-container">
      <img :src="cover_image" alt="" />
    </div>
    <div class="project-content">
      <h3 class="text-highlight">
        {{ title }}
      </h3>
      <p>
        {{ description }}
      </p>
      <div class="footer">
        <div class="info">
          <div>
            {{ readable_publish_date }}
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
import type { Project } from './types';

const props = defineProps<{
  data: Project
}>()

const {
  title,
  description,
  url,
  cover_image,
  readable_publish_date,
  tags,
  comments_count,
  positive_reactions_count
} = props.data

</script>

<style lang="scss" scoped>
.project {
  background-color: transparent;
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
    background-color: rgba($black, 0.85);
    box-shadow: 0 0 0.25rem 0.25rem rgba($primary-1, 0.15);

    .image-container {
      border-color: $primary-1;
    }

    .footer {
      color: $primary-1;
    }
  }
}

.image-container {
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
}

.project-content {
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
