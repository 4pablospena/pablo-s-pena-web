<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

interface NavItem {
  title: string
  label: string
  url: string
}

const navItems: NavItem[] = [
  { title: 'Experiencia', label: 'experiencia', url: '/#experiencia' },
  { title: 'Estudios', label: 'estudios', url: '/#estudios' },
  { title: 'Proyectos', label: 'proyectos', url: '/#proyectos' },
  { title: 'Stack', label: 'stack', url: '/#stack' },
  { title: 'Sobre mí', label: 'sobre-mi', url: '/#sobre-mi' },
  { title: 'Contacto', label: 'contacto', url: '/#contacto' },
]

const activeSection = ref('')
let observer: IntersectionObserver | null = null

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[data-section]')
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { root: null, rootMargin: '0px', threshold: 0.3 },
  )
  observer = obs
  sections.forEach((section) => obs.observe(section))
}

onMounted(setupScrollSpy)
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
    <nav
      id="header-nav"
      class="flex px-3 text-sm font-medium rounded-full text-gray-500 dark:text-gray-400 justify-center items-center"
    >
      <a
        v-for="link in navItems"
        :key="link.label"
        :href="link.url"
        :aria-label="link.label"
        class="relative block px-2.5 py-2 transition-colors duration-200"
        :class="
          activeSection === link.label
            ? 'text-gray-900 dark:text-white'
            : 'hover:text-gray-800 dark:hover:text-gray-200'
        "
      >
        {{ link.title }}
        <span
          v-if="activeSection === link.label"
          class="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-500"
        />
      </a>
      <ThemeToggle />
    </nav>
  </header>
</template>
