<script setup lang="ts">
import { CONTACT } from '@/constants'
import GitHubIcon from './icons/GitHubIcon.vue'
import LinkedInIcon from './icons/LinkedInIcon.vue'
import MailIcon from './icons/MailIcon.vue'
import SocialPill from './SocialPill.vue'
</script>

<template>
  <div class="mt-8 flex flex-col items-center gap-8 text-center">
    <p class="max-w-xl text-base text-gray-600 dark:text-gray-400 md:text-lg">
      ¿Quieres ayuda con algo o compartir ideas?
      <br />
      Me encanta conectar y conversar con otros desarrolladores.
    </p>
    <nav class="flex flex-wrap justify-center gap-3">
      <SocialPill :href="CONTACT.email">
        <MailIcon class="size-4" />
        Email
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
