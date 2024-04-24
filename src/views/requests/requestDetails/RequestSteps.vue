<script setup>
import {onMounted, ref} from "vue";
import CustomAccordion from "@/components/accordion/CustomAccordion.vue";
import CustomDataTable from "@/components/dataTable/CustomDataTable.vue";
import FileEyeIcon from "@/components/icons/FileEyeIcon.vue";
import MinusCircleContainedIcon from "@/components/icons/MinusCircleContainedIcon.vue";
import ClockIcon from "@/components/icons/ClockIcon.vue";
import {ProductService} from "@/service/ProductService.ts";

onMounted(() => {
  ProductService.getRequestStepsData().then((data) => (dataList.value = data));
});

const dataList = ref();

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
    title: "حالة الطلب",
    field: "status"
  },
  {
    title: "",
    field: ""
  }
]
const tableActions = [
  {
    event: (data) => console.log(data.name)
  }
]
const tabs = [
  {
    title: "الموافقة على معلومات الورثة",
    component: CustomDataTable,
    props: {data: dataList, headers: tableHeaders, showSelectMode: false, tableActions: tableActions}, // Props for the component
    header: {
      title: "بحاجة لمراجعة",
      icon: FileEyeIcon,
      titleClass: "text-dialog-orange",
      class: "border border-solid border-dialog-light-orange-1 bg-dialog-light-orange-2"
    }
  },
  {
    title: "افادات عن التركة",
    disabled: true,
    content: "افادات عن التركة",
    header: {
      title: "لم تبدأ بعد",
      icon: MinusCircleContainedIcon,
      class: "border border-solid border-g-3 bg-g-4"
    }
  },
  {
    title: "اصدار الوثيقة النهائية",
    disabled: true,
    content: "اصدار الوثيقة النهائية",
    header: {
      title: "قريبا",
      icon: ClockIcon,
      class: "border border-solid border-g-3 bg-g-4"
    }
  },
  {
    title: "اعداد التركة",
    disabled: true,
    content: "اعداد التركة",
    header: {
      title: "قريبا",
      icon: ClockIcon,
      class: "border border-solid border-g-3 bg-g-4"
    }
  },
  {
    title: "قسمة التركة",
    disabled: true,
    content: "قسمة التركة",
    header: {
      title: "قريبا",
      icon: ClockIcon,
      class: "border-g-3 bg-g-4"
    }
  },
];

</script>

<template>
  <div>
    <CustomAccordion :tabs="tabs"/>
  </div>
</template>

