<script setup lang="ts">
interface ExperienceData {
  date: string
  title: string
  company: string
  description: string
  link?: string
}

const EXPERIENCE: ExperienceData[] = [
  {
    date: 'Actualmente...',
    title: 'Product Engineer',
    company: 'Resizes',
    description:
      'Creando componentes reutilizables y automatizando experiencias de usuario para su escalabilidad.',
  },
  {
    date: '2023 - 2025',
    title: 'Floor manager',
    company: 'Fútbol Emotion',
    description:
      'Optimizar la operativa de tienda y el rendimiento del equipo mediante el análisis de KPIs para alcanzar los objetivos de venta. Control riguroso del stock y el visual.',
  },
  {
    date: '2023',
    title: 'Vendedor Deportivo',
    company: 'Decathlon',
    description:
      'Asesoramiento de forma técnica y cercana sobre el material deportivo que mejor se adapte a sus necesidades y nivel. Gestionar el stock de productos y garantizar una experiencia de compra ágil y satisfactoria.',
  },
  {
    date: '2013 - 2023',
    title: 'Entrenador Fútbol Sala',
    company: 'Gijón Playas F.S',
    description:
      'Planificación y dirección de sesiones de entrenamiento técnico-tácticas para potenciar el rendimiento individual y colectivo de los jugadores en pista. Gestión de la dinámica del grupo.',
  },
]
</script>

<template>
  <div class="mt-10 space-y-16">
    <div
      v-for="(exp, i) in EXPERIENCE"
      :key="i"
      class="group grid grid-cols-[120px_1fr] gap-0 sm:grid-cols-[160px_1fr] md:grid-cols-[200px_1fr]"
    >
      <!-- Columna izquierda: fecha + línea -->
      <div class="relative flex flex-col items-end pr-8">
        <time
          class="pt-1 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 text-right leading-tight"
        >
          {{ exp.date }}
        </time>

        <!-- Línea + punto -->
        <div class="absolute right-0 top-0 bottom-0 flex flex-col items-center">
          <!-- Punto -->
          <div class="mt-2 relative">
            <span
              class="block h-3 w-3 rounded-full border-2 border-cyan-500 bg-white dark:bg-[#09090b]"
            />
            <span
              v-if="i === 0"
              class="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-cyan-500/40"
            />
          </div>
          <!-- Línea -->
          <div
            v-if="i < EXPERIENCE.length - 1"
            class="flex-1 w-px bg-gradient-to-b from-cyan-500/40 to-transparent"
          />
        </div>
      </div>

      <!-- Columna derecha: contenido -->
      <div class="pb-4 pl-8 last:pb-0">
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white leading-tight">
            {{ exp.title }}
          </h3>
          <span class="mt-1 inline-block text-sm font-medium text-cyan-600 dark:text-cyan-400">
            {{ exp.company }}
          </span>
        </div>
        <p class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-lg">
          {{ exp.description }}
        </p>
        <a
          v-if="exp.link"
          :href="exp.link"
          target="_blank"
          rel="noopener"
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
