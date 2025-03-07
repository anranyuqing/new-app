<template>
  <div class="flex flex-col w-full h-full">
    <header-layout />
    <div class="flex wh-full">
      <aside-layout />

      <main-layout/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HeaderLayout, AsideLayout ,MainLayout} from "./components";
</script>
