<template>
  <div class="navitem">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: String,
})
</script>

<style lang="scss" scoped>
.navitem {
  font-size: 2em;
}

.navitem::after {
  content: "";
  color: $primary-1;
  width: 100%;
  height: 8px;
}
</style>
