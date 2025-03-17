<template>
  <div class="cursor-pointer flex-center">
    <icon icon="line-md:sun-rising-filled-loop" class="shrink-0"  :size="20" v-if="themeStore.isDark"
      @click="(e) => toggleTheme(e, 'light')" color="#fff" />
    <icon icon="line-md:moon-rising-filled-loop" class="shrink-0" :size="20" v-else @click="(e) => toggleTheme(e, 'dark')" />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import { nextTick, ref } from 'vue'
const themeStore = useThemeStore()
async function toggleTheme(event: MouseEvent, type: 'dark' | 'light') {
  document.documentElement.setAttribute('class', type)
  /**判断浏览器是否支持平滑过渡和用户偏好设置 */
  const isAppearanceTransition =
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!isAppearanceTransition || !event) {
    themeStore.setTheme(type)
    return
  }
  const x = event.clientX;
  const y = event.clientY;

  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  const transition = document.startViewTransition(async () => {
    themeStore.setTheme(type)
    await nextTick();
  });
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: themeStore.isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 450,
        easing: 'ease-in',
        pseudoElement: themeStore.isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>
