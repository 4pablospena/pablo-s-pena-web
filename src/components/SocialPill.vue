<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href: string
}>()

const isExternal = computed(() => !props.href.startsWith('mailto:'))
</script>

<template>
  <a
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="glow-hover inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 glass text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#09090b]"
  >
    <slot />
  </a>
</template>
