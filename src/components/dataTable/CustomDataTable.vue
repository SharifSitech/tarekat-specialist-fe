<script setup>
import {ref, onMounted} from 'vue';
import {ProductService} from '@/service/ProductService.ts';

onMounted(() => {
  ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const selectedProduct = ref();

const statuses = ref([
  {label: 'جديد', value: 1},
  {label: 'قيد التنفيذ', value: 2},
]);

const getStatusText = (status) => {
  return statuses?.value?.find(x => x.value === status)?.label
}

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
  <div class="card">
    <PrimeDataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
      <PrimeColumn selectionMode="multiple" headerStyle="width: 3rem"></PrimeColumn>
      <PrimeColumn field="orderNumber" header="رقم الطلب"></PrimeColumn>
      <PrimeColumn field="name" header="إسم المتوفي"></PrimeColumn>
      <PrimeColumn field="orderType" header="نوع الطلب"></PrimeColumn>
      <PrimeColumn field="status" header="حالة الطلب">
        <template #body="{data}">
          <p :class="`${getStatusLabel(data?.status)} border border-solid flex items-center text-xs font-bold rounded-full px-[10px] py-[6px] w-fit h-[25px]`">
            {{getStatusText(data?.status)}}
          </p>
        </template>
      </PrimeColumn>
      <PrimeColumn field="otherOrders" header="طلبات فرعية"></PrimeColumn>
      <PrimeColumn field="step" header="المرحلة"></PrimeColumn>
      <PrimeColumn style="width: 10%; min-width: 8rem" bodyStyle="text-align:center">
        <template #body="{ data, frozenRow, index }">
          <div class="flex items-center justify-center rounded-[8px] w-[35px] h-[35px] bg-g-5 p-[6px]">
            <i class="pi pi-arrow-left text-g-2 font-bold cursor-pointer"></i>
          </div>
        </template>
      </PrimeColumn>
    </PrimeDataTable>
  </div>
</template>
