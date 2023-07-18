<template>
  <nav class="nav">
    <NavItem v-for="target in targets" :target="target.target" :text="target.text" :active="target.active" />
  </nav>
</template>

<script setup lang="ts">
const targets = ref<Array<{
  target: string,
  text: string,
  active: boolean,
}>>([
  {
    target: "#section-about",
    text: "About",
    active: false,
  },
  {
    target: "#section-experience",
    text: "Experience",
    active: false,
  },
])

onMounted(() => {
  const targetEls = targets.value.map((target) => {
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
    targets.value.forEach((target, index) => {
      target.active = index === nearestIndex
    })
  }, 10)
})

const route = useRoute()
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

watchEffect(() => {
  if (!mounted.value) return
  targets.value.forEach((target) => {
    if (target.target === route.hash) {
      scrollToQuery(target.target)
    } else if (route.hash === "") {
      scrollToTop()
    }
  })
})
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
