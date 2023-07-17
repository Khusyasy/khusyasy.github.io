<template>
  <div class="wrapper">
    <div class="top">
      <div>
        <h1>Hello, I'm <span class="text-highlight">Khusyasy</span></h1>
      </div>
      <nav class="nav">
        <NavItem to="#section-about" text="About"></NavItem>
        <NavItem to="#section-experience" text="Experience"></NavItem>
      </nav>
    </div>
    <div class="social">
      <SocialItem icon="github"></SocialItem>
      <SocialItem icon="linkedin"></SocialItem>
      <SocialItem icon="devto"></SocialItem>
      <SocialItem icon="twitter"></SocialItem>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  width: 50%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8rem 0 8rem 10vw;
}

.top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  font-size: 2.5em;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.social {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
}
</style>
