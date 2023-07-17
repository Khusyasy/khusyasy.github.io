<template>
  <div class="glow" ref="el" tabindex="-1"></div>
</template>

<script setup lang="ts">
const el = ref<HTMLElement>()

const currPos = ref({ x: 0, y: 0 })
const targetPos = ref({ x: 0, y: 0 })

const currSize = ref(120)
const targetSize = ref(120)

watchEffect(() => {
  targetPos.value.x = store.value.mouseX
  targetPos.value.y = store.value.mouseY
  const diff = Math.abs(currPos.value.x - targetPos.value.x) + Math.abs(currPos.value.y - targetPos.value.y)
  targetSize.value = Math.max(40, 120 - (diff / 2))
})

onMounted(() => {
  setInterval(() => {
    currPos.value.x = lerp(currPos.value.x, targetPos.value.x, 0.2)
    currPos.value.y = lerp(currPos.value.y, targetPos.value.y, 0.2)
    currSize.value = lerp(currSize.value, targetSize.value, 0.2)
    if (el.value) {
      el.value.style.setProperty('--size', `${currSize.value}px`)
      el.value.style.setProperty('--pos-x', `${currPos.value.x}px`)
      el.value.style.setProperty('--pos-y', `${currPos.value.y}px`)
    }
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
