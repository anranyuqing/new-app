<template>
  <div class="grid grid-cols-24 justify-between items-center min-h-16 w-full"
    :class="themeStore.isDark ? 'bg-#000' : ''">
    <div class="px-2.5 ">
      11
    </div>
    <div class="px-2.5 col-start-22 flex-center">
      <ThemeToggler class="hover:bg-#DBDBFF/50 rounded-50% p-1 w-8 h-8 shrink-0 mr-2.5" />
      <LocaleSwitcher class="hover:bg-#DBDBFF/50 rounded-50% p-1 w-8 h-8 shrink-0 mr-2.5" />
      <FullScreen class="hover:bg-#DBDBFF/50 rounded-50% p-1 w-8 h-8 shrink-0 mr-2.5" />
      <Notification class="hover:bg-#DBDBFF/50 rounded-50% p-1 w-8 h-8 shrink-0 mr-2.5" />
      <UserDropdown
        class="hover:bg-#DBDBFF/50 rounded-50% p-1 w-8 h-8 shrink-0  bg-red b-3 box-content b-solid border-#fff shadow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ThemeToggler, LocaleSwitcher, FullScreen, Notification, UserDropdown } from './widgets'
import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
</script>
