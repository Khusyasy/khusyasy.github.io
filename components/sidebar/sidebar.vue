<template>
  <div class="sidebar-wrapper">
    <h1 class="top-text">Hello, I'm <span class="text-highlight">Khusyasy</span></h1>
    <NavList />
    <SidebarSocialList />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  position: fixed;
  left: max(0px, calc((100vw - 1920px)/2));
  top: 0;
  display: flex;
  width: 30vw;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8rem 0 8rem 5vw;

  @include device('mobile') {
    position: relative;
    width: 100%;
    height: min-content;
    justify-content: space-around;
    align-items: center;
    padding: 4rem 1rem 1rem;
  }

  @include device('tablet') {
    padding: 8rem 0 8rem 2vw;
  }
}

.top-text {
  font-size: 2.25em;

  @include device('mobile') {
    text-align: center;
  }
}
</style>
