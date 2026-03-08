<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div :class="['mb-10', $props.class]">
    <h2 class="flex items-center gap-x-3 text-2xl font-bold text-gray-900 dark:text-white">
      <slot />
    </h2>
    <div class="gradient-line mt-3 w-16 rounded-full" />
  </div>
</template>
