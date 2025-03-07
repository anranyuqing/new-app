<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :render-label="renderMenuLabel"
        :render-icon="renderMenuIcon"
        :expand-icon="expandIcon"
      />
    </n-layout-sider>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = ref([
  {
    label: "工作台",
    children: [],
    key: "workbench",
  },
  {
    label: "3D可视化",
    children: [],
    key: "3d",
  },
  {
    label: "文档中心",
    children: [],
    key: "file",
    icon:BookIcon,
  },
]);
</script>
