<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="w-full mx-auto container lg:max-w-4xl md:max-w-2xl mt-24 mb-10 px-4">
    <div class="gradient-line mb-8" />
    <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <span class="text-sm text-gray-400 dark:text-gray-500">
        &copy; {{ currentYear }} Pablo Suárez Peña
      </span>
      <nav class="flex gap-6 text-sm">
        <a
          href="/#sobre-mi"
          class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Sobre mí
        </a>
        <a
          href="mailto:contacto@pablospena.dev"
          class="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Contacto
        </a>
      </nav>
    </div>
  </footer>
</template>
