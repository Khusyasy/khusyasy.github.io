<template>
  <div class="main-app">
    <div class="container">
      <Sidebar />
      <div class="right">
        hello test
      </div>
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
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8rem 0;
}

.right {
  width: 100%;
}
</style>
