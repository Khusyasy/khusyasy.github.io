<template>
  <div class="experience">
    <h3>
      {{ date }}
    </h3>
    <div class="exp-content">
      <h4 class="company" v-if="company">
        {{ company }}
      </h4>
      <h4 class="position text-highlight">
        {{ position }}
      </h4>
      <p>
        {{ info }}
      </p>
      <div class="tag-container">
        <div class="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ExpItemProps } from './types'

const props = defineProps<ExpItemProps>()

const { date, company, position, info, tags } = props.data
</script>

<style lang="scss" scoped>
.experience {
  background-color: transparent;
  display: flex;
  flex-direction: row;
  gap: 1em;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;

  &:hover {
    background-color: rgba($black, 0.85);
    box-shadow: 0 0 0.25rem 0.25rem rgba($primary-1, 0.15);
  }

  &:hover .tag {
    background-color: $primary-1;
    color: $black;
  }

  @include device('mobile') {
    flex-direction: column;
    gap: 0.5em;
    padding: 0.5rem;
  }
}

h3 {
  font-weight: 400;
  min-width: 16ch;
  opacity: 0.8;
  font-size: 0.8rem;
}

h4 {
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1;
  text-align: left;

  &.company {
    color: $primary-2;
  }

  &.position {
    color: $primary-1;
  }
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
  border: solid 1px $primary-1;
  background-color: transparent;
  color: $primary-1;
  padding: 0.2em 0.5em;
  border-radius: 2em;
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;
}
</style>
