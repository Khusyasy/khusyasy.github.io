<template>
  <a class="navitem" :href="to">
    {{ text }}
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  to: String,
  text: String,
})
</script>

<style lang="scss" scoped>
.navitem {
  font-size: 2em;
  line-height: 1;
}

.navitem::after {
  content: "";
  color: $primary-1;
  width: 100%;
  height: 8px;
}
</style>
