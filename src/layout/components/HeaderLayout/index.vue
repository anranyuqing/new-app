<template>
  <div class="grid grid-cols-24 justify-between items-center min-h-16 w-full" :class="themeStore.isDark ? 'bg-#000' : ''">
    <div class="px-2.5 ">
      11
    </div>
    <div class="px-2.5 col-start-23">
      <ThemeToggler />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ThemeToggler } from './widgets'
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
</script>
