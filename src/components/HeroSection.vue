<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Badge from './Badge.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import LinkedInIcon from './icons/LinkedInIcon.vue'
import MailIcon from './icons/MailIcon.vue'
import SocialPill from './SocialPill.vue'

const isVisible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})
</script>

<template>
  <div class="max-w-2xl">
    <div
      class="transition-all duration-700 ease-out"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <a
        href="https://linkedin.com/in/pablospena"
        target="_blank"
        rel="noopener"
        class="inline-flex transition md:hover:scale-105 mb-6"
      >
        <Badge>Disponible para hablar</Badge>
      </a>
    </div>

    <h1
      class="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl transition-all duration-700 delay-100 ease-out"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <span class="text-gray-800 dark:text-white">Hey there, soy </span>
      <span class="text-gradient">Pablo</span>
    </h1>

    <p
      class="mt-4 text-lg font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 transition-all duration-700 delay-200 ease-out"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      Product Engineer
    </p>

    <p
      class="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl transition-all duration-700 delay-300 ease-out [&>strong]:text-gray-800 dark:[&>strong]:text-gray-200 [&>strong]:font-semibold"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      Aprendiendo y trabanajdo con <strong>Vue.js, TypeScript</strong>
      y ecosistemas modernos de IA. Especializandome en crear
      <strong>automatizar procesos e implementación de IA </strong>.
    </p>

    <nav
      class="flex flex-wrap gap-3 mt-8 transition-all duration-700 delay-[400ms] ease-out"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <SocialPill href="mailto:4pablosuarezpena@gmail.com">
        <MailIcon class="size-4" />
        Contáctame
      </SocialPill>
      <SocialPill href="https://linkedin.com/in/pablospena">
        <LinkedInIcon class="size-4" />
        LinkedIn
      </SocialPill>
      <SocialPill href="https://github.com/4pablospena">
        <GitHubIcon class="size-4" />
        GitHub
      </SocialPill>
    </nav>
  </div>
</template>
