<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalTheme } from "naive-ui";
import { darkTheme } from "naive-ui";
import { ref } from "vue";
const theme = ref<GlobalTheme | null>(null);
</script>
