<template>
  <div class="wrapper">
    <div class="section" id="section-about">
      <h2 class="section-title">About</h2>
      <div class="section-content">
        <p>
          I love building things to solve real world problems, mainly focusing on
          <span class="text-highlight">website development</span> and <span class="text-highlight">data science</span>.
        </p>
        <p>
          I enjoy working with <span class="text-highlight">TypeScript</span> / JavaScript using modern frameworks like <span class="text-highlight">Vue.js</span> and <span class="text-highlight">Nuxt</span> to create responsive and easy to use web apps.
        </p>
        <p>
          I also like to explore data using <span class="text-highlight">Python</span> and SQL to give actionable insights, especially with Natural Language Processing (<span class="text-highlight">NLP</span>) techniques to solve complex challenges.
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
      <h2 class="section-title">Recent Post / Project</h2>
      <div class="section-content">
        <ProjectList />
      </div>
      <a class="text-highlight link-text" href="https://dev.to/khusyasy" target="_blank" rel="noopener noreferrer">
        View more on my dev.to
      </a>
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
    date: 'Jul 2024 – Aug 2024',
    company: 'Telkom Indonesia',
    position: 'Data Analyst Intern',
    info: 'Developed a prototype customer service chatbot with the Retrieval-Augmented Generation (RAG) method to provide more accurate and context-aware responses, aiming to improve user satisfaction. Designed interactive Tableau dashboards to visualize and analyse data to get insights for action.',
    tags: ['Python', 'NLP', 'Tableau']
  },
  {
    date: 'Apr 2022 – Feb 2024',
    company: 'Freelance',
    position: 'Fullstack Developer',
    info: 'Provided solutions for data scraping automation or website development needs, using Node.js and Puppeteer.',
    tags: ['JavaScript', 'Typescript', 'Node.js', 'Vue.js', 'Puppeteer']
  },
  {
    date: 'Aug 2021 – Apr 2022',
    company: 'PT. Emtres Indonesia',
    position: 'Frontend Developer',
    info: 'Building Vue.js website focused on data management and data input. Developed complex input forms with validations and unique requirements for climate-related data.',
    tags: ['JavaScript', 'Vue.js']
  },
  {
    date: 'July 2021',
    company: '@loker.programmer',
    position: 'Frontend Developer Intern',
    info: 'Designed and developed event landing pages and an E-Book sales landing page using React.js. Supported marketing efforts through visually appealing and user-friendly designs.',
    tags: ['JavaScript', 'React.js']
  },
]
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  padding: 8rem calc(5vw + 2rem) 8rem calc(30vw + 2rem);
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

.link-text {
  padding: 0.25rem;
  transition: all 0.2s ease-in-out;
  color: $primary-2;

  &:hover {
    color: $primary-1;
  }
}
</style>
