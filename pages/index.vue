<template>
  <div class="container">
    <Sidebar />
    <Content />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
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
