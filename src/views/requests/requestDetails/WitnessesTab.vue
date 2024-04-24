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
const selectedWitness = ref();
const showDialog = ref(false);

const changeShowDialog = (data) => {
  showDialog.value = !showDialog.value;
  selectedWitness.value = {
    name: data.name,
    phoneNumber: data.phoneNumber
  }
}

const tableActions = [
  {
    icon: PhoneCall,
    event: (data) => changeShowDialog(data)
  }
]
</script>

<template>
  <SearchFilter class="mt-4 mb-8"/>
  <CustomDataTable :data="dataList" :headers="tableHeaders" :tableActions="tableActions" :show-select-mode="false"/>

  <PrimeDialog v-model:visible="showDialog" modal header="هل تريد الاتصال بالشاهد" :style="{ width: '25rem' }">
    <div class="flex flex-col h-full w-full">
      <p>{{ selectedWitness.name }}</p>
      <p>{{ selectedWitness.phoneNumber }}</p>
    </div>
    <template #footer>
      <div class="flex gap-2 w-full">
        <PrimeButton label="الاتصال" severity="primary" @click="changeShowDialog"/>
        <PrimeButton label="إالغاد" outlined severity="secondary" @click="changeShowDialog"/>
      </div>
    </template>
  </PrimeDialog>
</template>

