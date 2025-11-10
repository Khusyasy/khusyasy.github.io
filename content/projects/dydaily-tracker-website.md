---
date: 2025-07-10
category: web-dev
cover_image: /images/projects/dydaily-tracker-website/dydaily-preview-1.jpg
tags:
  - Vue.js
  - Nuxt.js
  - Tailwind CSS
  - Figma
  - Github Pages
---

# Do your Daily Tracker Website
Designed and developed a Progressive Web Application (PWA) for DyDaily, a productivity tool that helps users track and complete routine daily tasks, especially those found in digital games and services.

- Links:
  - [Live Website](https://dydaily.khusyasy.my.id/)
  - [Github Repository](https://github.com/Khusyasy/dydaily)

## Overview
- Role: Fullstack Developer
- Problem/Goal: The main goal was to create a lightweight, reliable, and fully offline-capable tracker to mitigate the issue of users forgetting daily login rewards across many online games (Genshin, ZZZ, Blue Archive, etc.) abd other services. The solution needed to provide seamless tracking, local data persistence, and full offline usability.

### Key Features

#### Daily Tracker with Streak Counter

- Users can add tasks with name and server refresh time, with optional url
- Users can mark their task when completed, url task will both open and mark it
- Streak counter to motivates consistent completion

![DyDaily Preview 1](/images/projects/dydaily-tracker-website/dydaily-preview-1.jpg)

![DyDaily Preview 2](/images/projects/dydaily-tracker-website/dydaily-preview-2.jpg)

#### Calendar View

- A monthly calendar view allows users to review their historical completion data at a glance

![DyDaily Preview 3](/images/projects/dydaily-tracker-website/dydaily-preview-3.jpg)

#### Data Export / Import

- Data stored fully locally on the browser
- Export / Import data as plain json file
- Version support, data is safe even with major updates

#### PWA and Full Offline Support

- PWA ready, can be installed as an app on supported browser / device
- DyDaily works fully offline after the first load

### Tech Stack
- Language: TypeScript
- Frontend: Vue.js
- Backend: Nuxt.js
- Styling: CSS, Tailwind CSS
- Deployment: Github Pages
- Design: Figma

## Development Process

This project is mainly focused on being a static web app with offline capabilities, so I chose to use Vue.js Nuxt.js to build a PWA, this framework is great for building a dynamic frontend application with good performance, great routing support, and easy way to deploy for Github Pages.

At first this project was built only using JavaScript, but later migrated to TypeScript for better type safety and maintainability. Tailwind CSS is chosen for highly customized and responsive styling, without writing too much custom CSS if using traditional CSS approach, which helps reduce development time significantly.

To fully support offline capabilities, I decided to store all data locally on the browser using LocalStorage API instead of using any DB. I Also implemented the data versioning system with migrations support to make sure user data is safe even with major updates to the data structure.
