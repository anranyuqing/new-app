<!--
 * @author: lixw
 * @since: 2025-03-21
 * @description: 第三方登录
-->
<template>
  <div>

    <div class="grid grid-cols-2 gap-x-4">
      <div v-for="el in loginWay" :key="el.title" class="text-center shadow py-1 rounded-1">{{ el.title }}</div>
    </div>

    <n-divider title-placement="center" class="text-3 c-secondary">
      其他登录方式
    </n-divider>

    <div class="flex justify-center">
      <Icon :icon="el.icon" v-for="el in otherWayList" :key="el.icon" :size="24" class="mr-5" />
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loginWay = ref([
  {
    title: '手机号登录',
  },
  {
    title: '二维码登录',
  }
])

const otherWayList = [
  {
    icon: 'ic:baseline-wechat'
  },
  {
    icon: 'mdi:qqchat'
  },
  {
    icon: 'mdi:github'
  }
]
</script>

<style scoped></style>
