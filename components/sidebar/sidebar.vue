<template>
  <div class="wrapper">
    <div class="top">
      <h1>Hello, I'm <span class="text-highlight">Khusyasy</span></h1>
      <NavList />
    </div>
    <SidebarSocialList />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  left: max(0px, calc((100vw - 1920px)/2));
  top: 0;
  display: flex;
  width: min(30vw, 37.5rem);
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8rem 0 8rem min(5vw, 6.25rem);

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

.top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  h1 {
    font-size: 2.5em;

    @include device('mobile') {
      text-align: center;
    }
  }
}
</style>
