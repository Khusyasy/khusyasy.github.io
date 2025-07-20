<template>
  <nav class="nav">
    <NavItem v-for="target in targetsMain" :target="target.target" :text="target.text" :active="target.active" />
  </nav>
</template>

<script setup lang="ts">
import type { NavItemProps } from './types'

const targetsMain = ref<NavItemProps[]>([
  {
    target: "#about",
    text: "About",
    active: false,
  },
  {
    target: "#project",
    text: "Project",
    active: false,
  },
  // {
  //   target: "#experience",
  //   text: "Experience",
  //   active: false,
  // },
  {
    target: "#blog",
    text: "Blog",
    active: false,
  },
])

onMounted(() => {
  const targetEls = targetsMain.value.map((target) => {
    return document.querySelector(target.target)
  })
  let nearestDiff = Infinity
  let nearestIndex = 0
  setInterval(() => {
    for (let i = 0; i < targetEls.length; i++) {
      const targetEl = targetEls[i]
      if (targetEl) {
        const bound = targetEl.getBoundingClientRect()
        if (bound.top < window.innerHeight / 2 && bound.bottom > window.innerHeight / 2) {
          nearestIndex = i
          break
        } else {
          const diff = Math.min(Math.abs(bound.top - window.innerHeight / 2), Math.abs(bound.bottom - window.innerHeight / 2))
          if (diff < nearestDiff) {
            nearestDiff = diff
            nearestIndex = i
          }
        }
      }
    }
    targetsMain.value.forEach((target, index) => {
      target.active = index === nearestIndex
    })
  }, 10)
})

const route = useRoute()

onMounted(() => {
  if (route.hash === "") {
    scrollToTop()
  } else {
    for (let i = 0; i < targetsMain.value.length; i++) {
      const target = targetsMain.value[i]
      if (target.target === route.hash) {
        scrollToQuery(target.target)
        break
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @include device('mobile') {
    display: none;
  }
}
</style>
