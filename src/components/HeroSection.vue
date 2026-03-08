<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CONTACT } from '@/constants'
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
        :href="CONTACT.linkedin"
        target="_blank"
        rel="noopener"
        aria-label="Contactar por LinkedIn"
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
      class="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl transition-all duration-700 delay-300 ease-out [&>strong]:text-gray-800 dark:[&>strong]:text-gray-200 [&>strong]:font-semibold"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      En constante aprendizaje y mejora. Interesado en el <strong>Front end</strong> y en <strong>automatización de procesos e IA</strong>.
    </p>

    <nav
      class="flex flex-wrap gap-3 mt-8 transition-all duration-700 delay-[400ms] ease-out"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
    >
      <SocialPill :href="CONTACT.email">
        <MailIcon class="size-4" />
        Contáctame
      </SocialPill>
      <SocialPill :href="CONTACT.linkedin">
        <LinkedInIcon class="size-4" />
        LinkedIn
      </SocialPill>
      <SocialPill :href="CONTACT.github">
        <GitHubIcon class="size-4" />
        GitHub
      </SocialPill>
    </nav>
  </div>
</template>
