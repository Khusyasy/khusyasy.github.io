<template>
  <div class="wrapper">
    <div class="top">
      <h1>Hello, I'm <span class="text-highlight">Khusyasy</span></h1>
      <NavList />
    </div>
    <div class="bottom">
      <div class="social">
        <SidebarSocialItem icon="github"></SidebarSocialItem>
        <SidebarSocialItem icon="linkedin"></SidebarSocialItem>
        <SidebarSocialItem icon="devto"></SidebarSocialItem>
        <SidebarSocialItem icon="twitter"></SidebarSocialItem>
      </div>
      <a class="link" href="mailto:luthfik.job@gmail.com" target="_blank" rel="noopener noreferrer">
        <IconEmail :size="16" /> luthfik.job@gmail.com
      </a>
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

.bottom {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @include device('mobile') {
    align-items: center;
  }
}

.social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
}

.link {
  background-color: transparent;
  text-decoration: none;
  color: $white;
  font-size: 1rem;
  padding: 0.1rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5em;
  width: min-content;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  &:hover {
    background-color: $white;
    color: $black;
  }
}
</style>
