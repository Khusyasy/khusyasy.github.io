<template>
  <div class="wrapper" id="content-scroll">
    <div class="section" id="section-about">
      <h2 class="section-title">About</h2>
      <div class="section-content">
        <p>
          I am a tech enthusiast with a strong passion for website development. With a vocational education in
          <span class="text-highlight">Software Engineering</span>
          and currently pursuing a degree in
          <span class="text-highlight">Informatics</span>,
          I have established a solid foundation in the
          field.
        </p>

        <p>
          Specializing in
          <span class="text-highlight">Frontend Development</span>,
          I acquired practical experience and developed my
          expertise using
          <span class="text-highlight">JavaScript</span>,
          <span class="text-highlight">Vue.js</span>, and
          <span class="text-highlight">React.js</span>.
        </p>

        <p>
          I am flexible and open to new opportunities to collaborate with others and create impactful digital solutions.
        </p>
      </div>
    </div>
    <div class="section" id="section-experience">
      <h2 class="section-title">Experience</h2>
      <div class="section-content">
        <ExpItem v-for="props in experiences" :date="props.date" :content="props.content" :tags="props.tags" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experiences: Array<{
  date: string
  content: string
  tags: string[]
}> = [
    {
      date: 'Jan 2021 - Dec 2022',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Officia illo nisi alias ipsam quia necessitatibus quaerat labore ipsum tenetur quasi, neque, suscipit numquam nam! Asperiores.',
      tags: ['Vue.js', 'React.js', 'JavaScript']
    },
    {
      date: 'Jan 2021 - Dec 2022',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Officia illo nisi alias ipsam quia necessitatibus quaerat labore ipsum tenetur quasi, neque, suscipit numquam nam! Asperiores.',
      tags: ['Vue.js', 'React.js', 'JavaScript']
    },
    {
      date: 'Jan 2021 - Dec 2022',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Officia illo nisi alias ipsam quia necessitatibus quaerat labore ipsum tenetur quasi, neque, suscipit numquam nam! Asperiores.',
      tags: ['Vue.js', 'React.js', 'JavaScript']
    },
  ]
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  padding: 8rem calc(10vw + 2rem) 8rem calc(40vw + 2rem);
  display: flex;
  flex-direction: column;
  gap: 8rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
}


.section-title {
  font-size: 2rem;
  line-height: 1;
}

.section-content {
  font-size: 1.25rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
