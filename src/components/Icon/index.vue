<template>
  <svg-icon :icon="icon" v-if="isLocal" :style="defStyle" />
  <Icon :icon="icon" v-else :style="defStyle"  />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  isLocal: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 14
  },
})

const defStyle = computed(() => ({
  color: props.color,
  fontSize: `${props.size}px`
}))

</script>
