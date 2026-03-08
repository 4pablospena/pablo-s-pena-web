<script setup lang="ts">
import { CONTACT } from '@/constants'
import GitHubIcon from './icons/GitHubIcon.vue'
import LinkedInIcon from './icons/LinkedInIcon.vue'
import MailIcon from './icons/MailIcon.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="w-full mx-auto container lg:max-w-4xl md:max-w-2xl mt-24 mb-10 px-4">
    <div class="gradient-line mb-8" />
    <div class="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <span class="text-sm text-gray-400 dark:text-gray-500">
        &copy; {{ currentYear }} Pablo Suárez Peña
      </span>
      <nav class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
        <a
          href="/#sobre-mi"
          class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Sobre mí
        </a>
        <a
          :href="CONTACT.email"
          class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Contacto
        </a>
        <div class="flex gap-3">
          <a
            :href="CONTACT.email"
            aria-label="Email"
            class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors p-1"
          >
            <MailIcon class="size-5" />
          </a>
          <a
            :href="CONTACT.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors p-1"
          >
            <LinkedInIcon class="size-5" />
          </a>
          <a
            :href="CONTACT.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors p-1"
          >
            <GitHubIcon class="size-5" />
          </a>
        </div>
      </nav>
    </div>
  </footer>
</template>
