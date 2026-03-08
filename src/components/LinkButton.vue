<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a
    target="_blank"
    rel="noopener noreferrer"
    :href="href"
    class="inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 glass text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
  >
    <slot />
  </a>
</template>
