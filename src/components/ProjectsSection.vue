<script setup lang="ts">
import type { Component } from 'vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import LinkIcon from './icons/LinkIcon.vue'
import LinkButton from './LinkButton.vue'

interface Tag {
  name: string
  class: string
  icon: Component
}

interface Project {
  title: string
  description: string
  link?: string
  github?: string
  image: string
  tags: Tag[]
}

const PROJECTS: Project[] = [
  // Añade tus proyectos aquí
]
</script>

<template>
  <div class="flex flex-col gap-6 mt-8">
    <article
      v-for="(project, i) in PROJECTS"
      :key="i"
      class="glass rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group"
    >
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-5/12">
          <div class="relative overflow-hidden h-56 md:h-full">
            <img
              :alt="project.title"
              class="object-cover object-top w-full h-full transition-transform duration-500 md:group-hover:scale-105"
              loading="lazy"
              :src="project.image"
            />
          </div>
        </div>
        <div class="w-full md:w-7/12 p-5 md:p-6 flex flex-col justify-center">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white">
            {{ project.title }}
          </h3>
          <ul class="flex flex-wrap gap-2 mt-2">
            <li v-for="(tag, j) in project.tags" :key="j">
              <span :class="['flex items-center gap-1.5 rounded-full text-xs py-1 px-2.5 font-medium', tag.class]">
                <component :is="tag.icon" class="size-3.5" />
                {{ tag.name }}
              </span>
            </li>
          </ul>
          <p class="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ project.description }}
          </p>
          <footer class="flex items-center gap-3 mt-4">
            <LinkButton v-if="project.github" :href="project.github">
              <GitHubIcon class="size-4" />
              Code
            </LinkButton>
            <LinkButton v-if="project.link" :href="project.link">
              <LinkIcon class="size-3.5" />
              Preview
            </LinkButton>
          </footer>
        </div>
      </div>
    </article>
  </div>
</template>
