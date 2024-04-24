<script setup>
import CustomProgressBar from "@/components/progressBar/CustomProgressBar.vue";
import StatusProgressTag from "@/components/statusTag/StatusProgressTag.vue";

defineProps(['data'])

</script>

<template>
  <StatusProgressTag :data="data"/>
  <CustomProgressBar :progress="data.progress"/>
</template>
