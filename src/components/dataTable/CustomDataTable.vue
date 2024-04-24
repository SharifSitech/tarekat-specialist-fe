<script setup>
import {useRouter} from 'vue-router';
import {ref, watch} from 'vue';

const props = defineProps({
  headers: {
    type: Array,
    default() {
      return [];
    }
  },
  data: {
    type: Array,
    default() {
      return [];
    }
  },
  tableActions: {
    type: Array,
    default() {
      return [];
    }
  },
  showSelectMode: {
    type: Boolean,
    default() {
      return true;
    }
  },
  showAction: {
    type: Boolean,
    default() {
      return true;
    }
  }
})

const router = useRouter();
const selectedRow = ref();
const dataList = ref(props.data);

watch(
    () => props.data,
    (data) => {
      dataList.value = data
    }
)

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
    <PrimeDataTable v-model:selection="selectedRow" :value="dataList" dataKey="id" tableStyle="min-width: 50rem">
      <template v-if="showSelectMode">
        <PrimeColumn selectionMode="multiple" headerStyle="width: 3rem"></PrimeColumn>
      </template>

      <PrimeColumn
          v-for="header in headers"
          :key="header.title"
          :field="header.field"
          :header="header.title">
      </PrimeColumn>

      <!--        <template #body="{data}">-->
      <!--          <p :class="`${getStatusLabel(data?.status)} border border-solid flex items-center text-xs font-bold rounded-full px-[10px] py-[6px] w-fit h-[25px]`">-->
      <!--            {{ getStatusText(data?.status) }}-->
      <!--          </p>-->
      <!--        </template>-->
      <!--      </PrimeColumn>-->

      <template v-if="showAction && tableActions.length > 0">
        <PrimeColumn
            v-for="(action,index) in tableActions"
            :key="index"
            style="width: 10%; min-width: 8rem"
            bodyStyle="text-align:center">
          <template #body="{ data, frozenRow, index }">
            <div class="flex items-center justify-center rounded-lg w-[35px] h-[35px] bg-g-5 p-[6px]"
                 @click="action.event(data)">
              <template v-if="action.icon">
                <component :is="action.icon" v-bind="action.props" class="text-g-2 font-bold cursor-pointer"/>
              </template>
              <template v-else>
                <i class="pi pi-arrow-left text-g-2 font-bold cursor-pointer"></i>
              </template>
            </div>
          </template>
        </PrimeColumn>
      </template>
    </PrimeDataTable>
  </div>
</template>
