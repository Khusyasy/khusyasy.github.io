<template>
  <div class="wrapper">
    <div class="top">
      <div>
        <h1>Hello, I'm <span class="text-highlight">Khusyasy</span></h1>
      </div>
      <NavList />
    </div>
    <div class="social">
      <SidebarSocialItem icon="github"></SidebarSocialItem>
      <SidebarSocialItem icon="linkedin"></SidebarSocialItem>
      <SidebarSocialItem icon="devto"></SidebarSocialItem>
      <SidebarSocialItem icon="twitter"></SidebarSocialItem>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 40vw;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8rem 0 8rem 10vw;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1 {
  font-size: 2.5em;
}

.social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
}
</style>
