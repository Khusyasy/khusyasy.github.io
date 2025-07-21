<template>
  <div class="breadcrumbs" v-if="segments.length > 1">
    <template v-for="segment in segments" :key="segment.to" class="breadcrumb">
      <a :href="segment.to">
        {{ segment.text }}
      </a><span v-if="segment !== segments[segments.length - 1]">/</span>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const segments = computed(() => {
  const splits = route.path.split('/').filter(Boolean)
  const res = splits.map((segment, index) => ({
    text: segment,
    to: '/' + splits.slice(0, index + 1).join('/')
  }))
  res.unshift({
    text: 'home',
    to: '/'
  })
  return res
})
</script>

<style lang="scss">
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.breadcrumb>* {
  color: $primary-1 !important;
}
</style>
