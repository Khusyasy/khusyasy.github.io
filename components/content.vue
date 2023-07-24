<template>
  <div class="wrapper">
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
        <ExpItem v-for="exp in experiences" :data="exp" />
      </div>
    </div>
    <div class="section" id="section-project">
      <h2 class="section-title">Recent Project / Post</h2>
      <div class="section-content">
        <ProjectList />
      </div>
    </div>
    <div class="mobile-social">
      <SidebarSocialList />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from './Exp/types'

const experiences: Experience[] = [
  {
    date: 'Apr 2022 – Present',
    position: 'Freelance Fullstack Developer',
    info: 'Developed innovative solutions using Node.js and Puppeteer to scrape data. Successfully collaborated with five clients, providing solutions for their scraping and automation needs.',
    tags: ['JavaScript', 'Typescript', 'Node.js', 'Puppeteer']
  },
  {
    date: 'Aug 2021 – Apr 2022',
    company: 'PT. Emtres Indonesia',
    position: 'Frontend Developer',
    info: 'Building Vue.js website focused on data management and data input. Developed many input forms with validations and unique requirements. Made significant contributions to data encoding and decoding.',
    tags: ['JavaScript', 'Vue.js']
  },
  {
    date: 'July 2021',
    company: '@loker.programmer',
    position: 'Frontend Website Developer, Remote Internship',
    info: 'Designed and developed event landing pages and an E-Book sales landing page using React.js. Supported marketing efforts through visually appealing and user-friendly designs.',
    tags: ['JavaScript', 'React.js']
  },
]
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  padding: 8rem calc(min(5vw, 6.25rem) + 2rem) 8rem calc(min(30vw, 37.5rem) + 2rem);
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @include device('mobile') {
    padding: 4rem 1rem;
    gap: 4rem;
  }

  @include device('tablet') {
    padding: 8rem calc(2vw + 0.5rem) 8rem calc(30vw + 0.5rem);
  }
}

.section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem 1rem;
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

.mobile-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem;

  @include devices('tablet', 'desktop') {
    display: none;
  }
}
</style>
