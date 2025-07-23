<template>
  <div class="breadcrumbs" v-if="segments.length > 1">
    <a v-if="!isMainPage" :href="hrefBack">
      &lt; back
    </a>
    <span style="margin: 0 0.5rem;">|</span>
    <template v-for="segment in segments" :key="segment.to" class="breadcrumb">
      <a :href="segment.to">
        {{ segment.text }}
      </a>
      <span v-if="segment !== segments[segments.length - 1]">/</span>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const hrefBack = computed(() => {
  const segments = route.path.split('/')
  segments.pop()
  return segments.join('/') || '/'
})

const isMainPage = computed(() => {
  return route.path === '/' || !route.path.startsWith('/projects')
})

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
  justify-items: start;
  align-items: center;

  &>a {
    padding: 0.5rem;
  }

  &>span {
    color: $primary-1 !important;
  }

  &>:last-child {
    color: rgba($primary-2, 0.8) !important;
    text-decoration: none;
  }
}
</style>
