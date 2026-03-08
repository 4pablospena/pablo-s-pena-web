<script setup lang="ts">
interface EducationCertData {
  label: string
  title: string
  issuer: string
  description?: string
  link?: string
}

const ITEMS: EducationCertData[] = [
  {
    label: 'Grado',
    title: 'Ingeniería Informática',
    issuer: 'Universidad Nacional de Educación a Distancia (UNED)',
  },
  {
    label: 'Certificación',
    title: 'AWS Partner: Sales',
    issuer: 'Amazon Web Services (AWS)',
    description: 'Accreditation - Training Badge',
  },
  {
    label: 'Certificación',
    title: 'AWS Partner: Technical',
    issuer: 'Amazon Web Services (AWS)',
    description: 'Accreditation - Training Badge',
  },
  {
    label: 'Certificación',
    title: 'Claude code in action',
    issuer: 'Anthropic',
  },
  {
    label: 'Título',
    title: 'Técnico deportivo avanzado en Fútbol sala',
    issuer: 'RFEF',
  },
  {
    label: 'Título',
    title: 'Técnico deportivo básico en Fútbol sala',
    issuer: 'RFEF',
  },
]
</script>

<template>
  <div class="mt-10 space-y-16">
    <div
      v-for="(item, i) in ITEMS"
      :key="`${item.issuer}-${item.title}`"
      class="group grid grid-cols-[120px_1fr] gap-0 sm:grid-cols-[160px_1fr] md:grid-cols-[200px_1fr]"
    >
      <!-- Columna izquierda: etiqueta + línea -->
      <div class="relative flex flex-col items-end pr-8">
        <span
          class="pt-1 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 text-right leading-tight"
        >
          {{ item.label }}
        </span>

        <!-- Línea + punto -->
        <div class="absolute right-0 top-0 bottom-0 flex flex-col items-center">
          <div class="mt-2 relative">
            <span
              class="block h-3 w-3 rounded-full border-2 border-cyan-500 bg-white dark:bg-[#09090b]"
            />
            <span
              v-if="i === 0"
              class="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-cyan-500/40"
            />
          </div>
          <div
            v-if="i < ITEMS.length - 1"
            class="flex-1 w-px bg-gradient-to-b from-cyan-500/40 to-transparent"
          />
        </div>
      </div>

      <!-- Columna derecha: contenido -->
      <div class="pb-4 pl-8 last:pb-0">
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white leading-tight">
            {{ item.title }}
          </h3>
          <span class="mt-1 inline-block text-sm font-medium text-cyan-600 dark:text-cyan-400">
            {{ item.issuer }}
          </span>
        </div>
        <p
          v-if="item.description"
          class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-lg"
        >
          {{ item.description }}
        </p>
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-3 inline-flex items-center gap-1 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
        >
          Saber más
          <svg class="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
