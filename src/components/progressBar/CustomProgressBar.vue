<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  progress: {
    type: [Number, String],
    default() {
      return 0;
    }
  }
})
const progressNum = ref(props.progress)

watch(
    () => props.progress,
    (data) => {
      progressNum.value = data
    }
)
</script>

<template>
  <div class="flex h-1 rounded-lg bg-g-4 mt-2 min-w-[200px]">
    <p :class="`rounded-lg bg-g-2`" :style="{width: progressNum + `%`}"></p>
  </div>
</template>

