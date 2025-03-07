<template>
    
  <Icon
    :icon="icon"
    style="width: 30px; height: 30px"
  ></Icon>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
    icon: {
        type:String,
        required: true
    }
 
})
</script>
