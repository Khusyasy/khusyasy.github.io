<template>
  <div class="section" id="about">
    <h2 class="section-title">About</h2>
    <div class="section-content">
      <p>
        I love building things to solve real world problems, mainly focusing on
        <span class="text-highlight">website development</span> and <span class="text-highlight">data science</span>.
      </p>
      <p>
        I enjoy working with <span class="text-highlight">TypeScript</span> / JavaScript using modern frameworks like
        <span class="text-highlight">Vue.js</span> and <span class="text-highlight">Nuxt</span> to create responsive
        and easy to use web apps.
      </p>
      <p>
        I also like to explore data using <span class="text-highlight">Python</span> and SQL to give actionable
        insights, especially with <span class="text-highlight">NLP</span> techniques.
      </p>

      <p>
        I am flexible and open to new opportunities to collaborate with others and create impactful digital solutions.
      </p>
    </div>
  </div>
  <div class="section" id="project">
    <h2 class="section-title">Recent Project</h2>
    <div class="section-content">
      <ProjectList :projects="projects" />
    </div>
    <a href="/projects" target="_self">
      See all projects
    </a>
  </div>
  <div class="section" id="blog">
    <h2 class="section-title">Recent Blog Post</h2>
    <div class="section-content">
      <BlogList />
    </div>
    <a href="https://dev.to/khusyasy" target="_blank" rel="noopener noreferrer">
      Read more posts on dev.to
    </a>
  </div>
  <!-- <div class="section" id="experience">
      <h2 class="section-title">Experience</h2>
      <div class="section-content">
        <ExpItem v-for="exp in experiences" :data="exp" />
      </div>
    </div> -->
</template>

<script setup lang="ts">
import type { Experience } from '@/components/Exp/types'
import type { Project } from '@/components/Project/types';

const { data } = await useAsyncData('projects', () => {
  return queryCollection('content').all()
})

const projects = computed(() => {
  if (!data.value) return [];
  return data.value.slice(0, 3).map((item) => {
    const project: Project = {
      title: item.title,
      description: item.description,
      url: item.path,
      cover_image: item.meta['cover_image'] as string || '/images/default-cover.png',
    };
    return project;
  })
})

const experiences: Experience[] = [
  {
    date: 'Jul 2024 – Aug 2024',
    company: 'Telkom Indonesia',
    position: 'Data Analyst Intern',
    info: 'Developed a chatbot with the RAG method to provide accurate and context-aware responses, to improve user satisfaction. Designed interactive dashboards to analyze data and get insights.',
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
</style>
