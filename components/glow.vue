<template>
  <div class="glow" tabindex="-1" :style="{
    '--size': `${currSize}px`,
    '--pos-x': `${currPos.x}px`,
    '--pos-y': `${currPos.y}px`,
  }"></div>
</template>

<script setup lang="ts">
const currPos = ref({ x: 0, y: 0 })
const targetPos = ref({ x: 0, y: 0 })

const currSize = ref(120)
const targetSize = ref(120)

watchEffect(() => {
  targetPos.value.x = store.value.mouseX + store.value.scrollX
  targetPos.value.y = store.value.mouseY + store.value.scrollY
  const diff = Math.abs(currPos.value.x - targetPos.value.x) + Math.abs(currPos.value.y - targetPos.value.y)
  targetSize.value = Math.max(40, 120 - (diff / 2))
})

onMounted(() => {
  setInterval(() => {
    currPos.value.x = lerp(currPos.value.x, targetPos.value.x, 0.2)
    currPos.value.y = lerp(currPos.value.y, targetPos.value.y, 0.2)
    currSize.value = lerp(currSize.value, targetSize.value, 0.2)
  }, 10)
})
</script>

<style lang="scss" scoped>
.glow {
  width: 0;
  height: 0;
  border-radius: 100%;
  display: block;
  position: absolute;
  top: var(--pos-y);
  left: var(--pos-x);
  overflow: hidden;
  user-select: none;
  z-index: 99;
  box-shadow: 0 0 var(--size) var(--size) rgba($primary-1, 0.15);
}
</style>
