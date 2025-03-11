<template>
  <n-config-provider :theme="theme" class="wh-full" >
    <router-view />
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme } from "naive-ui";
import { computed, ref } from "vue";
import { useThemeStore } from '@/store'
const themeStore = useThemeStore()
const theme = computed(() => themeStore.isDark ? darkTheme : undefined)


</script>
