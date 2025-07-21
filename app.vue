<template>
  <div class="main-app">
    <Glow />
    <div class="container">
      <Sidebar />
      <div class="main-wrapper">
        <Breadcrumbs />
        <div class="content-wrapper">
          <NuxtPage />
        </div>
        <div class="mobile-social">
          <SidebarSocialList />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mouseX = useState<number>('mouseX', () => 0)
const mouseY = useState<number>('mouseY', () => 0)
const scrollX = useState<number>('scrollX', () => 0)
const scrollY = useState<number>('scrollY', () => 0)

function updateMouse(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

function updateScroll() {
  scrollX.value = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft
  scrollY.value = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
}

onMounted(() => {
  window.addEventListener('mousemove', updateMouse)
  window.addEventListener('scroll', updateScroll)
})
</script>

<style lang="scss" scoped>
.main-app {
  height: max-content;
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 100;

  @include device('mobile') {
    flex-direction: column;
  }
}

.main-wrapper {
  width: 100%;
  padding: 8rem calc(5vw + 2rem) 8rem calc(30vw + 2rem);

  @include device('mobile') {
    padding: 4rem 1rem;
  }

  @include device('tablet') {
    padding: 8rem calc(2vw + 0.5rem) 8rem calc(30vw + 0.5rem);
  }
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @include device('mobile') {
    gap: 4rem;
  }
}

.mobile-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem;

  @include devices('tablet', 'desktop') {
    display: none;
  }
}
</style>
