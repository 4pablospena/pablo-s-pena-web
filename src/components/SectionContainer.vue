<script setup lang="ts">
defineProps<{
  id?: string
  class?: string
}>()
</script>

<template>
  <section
    :id="id"
    :data-section="id"
    :class="['section scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl', $props.class]"
  >
    <slot />
  </section>
</template>
