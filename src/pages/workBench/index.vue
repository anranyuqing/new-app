<template>
  <div class="grid grid-cols-4 gap-x-2.5">
    <n-card title="卡片" v-for="el in 4" :key="el" header-class="p-2.5!" content-class="px-2.5!">
      卡片内容
    </n-card>
    <div >
      主题色
    </div>
  </div>
</template>

<script setup lang="ts"></script>
