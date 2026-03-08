<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import SystemIcon from './icons/SystemIcon.vue'

type ThemePreference = 'dark' | 'light' | 'system'

const THEMES: ThemePreference[] = ['light', 'dark', 'system']
const THEME_LABELS: Record<ThemePreference, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
}
const THEME_STORAGE_KEY = 'theme'

const isMenuOpen = ref(false)
const currentTheme = ref<ThemePreference>('system')

const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

function getThemePreference(): ThemePreference {
  if (typeof localStorage !== 'undefined') {
    return (localStorage.getItem(THEME_STORAGE_KEY) as ThemePreference) ?? 'system'
  }
  return matchMedia.matches ? 'dark' : 'light'
}

function updateTheme() {
  const themePreference = getThemePreference()
  currentTheme.value = themePreference
  const isDark =
    themePreference === 'dark' || (themePreference === 'system' && matchMedia.matches)
  document.documentElement.classList.toggle('dark', isDark)
}

function selectTheme(theme: ThemePreference) {
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  isMenuOpen.value = false
  updateTheme()
}

function toggleMenu(e: Event) {
  e.stopPropagation()
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  updateTheme()
  matchMedia.addEventListener('change', updateTheme)
  document.addEventListener('click', closeMenu)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  matchMedia.removeEventListener('change', updateTheme)
  document.removeEventListener('click', closeMenu)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="relative ml-1 mr-1">
    <button
      type="button"
      :aria-expanded="isMenuOpen"
      aria-haspopup="menu"
      aria-label="Elige el tema"
      class="appearance-none border-none flex hover:scale-125 transition"
      @click="toggleMenu"
    >
      <SunIcon
        class="size-5 transition-all"
        :style="{ scale: currentTheme === 'light' ? '1' : '0', position: currentTheme === 'light' ? 'static' : 'absolute' }"
      />
      <MoonIcon
        class="size-5 transition-all"
        :style="{ scale: currentTheme === 'dark' ? '1' : '0', position: currentTheme === 'dark' ? 'static' : 'absolute' }"
      />
      <SystemIcon
        class="size-5 transition-all"
        :style="{ scale: currentTheme === 'system' ? '1' : '0', position: currentTheme === 'system' ? 'static' : 'absolute' }"
      />
    </button>
    <div
      v-show="isMenuOpen"
      role="menu"
      aria-label="Opciones de tema"
      class="absolute top-8 right-0 text-sm p-1.5 min-w-[8rem] rounded-xl glass shadow-lg animate-scale-up"
    >
      <ul role="none">
        <li v-for="theme in THEMES" :key="theme" role="none">
          <button
            type="button"
            role="menuitem"
            class="w-full text-left px-2.5 py-1.5 rounded-lg transition-colors hover:bg-gray-200/60 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
            @click="selectTheme(theme)"
          >
            {{ THEME_LABELS[theme] }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.animate-scale-up {
  animation: scale-up-center 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes scale-up-center {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
