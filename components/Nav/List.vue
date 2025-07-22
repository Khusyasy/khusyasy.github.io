<template>
  <a v-if="!isMainPage" :href="hrefBack" @click.prevent="router.back()" class="back">
    &lt; Back
  </a>
  <nav class="nav">
    <NavItem v-for="target in targets" :target="target.target" :text="target.text" :active="target.active"
      :level="target.level" />
  </nav>
</template>

<script setup lang="ts">
import type { NavItemProps } from './types'

const route = useRoute()
const router = useRouter()

const hrefBack = computed(() => {
  const segments = route.path.split('/')
  segments.pop()
  return segments.join('/') || '/'
})

const isMainPage = computed(() => {
  return route.path === '/' || !route.path.startsWith('/projects')
})

const targetsMain = ref<NavItemProps[]>([
  {
    target: "#about",
    text: "About Me",
    active: false,
    level: 1,
  },
  {
    target: "#projects",
    text: "Projects",
    active: false,
    level: 1,
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
    level: 1,
  },
])

const targetsProjects = ref<NavItemProps[]>([
  {
    target: "#web-dev",
    text: "Website Development",
    active: false,
    level: 2,
  },
  {
    target: "#data-ai-llms",
    text: "Data Analyst, AI, LLMs",
    active: false,
    level: 2,
  },
  {
    target: "#mobile-dev",
    text: "Mobile Development",
    active: false,
    level: 2,
  },
])

const targetsDynamic = ref<NavItemProps[]>([])

const TAGS2LEVELS = {
  'H2': 2 as const,
  'H3': 3 as const,
  'H4': 4 as const,
}

onMounted(() => {
  if (route.path.startsWith('/projects/')) {
    const headings = document.querySelectorAll('h2, h3, h4')
    targetsDynamic.value = []

    Array.from(headings).forEach((heading) => {
      if (heading.tagName !== 'H2' && heading.tagName !== 'H3' && heading.tagName !== 'H4') {
        return
      }
      targetsDynamic.value.push({
        target: `#${heading.id}`,
        text: heading.textContent || '',
        active: false,
        level: TAGS2LEVELS[heading.tagName],
      })
    })
  }
})

const targets = computed(() => {
  if (isMainPage.value) {
    return targetsMain.value
  } else if (route.path == '/projects/' || route.path == '/projects') {
    return targetsProjects.value
  }
  return targetsDynamic.value
})

function handleSetActive() {
  const targetEls = targets.value.map((target) => {
    if (!target.target.startsWith('#')) return null
    return document.querySelector(target.target)
  })
  let nearestDiff = Infinity
  let nearestIndex = 0
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
}

onMounted(() => {
  setInterval(handleSetActive, 10)

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
.back {
  margin-top: 1rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0.5rem 0 1rem 0;
  padding: 0.5rem 1rem 0.5rem 0;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  border-top: 1px solid rgba($primary-2, 0.5);
  border-bottom: 1px solid rgba($primary-2, 0.5);
  border-radius: 1px;

  @include device('mobile') {
    display: none;
  }
}
</style>
