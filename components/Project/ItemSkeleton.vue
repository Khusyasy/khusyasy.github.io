<template>
  <div class="skeleton"></div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.skeleton {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  gap: 1em;
  font-size: 1rem;
  margin: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  text-decoration: none;
  opacity: 0.5;
  min-height: 7rem;
  animation: skeleton 1s alternate infinite;
}

@keyframes skeleton {
  0% {
    background-color: rgba($primary-2, 0.25);
  }

  100% {
    background-color: rgba($primary-1, 0.25);
  }
}
</style>
