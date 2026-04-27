<template>
  <div class="social-list">
    <div class="icons">
      <SidebarSocialItem icon="linkedin" />
      <SidebarSocialItem icon="github" />
      <SidebarSocialItem icon="leetcode" />
      <!-- <SidebarSocialItem icon="kaggle"></SidebarSocialItem> -->
      <SidebarSocialItem icon="devto" />
    </div>
    <a
      class="link"
      href="mailto:luthfik.job@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconEmail :size="16" /> luthfik.job@gmail.com
    </a>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@use "@/assets/css/_colors.scss" as *;
@use "@/assets/css/_mixins.scss" as *;

.social-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @include device('mobile') {
    align-items: center;
  }
}

.icons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
}

.link {
  background-color: transparent;
  text-decoration: none;
  color: $white;
  font-size: 1rem;
  padding: 0.1rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: min-content;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  &:hover {
    background-color: $white;
    color: $black;
  }
}
</style>
