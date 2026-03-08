<script setup lang="ts">
import ExperienceItem from './ExperienceItem.vue'

interface ExperienceData {
  date: string
  title: string
  company: string
  description: string
  link?: string
}

const EXPERIENCE: ExperienceData[] = [
  {
    date: 'Actualmente...',
    title: 'Frontend Developer',
    company: 'Tu empresa actual',
    description:
      'Desarrollo de interfaces modernas con Vue.js, TypeScript y herramientas de última generación. Creación de componentes reutilizables y aplicaciones web de alto rendimiento.',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4 mt-8">
    <ExperienceItem
      v-for="(experience, i) in EXPERIENCE"
      :key="i"
      v-bind="experience"
    />
  </div>
</template>
