<template>
  <div>
    <h2>
      Projects and lists
    </h2>
    <ol>
      <li v-for="item in data" :key="item.id">
        <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('projects', () => {
  return queryCollection('content').all()
})
</script>

<style lang="scss" scoped></style>
