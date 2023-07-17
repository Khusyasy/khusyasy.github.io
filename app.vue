<template>
  <div class="main-app">
    <div class="container">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.main-app {
  width: 100%;
  height: 100vh;
  background-color: $black;
  color: $white;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
