<script setup>
import {ref} from "vue";

const selectedCity = ref();
const cities = ref([
  {name: 'الإفصاح عن مولود', code: '1'},
  {name: 'الإفصاح عن دين', code: '2'},
  {name: 'طلب شاهد', code: '3'},
]);
</script>

<template>
  <PrimeDropdown
      v-model="selectedCity"
      :options="cities"
      optionLabel="name"
      placeholder="اجراءات"
      class="w-14rem"
  />
</template>

<style scoped>

</style>