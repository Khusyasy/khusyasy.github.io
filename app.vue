<template>
  <Glow />
  <div class="main-app">
    <div class="container">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
function updateMouse(e: MouseEvent) {
  store.value.mouseX = e.clientX
  store.value.mouseY = e.clientY
}

function updateScroll() {
  store.value.scrollX = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft
  store.value.scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
}

onMounted(() => {
  window.addEventListener('mousemove', updateMouse)
  window.addEventListener('scroll', updateScroll)
})
</script>

<style lang="scss" scoped>
.main-app {
  width: 100%;
  height: 100vh;
  color: $white;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container {
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 100;
}
</style>
