<template>
  <a ref="item" class="navitem" :class="{
    active: active,
    'text-highlight': active,
    'level-1': level === 1,
    'level-2': level === 2,
    'level-3': level === 3,
    'level-4': level === 4,
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
    history.replaceState(null, '', target)
    scrollToQuery(target)
  } else {
    router.push(target)
  }
}
</script>

<style lang="scss" scoped>
.navitem {
  width: fit-content;
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
    width: 1.5em;
    height: 2px;
    border-radius: 2px;
    position: relative;
    transition: width 0.2s ease-in-out;
    margin-top: 2px;
  }

  &:hover {
    padding: 0 0.1em;
    opacity: 1;

    &::after {
      width: max(4em, 50%);
      opacity: 1;
    }
  }

  &.active {
    color: $primary-1;
    opacity: 1;
    padding: 0 0.2em;

    &::after {
      width: 100% !important;
      background-color: $primary-2;
    }
  }

  &.level-1 {
    font-size: 2em;
    margin-left: 0;
  }

  &.level-2 {
    font-size: 1.5em;
    margin-left: 0;
  }

  &.level-3 {
    font-size: 1.25em;
    margin-left: 0.5em;
  }

  &.level-4 {
    font-size: 1em;
    margin-left: 1em;
  }

}
</style>
