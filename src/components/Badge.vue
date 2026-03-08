<template>
  <div class="flex items-center">
    <span
      class="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200/80 dark:bg-cyan-950/50 dark:text-cyan-300 dark:ring-cyan-500/20"
    >
      <span class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
        <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
      </span>
      <slot />
    </span>
  </div>
</template>
