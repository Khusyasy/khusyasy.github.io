<template>
  <nav class="nav">
    <NavItem v-for="target in targets" :target="target.target" :text="target.text" :active="target.active" />
  </nav>
</template>

<script setup lang="ts">
import type { NavItemProps } from './types'

const router = useRouter()

const targetsMain = ref<NavItemProps[]>([
  {
    target: "#about",
    text: "About Me",
    active: false,
  },
  {
    target: "#projects",
    text: "Projects",
    active: false,
  },
  // {
  //   target: "#experience",
  //   text: "Experience",
  //   active: false,
  // },
  {
    target: "#blogs",
    text: "Blogs",
    active: false,
  },
])

const targetsProjects = ref<NavItemProps[]>([
  {
    target: "#web-dev",
    text: "Web Dev",
    active: false,
  },
  {
    target: "#data-ai-llms",
    text: "Data, AI, and LLMs",
    active: false,
  },
  {
    target: "#mobile-dev",
    text: "Mobile Dev",
    active: false,
  },
  {
    target: "/",
    text: "Back",
    active: false,
  },
])

const targetsDetails = ref<NavItemProps[]>([
  {
    target: "/projects",
    text: "Back",
    active: false,
  },
])

const targets = computed(() => {
  if (router.currentRoute.value.path.startsWith('/projects')) {
    if (router.currentRoute.value.path === '/projects') {
      return targetsProjects.value
    }
    return targetsDetails.value
  }
  return targetsMain.value
})

onMounted(() => {
  const targetEls = targets.value.map((target) => {
    if (!target.target.startsWith('#')) return null
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

onMounted(() => {
  if (route.hash === "") {
    scrollToTop()
  } else {
    for (let i = 0; i < targets.value.length; i++) {
      const target = targets.value[i]
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
