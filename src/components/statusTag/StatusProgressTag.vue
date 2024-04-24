<script setup>
import {ref, watch} from "vue";

const props = defineProps(['data'])

const dataRecord = ref(props.data);

watch(
    () => props.data,
    (data) => {
      dataRecord.value = data
    }
)

const statuses = ref([
  {label: 'جديد', value: 1},
  {label: 'قيد التنفيذ', value: 2},
]);

const getStatusText = (status) => {
  return statuses?.value?.find(x => x.value === status)?.label
};

const getStatusLabel = (status) => {
  switch (status) {
    case 1:
      return 'bg-dialog-light-blue-2 text-dialog-blue border-dialog-light-blue-1';
    case 2:
      return 'bg-dialog-light-orange-2 text-dialog-orange border-dialog-light-orange-1';
    default:
      return null;
  }
};
</script>

<template>
  <p :class="`${getStatusLabel(data?.status)} border border-solid flex items-center text-xs font-bold rounded-full px-[10px] py-[6px] w-fit h-[25px]`">
    {{ getStatusText(data?.status) }}
  </p>
</template>
