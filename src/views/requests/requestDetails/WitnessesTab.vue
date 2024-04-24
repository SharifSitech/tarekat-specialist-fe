<script setup>
import {onMounted, ref} from "vue";
import {ProductService} from "@/service/ProductService.ts";
import SearchFilter from "@/components/filter/SearchFilter.vue";
import CustomDataTable from "@/components/dataTable/CustomDataTable.vue";
import PhoneCall from "@/components/icons/PhoneCall.vue";

const tableHeaders = [
  {
    title: "إسم الشاهد",
    field: "name"
  },
  {
    title: "صلة القرابة",
    field: "relationShip"
  },
  {
    title: "نوع الهوية",
    field: "nationalType"
  },
  {
    title: "رقم الهوية",
    field: "nationalId"
  },
  {
    title: "تاريخ الميلاد",
    field: "dob"
  },
  {
    title: "رقم الجوال",
    field: "phoneNumber"
  },
];

onMounted(() => {
  ProductService.getRequestWitnessesData().then((data) => dataList.value = data);
});

const dataList = ref();

const tableActions = [
  {
    icon: PhoneCall,
    event: (data) => alert(data.name)
  }
]
</script>

<template>
  <SearchFilter class="mt-4 mb-8"/>
  <CustomDataTable :data="dataList" :headers="tableHeaders" :tableActions="tableActions" :show-select-mode="false"/>
</template>

