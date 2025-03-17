<template>
  <div class="grid grid-cols-4 gap-x-2.5">
    <n-card title="卡片" v-for="el in 4" :key="el" header-class="p-2.5!" content-class="px-2.5!">
      <n-button @click="handleLang('en')">英文</n-button>
      <n-button @click="handleLang('zh-cn')">中文</n-button>

    </n-card>
    <div>
      主题色
    </div>
  </div>
</template>

<script setup lang="ts">
function handleLang(type:string) {
  if(type === localStorage.getItem('lang')){
    return 
  }
  localStorage.setItem('lang', type)
  window.location.reload()
}
</script>
