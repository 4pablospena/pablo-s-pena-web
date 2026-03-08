<script setup lang="ts">
import LinkInline from './LinkInline.vue'

defineProps<{
  title: string
  company: string
  description: string
  link?: string
  date: string
}>()
</script>

<template>
  <div class="glass rounded-xl p-5 transition-all duration-300 hover:shadow-lg">
    <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 class="text-base font-bold text-gray-900 dark:text-white">{{ title }}</h3>
        <h4 class="text-sm font-medium text-cyan-600 dark:text-cyan-400">{{ company }}</h4>
      </div>
      <time class="text-xs font-medium tracking-wide uppercase text-gray-400 dark:text-gray-500 whitespace-nowrap mt-1 sm:mt-0.5">
        {{ date }}
      </time>
    </div>
    <p class="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
    <LinkInline v-if="link" :href="link" class="mt-3">
      Saber más
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 ml-0.5"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </LinkInline>
  </div>
</template>
