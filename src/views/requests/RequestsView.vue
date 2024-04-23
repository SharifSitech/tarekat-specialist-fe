<script setup>
import {ref} from "vue";
import FileUpIcon from "@/components/icons/FileUpIcon.vue";
import RequestsCard from "@/components/requests/RequestsCard.vue";
import FileEyeIcon from "@/components/icons/FileEyeIcon.vue";
import FileCheckIcon from "@/components/icons/FileCheckIcon.vue";
import FileXIcon from "@/components/icons/FileXIcon.vue";

const selectedCity = ref();
const cities = ref([
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
]);
</script>

<template>
  <div class="requests">
    <p class="flex text-[22px] text-[#A0A3A2] leading-[130%] font-bold">الطلبات</p>
    <div class="flex">
      <RequestsCard class="justify-between" number="3">
        <template v-slot:icon-with-title>
          <FileUpIcon class="me-1"/>
          <p class="text-sm text-[#1F2120]">طلبات جديدة</p>
        </template>
      </RequestsCard>

      <RequestsCard class="justify-between" number="6">
        <template v-slot:icon-with-title>
          <FileEyeIcon class="me-1"/>
          <p class="text-sm text-[#1F2120]">طلبات قيد التنفيذ</p>
        </template>
      </RequestsCard>

      <RequestsCard class="justify-between" number="10">
        <template v-slot:icon-with-title>
          <FileCheckIcon class="me-1"/>
          <p class="text-sm text-[#1F2120]">طلبات منتهية</p>
        </template>
      </RequestsCard>

      <RequestsCard class="justify-between" number="4">
        <template v-slot:icon-with-title>
          <FileXIcon class="me-1"/>
          <p class="text-sm text-[#1F2120]">طلبات ملغاة</p>
        </template>
      </RequestsCard>
      <Button label="Submit" />
      <!--            <Dropdown-->
      <!--                v-model="selectedCity"-->
      <!--                :options="[]"-->
      <!--                optionLabel="name"-->
      <!--                placeholder="الاجراءات"-->
      <!--                class="w-full"/>-->
    </div>
  </div>
</template>

<style scoped>


</style>
