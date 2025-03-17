<!--
 * @author: lixw
 * @since: 2025-03-17
 * @description: 语言切换
-->
<template>
  <div class="flex-center">
    <n-popselect v-model:value="currentLang" :options="options" trigger="click" @update:value="handleChangeLang">
      <icon icon="ion:language" class="cursor-pointer shrink-0 focus:outline-none" size="20" />
    </n-popselect>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentLang = ref(localStorage.getItem('lang'))

const options = [
  {
    label: '简体中文',
    value: 'zh',
  },
  {
    label: 'English',
    value: 'en',
  },
]

function handleChangeLang(lang: string) {
  localStorage.setItem('lang', lang)
  window.location.reload()

}
</script>

<style scoped></style>
