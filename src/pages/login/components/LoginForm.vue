<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="LoginFormRules"
    :show-label="false"
  >
    <n-grid>
      <n-form-item-gi path="username" label="用户名" :span="24">
        <n-input v-model:value="model.username" placeholder="请输入用户名" />
      </n-form-item-gi>

      <n-form-item-gi path="password" label="用户名" :span="24">
        <n-input
          v-model:value="model.password"
          :type="passwordType"
          placeholder="请输入密码"
        >
          <template #suffix>
            <Icon :icon="showPassIcon" class="cursor-pointer" @click="handleChange" size="20"/>
          </template>
        </n-input>
      </n-form-item-gi>
    </n-grid>
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

const passwordType = computed(() =>isShowPassword.value ? "text" : "password")

const model = ref({
  username: "",
  password: "",
});

function handleChange(){
    isShowPassword.value = !isShowPassword.value;
}
</script>
