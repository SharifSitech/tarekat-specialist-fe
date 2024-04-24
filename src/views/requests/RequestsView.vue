<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {ProductService} from "@/service/ProductService.ts";
import FileUpIcon from "@/components/icons/FileUpIcon.vue";
import RequestsCard from "@/components/requests/RequestsCard.vue";
import FileEyeIcon from "@/components/icons/FileEyeIcon.vue";
import FileCheckIcon from "@/components/icons/FileCheckIcon.vue";
import FileXIcon from "@/components/icons/FileXIcon.vue";
import DropDownList from "@/components/dropDown/DropDownList.vue";
import SearchFilter from "@/components/filter/SearchFilter.vue";
import CustomDataTable from "@/components/dataTable/CustomDataTable.vue";
import RequestStatus from "@/views/requests/RequestStatus.vue";

onMounted(() => {
  ProductService.getRequestDataList().then((data) => (dataList.value = data));
});
const dataList = ref();
const router = useRouter();

const tableHeaders = [
  {
    title: "رقم الطلب",
    field: "orderNumber"
  },
  {
    title: "نوع الطلب",
    field: "orderType"
  },
  {
    title: "إسم المورث",
    field: "name"
  },
  {
    title: "حالة الطلب",
    field: "status",
    component: RequestStatus
  },
  {
    title: "آخر حركة",
    field: "lastAction"
  }
]

const navigateToAbout = (id) => {
  router.push(`/requests/request-details/${id}`);
};

const tableActions = [
  {
    event: (data) => navigateToAbout(data.id)
  }
]
</script>

<template>
  <div class="requests">
    <p class="flex mb-4 text-[22px] text-g-2 leading-[130%] font-bold">الطلبات</p>
    <div class="flex justify-between">
      <SearchFilter/>
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

    <CustomDataTable :data="dataList" :headers="tableHeaders" :tableActions="tableActions"/>
  </div>
</template>

<style scoped>


</style>
