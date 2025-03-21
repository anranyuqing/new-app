<template>
  <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed" show-trigger
    @collapse="collapsed = true" @expand="collapsed = false" class="h-full">
    <n-menu :collapsed="collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
      :render-icon="renderIcon" @update:value="handleClick" />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref, h } from "vue";
import Icon from '@/components/Icon/index.vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const collapsed = ref(false);

function renderIcon({ iconName }) {
  return h(Icon, { icon: iconName });
}

const menuOptions = ref([
  {
    label: "首页",
    key: "dashboard",
    iconName: 'line-md:document-report',
    children: [{
      label: "工作台",
      key: "workbench",
      iconName: 'line-md:document-report',
      path: '/workbench'

    },
      {
        label: "数字孪生",
        key: "3d",
        iconName: 'iconoir:select-face-3d',
        path: '/three'
      },],
  },


]);

function handleClick(key: string, node: any) {
  if (!node.path) {
    console.warn('当前菜单未配置路由')
    return
  }
  router.push(node.path)
}
</script>
