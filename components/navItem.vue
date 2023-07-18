<template>
  <a ref="item" :class="{
    navitem: true,
    active: active,
    'text-highlight': active,
  }" :href="target" @click.prevent="() => scrollToId(target)">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  target: string,
  text: string,
  active: boolean,
}>()

function scrollToId(id: string) {
  const scrollEL = document.getElementById("content-scroll");
  const element = document.querySelector(id);
  const headerOffset = rem(8);
  if (scrollEL && element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;
    scrollEL.scrollTo({
      top: (offsetPosition),
      behavior: "smooth",
    });
  }
}
</script>

<style lang="scss" scoped>
.navitem {
  width: min-content;
  font-size: 2em;
  line-height: 1;
  color: $white;
  text-decoration: none;
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
  padding: 0;
}

.navitem:hover {
  padding: 0 0.1rem;
}

.navitem.active {
  color: $primary-1;
  opacity: 1;
  padding: 0 0.25rem;
}

.navitem::after {
  content: "";
  background-color: $white;
  display: block;
  width: 2rem;
  height: 6px;
  border-radius: 6px;
  position: relative;
  transition: width 0.2s ease-in-out;
}

.navitem:hover::after {
  width: max(4rem, 50%);
  opacity: 0.75;
}

.navitem.active::after {
  width: 100% !important;
  background-color: $primary-2;
}
</style>
