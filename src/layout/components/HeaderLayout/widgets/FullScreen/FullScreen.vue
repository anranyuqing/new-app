<!--
 * @author: lixw
 * @since: 2025-03-17
 * @description: 全屏
-->
<template>
  <div class="flex-center">
    <icon icon="iconamoon:screen-full-duotone" v-if="!isFullscreen" class="cursor-pointer shrink-0 focus:outline-none" size="20" @click="toggle"/>
    <icon icon="fluent:full-screen-minimize-24-filled" v-else class="cursor-pointer shrink-0 focus:outline-none" size="20" @click="toggle"/>
  
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()


</script>

<style scoped></style>
