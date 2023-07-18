<template>
  <div class="experience">
    <h3>
      {{ date }}
    </h3>
    <div class="exp-content">
      <p>
        {{ content }}
      </p>
      <div class="tag-container">
        <div class="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  date: string
  content: string
  tags: string[]
}>()
</script>

<style lang="scss" scoped>
.experience {
  display: flex;
  flex-direction: row;
  gap: 0.8em;
  font-size: 1rem;
}

h3 {
  color: $primary-2;
  font-weight: 400;
  width: 50%;
  opacity: 0.8;
  font-size: 0.8rem;
}

.exp-content {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.tag-container {
  display: flex;
  flex-direction: row;
  gap: 0.25em;
}

.tag {
  background-color: $primary-1;
  color: $black;
  padding: 0.1em 0.25em;
  border-radius: 2em;
  font-size: 0.8rem;
  font-weight: 400;
}
</style>
