<template>
  <div class="project">
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any
}>()
</script>

<style lang="scss" scoped>
</style>
