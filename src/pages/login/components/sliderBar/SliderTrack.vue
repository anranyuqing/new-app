<template>
  <div
  ref="sliderTrackRef"
    class="w-full relative bg-#e5e7eb h-10 rounded-1 b-1 border-#e5e7eb b-solid"
    @mouseleave="handleDragOver"
    @mousemove="handleDragMove"
    @mouseup="handleDragOver"
    @touchend="handleDragOver"
    @touchmove="handleDragMove"
  >
    <div
      class="cursor-move h-full w-10 absolute transition-all"
      :style="{ left: `${sliderLeft}px` }"
      @mousedown="handleDragStart"
      @touchstart="handleDragStart"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const sliderLeft = ref(0);

const sliderTrackRef = ref()
/**是否允许拖动 */
const isDraggable = ref(false);

const x = ref(0);

function handleDown(e: MouseEvent) {
  x.value = e.clientX;
  isDraggable.value = true;
}

function handleDragStart() {
  isDraggable.value = true;
}

function handleDragMove(e: any) {
  if (isDraggable.value) {
    sliderLeft.value = e.clientX - e.pageX;
  }
}

function handleDragOver() {
  isDraggable.value = false;
}

function handleDragMoving() {}
</script>
