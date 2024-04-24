<script setup>
import {onMounted, ref} from "vue";
import SearchFilter from "@/components/filter/SearchFilter.vue";
import CustomDataTable from "@/components/dataTable/CustomDataTable.vue";
import {ProductService} from "@/service/ProductService.ts";

const tableHeaders = [
  {
    title: "إسم الوريث",
    field: "name"
  },
  {
    title: "صلة القرابة",
    field: "relationShip"
  },
  {
    title: "حالة الوارث",
    field: "heirStatus"
  },
  {
    title: "الجنسية",
    field: "nationality"
  },
  {
    title: "نوع الهوية",
    field: "nationalType"
  },
  {
    title: "رقم الهوية",
    field: "nationalId"
  }
];

onMounted(() => {
  ProductService.getRequestHeirdomData().then((data) => dataList.value = data);
});

const dataList = ref();

</script>

<template>
  <SearchFilter class="mt-4 mb-8"/>
  <CustomDataTable :data="dataList" :headers="tableHeaders" :show-select-mode="false" :show-action="false"/>
  <div class="flex mt-6 gap-4">
    <PrimeButton label="الموافقة دون تعديل" severity="primary" size="small"/>
    <PrimeButton label="رفض الطلب" severity="danger" outlined size="small"/>
  </div>
</template>
