<script setup>
const props = defineProps({
  number: [String, Number]
});
</script>

<template>
  <div class="request-card flex me-3 mt-2 items-center gap-6 rounded-[8px] bg-white p-[13px] w-[236px]">
    <div class="flex w-full">
      <slot name="icon-with-title"></slot>
    </div>

    <p class="text-sm text-black self-end">{{ props.number }}</p>
  </div>
</template>

<style scoped>
.request-card{
  box-shadow: 0px 1px 7px 0px rgba(31, 33, 32, 0.18);
}
</style>