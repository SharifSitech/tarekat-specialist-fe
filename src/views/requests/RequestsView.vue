<script setup>
import FileUpIcon from "@/components/icons/FileUpIcon.vue";
import RequestsCard from "@/components/requests/RequestsCard.vue";
import FileEyeIcon from "@/components/icons/FileEyeIcon.vue";
import FileCheckIcon from "@/components/icons/FileCheckIcon.vue";
import FileXIcon from "@/components/icons/FileXIcon.vue";
import DropDownList from "@/components/dropDown/DropDownList.vue";
import CustomDataTable from "@/components/dataTable/CustomDataTable.vue";
import SearchInput from "@/components/searchInput/SearchInput.vue";
import FilterIcon from "@/components/icons/FilterIcon.vue";

</script>

<template>
  <div class="requests">
    <p class="flex text-[22px] text-[#A0A3A2] leading-[130%] font-bold">الطلبات</p>
    <div class="flex justify-between">
      <div class="flex">
        <div
            class="w-[42px] h-[42px] flex bg-white items-center justify-center rounded-[8px] border-solid border-g-4 p-[12px]">
          <FilterIcon/>
        </div>

        <SearchInput class="mx-4"/>
      </div>

      <DropDownList/>
    </div>
    <div class="flex my-6">
      <RequestsCard class="justify-between" number="3">
        <template v-slot:icon-with-title>
          <FileUpIcon class="me-1"/>
          <p class="text-sm text-black">طلبات جديدة</p>
        </template>
      </RequestsCard>

      <RequestsCard class="justify-between" number="6">
        <template v-slot:icon-with-title>
          <FileEyeIcon class="me-1"/>
          <p class="text-sm text-black">طلبات قيد التنفيذ</p>
        </template>
      </RequestsCard>

      <RequestsCard class="justify-between" number="10">
        <template v-slot:icon-with-title>
          <FileCheckIcon class="me-1"/>
          <p class="text-sm text-black">طلبات منتهية</p>
        </template>
      </RequestsCard>

      <RequestsCard class="justify-between" number="4">
        <template v-slot:icon-with-title>
          <FileXIcon class="me-1"/>
          <p class="text-sm text-black">طلبات ملغاة</p>
        </template>
      </RequestsCard>
    </div>

    <CustomDataTable />
  </div>
</template>

<style scoped>


</style>
