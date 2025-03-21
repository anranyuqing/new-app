<template>
  <div class="wh-full grid grid-cols-6">
    <div class="login-bg w-full col-span-4"></div>
    <div class="col-span-2 bg-#fff relative z-10 shadow-card flex-center">
      <div class="w-70%">
        <BoxTitle class="mb-5" />
        <LoginForm class="mb-5" />
        <ThirdParty class="mb-10" />
        <div class="flex-center">
          <span>还没有账号？</span>
          <span class="c-primary cursor-pointer">创建账号</span>
        </div>
      </div>
      <ToolBox class=" absolute top-10 right-1" />

    </div>
  </div>
</template>

<script setup lang="ts">
import { BoxTitle, LoginForm, ThirdParty, ToolBox } from "./components";
</script>

<style scoped>
.login-bg {
  background: linear-gradient(154deg,
      #07070915 30%,
      var(--color-primary) 48%,
      #07070915 64%);
  filter: blur(100px);
  opacity: 0.6;
}
</style>
