<template>
  <n-form ref="formRef" :model="model" :rules="LoginFormRules" :show-label="false">
    <n-grid>
      <n-form-item-gi path="username" :span="24">
        <n-input v-model:value="model.username" placeholder="请输入用户名" size="large" />
      </n-form-item-gi>

      <n-form-item-gi path="password" :span="24">
        <n-input v-model:value="model.password" :type="passwordType" placeholder="请输入密码" size="large">
          <template #suffix>
            <Icon :icon="showPassIcon" class="cursor-pointer" @click="handleChange" size="20" />
          </template>
        </n-input>
      </n-form-item-gi>

      <n-form-item-gi path="password" :span="24">
        <div class="grid grid-cols-3 gap-4 w-full ">
          <n-input v-model:value="model.code" :type="passwordType" placeholder="请输入验证码" class="block col-span-2"
            size="large">
          </n-input>
          <div class="col-span-1 bg-red rounded-1 flex-center">yzm</div>
        </div>
      </n-form-item-gi>
    </n-grid>


    <div class="flex justify-between mb-4">
      <n-checkbox>记住账号</n-checkbox>
      <div class="c-#0081ff">忘记密码？</div>
    </div>

    <div class="flex justify-center w-full">
      <n-button type="primary" @click="handleLogin" class="w-full">登录</n-button>
    </div>
  </n-form>

</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { LoginFormRules } from "../constant";

const formRef = ref(null);

const isShowPassword = ref(false);

const showPassIcon = computed(() =>
  isShowPassword.value ? "basil:eye-outline" : "basil:eye-closed-outline"
);

const passwordType = computed(() => isShowPassword.value ? "text" : "password")

const model = ref({
  username: "",
  password: "",
});

function handleChange() {
  isShowPassword.value = !isShowPassword.value;
}

function handleLogin() {

}
</script>
