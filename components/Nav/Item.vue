<template>
  <a ref="item" class="navitem" :class="{
    active: active,
    'text-highlight': active,
  }" :href="target" @click.prevent="handleClick(target)">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
import type { NavItemProps } from './types'

defineProps<NavItemProps>()

const router = useRouter()

function handleClick(target: string) {
  if (target.startsWith('#')) {
    scrollToQuery(target)
    router.replace(target)
  } else {
    router.push(target)
  }
}
</script>

<style lang="scss" scoped>
.navitem {
  width: fit-content;
  font-size: 2em;
  line-height: 1;
  color: $white;
  text-decoration: none;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
  padding: 0;

  &::after {
    content: "";
    background-color: $white;
    display: block;
    width: 2rem;
    height: 4px;
    border-radius: 4px;
    position: relative;
    transition: width 0.2s ease-in-out;
  }

  &:hover {
    padding: 0 0.1rem;
    opacity: 1;

    &::after {
      width: max(4rem, 50%);
      opacity: 1;
    }
  }


  &.active {
    color: $primary-1;
    opacity: 1;
    padding: 0 0.25rem;

    &::after {
      width: 100% !important;
      background-color: $primary-2;
    }
  }
}
</style>
