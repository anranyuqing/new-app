<template>
  <svg aria-hidden="true" width="1em" height="1em" v-bind="$attrs" >
    <use :xlink:href="symbolId" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
})

const symbolId = computed(() => {
  const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env

  const defaultLocalIcon = 'no-icon'

  const icon = props.icon || defaultLocalIcon

  return `#${prefix}-${icon}`
})
</script>
