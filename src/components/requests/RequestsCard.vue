<script setup>
const props = defineProps({
  number: [String, Number]
});
</script>

<template>
  <div class="flex me-3 mt-2 items-center gap-6 rounded-[8px] bg-[#FFF] p-[13px] w-[236px]">
    <div class="flex w-full">
      <slot name="icon-with-title"></slot>
    </div>

    <p class="text-sm text-[#1F2120] self-end">{{ props.number }}</p>
  </div>
</template>

<style scoped>

</style>