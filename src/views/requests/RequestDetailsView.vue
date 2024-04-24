<script setup>
import {useRouter} from "vue-router";
import CustomTabs from "@/components/customTabs/CustomTabs.vue";
import RequestSteps from "@/views/requests/requestDetails/RequestSteps.vue";
import HeirdomTab from "@/views/requests/requestDetails/HeirdomTab.vue";
import WitnessesTab from "@/views/requests/requestDetails/WitnessesTab.vue";

const router = useRouter();

const scrollableTabs = [
  {
    title:"المراحل",
    component: RequestSteps
  },
  {
    title:"الحركات",
    disabled: true,
    component: WitnessesTab
  },
  {
    title:"الوَرَثَة",
    component: HeirdomTab
  },
  {
    title:"التركة",
    disabled: true,
    component: WitnessesTab
  },
  {
    title:"الشهود",
    component: WitnessesTab
  },
  {
    title:"بيانات المتوفي",
    disabled: true,
    component: WitnessesTab
  }
]
</script>

<template>
  <div class="details !font-Almarai">
    <div class="flex">
      <div class="flex items-center justify-center rounded-lg w-[35px] h-[35px] bg-g-4 p-[6px] me-3"
           @click="router.back()">
        <i class="pi pi-arrow-right text-g-1 font-bold cursor-pointer"></i>
      </div>
      <p class="flex mb-4 text-[22px] text-g-2 leading-[130%] font-bold">تفاصيل الطلب</p>
    </div>
    <div class="my-4 details-card flex items-center justify-around bg-white py-[16px] px-[24px] rounded-lg">
      <div class="flex flex-col">
        <p class="text-g-1 text-xs font-bold mb-1">رقم الطلب</p>
        <p>1234040</p>
      </div>
      <div class="flex">
        <div class="me-4 bg-g-4 w-[1px] h-[55px]"/>
        <div class="flex flex-col">
          <p class="text-g-1 text-xs font-bold mb-1">تاريخ الطلب</p>
          <p>1445/01/30 هـ</p>
        </div>
      </div>
      <div class="flex">
        <div class="me-4 bg-g-4 w-[1px] h-[55px]"/>
        <div class="flex flex-col">
          <p class="text-g-1 text-xs font-bold mb-1">تقدم الطلب</p>
          <p class="bg-dialog-light-orange-2 text-dialog-orange border border-solid border-dialog-light-orange-1 flex items-center text-xs font-bold rounded-full px-[10px] py-[6px] w-fit h-[25px]">
            قيد التنفيذ
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="me-4 bg-g-4 w-[1px] h-[55px]"/>
        <div class="flex flex-col">
          <p class="text-g-1 text-xs font-bold mb-1">إسم المورث</p>
          <p>احمد عارف عبد العزيز الخالدي</p>
        </div>
      </div>
      <div class="flex">
        <div class="me-4 bg-g-4 w-[1px] h-[55px]"/>
        <div class="flex flex-col">
          <p class="text-g-1 text-xs font-bold mb-1">معلومات مقدم الطلب</p>
          <p>احمد عارف عبد العزيز الخالدي</p>
        </div>
      </div>
    </div>
    <div>
      <CustomTabs :tabsList="scrollableTabs"/>
    </div>
  </div>
</template>

<style scoped>
.details-card {
  box-shadow: 0px 0px 26px 0px rgba(31, 33, 32, 0.08);
}
</style>
