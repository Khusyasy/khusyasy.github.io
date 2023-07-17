<template>
  <div class="wrapper">
    <div class="top">
      <div>
        <h1>Hello, I'm <span class="text-highlight">Khusyasy</span></h1>
      </div>
      <div>
        <NavItem text="About"></NavItem>
      </div>
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
  height: calc(100vh - 16rem);
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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
