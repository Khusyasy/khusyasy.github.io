<template>
  <div class="main-app">
    <Glow />
    <div class="container">
      <Sidebar />
      <Content />
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
</style>
