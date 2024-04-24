<script setup>
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
  showPagination: {
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

const selectedRow = ref();
const dataList = ref(props.data);
const first = ref(0);

watch(
    () => props.data,
    (data) => {
      dataList.value = data
    }
)
</script>

<template>
  <div class="card">
    <PrimeDataTable v-model:selection="selectedRow" :value="dataList" dataKey="id" tableStyle="min-width: 50rem"
                    :paginator="false">
      <template v-if="showSelectMode">
        <PrimeColumn selectionMode="multiple" headerStyle="width: 3rem"></PrimeColumn>
      </template>

      <PrimeColumn
          v-for="header in headers"
          :key="header.title"
          :field="header.field"
          :header="header.title">
        <template v-if="header.component" #body="{data}">
          <component :is="header.component" v-bind="{data}"/>
        </template>
      </PrimeColumn>
      <template v-if="showAction && (tableActions && tableActions.length > 0)">
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

      <template v-if="showPagination" #footer>
        <PrimePaginator
            v-model:first="first"
            :rows="9"
            :totalRecords="9"
            current-page-report-template="الصفحة {first} من {last}"
            template="PrevPageLink CurrentPageReport NextPageLink">
          <template #nextpagelinkicon>
            <div class="flex items-center justify-center py-4 px-2">
              <p>التالي</p>
              <i class="pi pi-angle-left ms-2"></i>
            </div>
            <!--            <button :disabled="currentPage === lastPage" class="p-paginator-next p-link">-->
            <!--            </button>-->
          </template>
          <template #prevpagelinkicon>
            <div class="flex items-center justify-center py-4 px-2">
              <i class="pi pi-angle-right me-2"></i>
              <p>السابق</p>
            </div>
          </template>
        </PrimePaginator>
      </template>
    </PrimeDataTable>
  </div>
</template>
