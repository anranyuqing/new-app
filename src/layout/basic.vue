<template>
  <div class="w-full h-full">
    <header-layout ref="heightRef" />
    <div class="flex wh-full box-border" :style="{ height: contentHeightStr }">
      <aside-layout />
      <div class="wh-full p-2.5 bg-#f1f3f6">
        <main-layout />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { ref, computed } from 'vue'
import { HeaderLayout, AsideLayout, MainLayout } from "./components";


const heightRef = ref(null)
const { height } = useElementSize(heightRef)

const contentHeightStr = computed(() => {
  return `calc(100% - ${height.value}px)`
})
</script>
