<template>
  <div class="content-wrapper">
    <div class="section" id="about">
      <!-- TODO: ubah about -->
      <h2 class="section-title">About Me</h2>
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


    <div class="section" id="technologies">
      <h2 class="section-title">Technologies</h2>
      <div class="section-content">
        <p>
          Languages, Frameworks, and Tools that I frequently use
        </p>

        <div class="icons">
          <div v-for="icon in icons" :key="icon.name" class="icon">
            <img width="64" height="64" :src="icon.src" :alt="icon.name + ' Logo'" />
            {{ icon.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="section" id="projects">
      <h2 class="section-title">Recent Projects</h2>
      <div class="section-content">
        <ProjectList :projects="projects" />
      </div>
      <NuxtLink to="/projects" target="_self">
        See all projects
      </NuxtLink>
    </div>
    <div class="section" id="blogs">
      <h2 class="section-title">Recent Blog Posts</h2>
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
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/components/Exp/types'
import type { Project } from '@/components/Project/types'

useSeoMeta({
  title: 'Khusyasy\'s Portfolio',
  description: 'I love building things to solve real world problems, mainly focusing on website development and data science. I enjoy working with TypeScript, JavaScript, Vue.js, Nuxt, and Python for NLP. I am flexible and open to new opportunities to collaborate with others and create impactful digital solutions.',
})

const { data } = await useProjects()

const projects = computed(() => {
  if (!data.value) return [];
  return data.value.slice(0, 3).map((item) => {
    const project: Project = {
      title: item.title,
      description: item.description,
      url: item.path,
      cover_image: item.meta.cover_image || '',
      date: item.meta.date ? new Date(item.meta.date) : new Date(),
      category: item.meta.category,
      tags: item.meta.tags || [],
    };
    return project;
  })
})

const icons = [
  {
    name: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Vue.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  },
  {
    name: 'Nuxt.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg',
  },
  {
    name: 'React.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'MySQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    name: 'SQLite',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
  },
  {
    name: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'HTML5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'TailwindCSS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Figma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  },
  {
    name: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
]

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
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @include device('mobile') {
    gap: 3rem;
  }
}

.icons {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  transition: transform 0.2s ease-in-out;
  width: 64px;
  height: auto;

  &>img {
    border-radius: 0.5rem;
    padding: 0.25rem;
    background-color: rgba($white, 1);
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
