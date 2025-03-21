<!--
 * @author: lixw
 * @since: 2025-03-21
 * @description: 工具箱
-->
<template>
  <div class="flex justify-between w-40 bg-#f4f4f5 px-5 py-2.5 rounded-10">
    <LocaleSwitcher />
    <ThemeToggler />
  </div>
</template>

<script setup lang="ts">
import { LocaleSwitcher, ThemeToggler } from '@/layout/components/HeaderLayout/widgets'


</script>

<style scoped></style>
