<script setup lang="ts">
const TECHNOLOGIES = [
  'HTML',
  'CSS',
  'JavaScript',
  'Vue.js',
  'TypeScript',
  'Git',
  'Cursor',
  'Claude',
  'ChatGPT',
]
</script>

<template>
  <div class="mt-8">
    <ul class="flex flex-wrap justify-center gap-2 md:gap-3">
      <li
        v-for="tech in TECHNOLOGIES"
        :key="tech"
        class="rounded-full px-4 py-2 text-sm font-medium glass text-gray-700 dark:text-gray-300 transition-colors hover:border-gray-300 dark:hover:border-gray-600"
      >
        {{ tech }}
      </li>
    </ul>
  </div>
</template>
