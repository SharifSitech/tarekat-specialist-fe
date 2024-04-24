<script setup>
import {ref, watch} from "vue";

const visible = ref(false);
const props = defineProps({
  showDialog: {
    type: Boolean,
    default() {
      return false;
    }
  },
  headerTitle: {
    type: String
  },
  className: {
    type: String,
    default() {
      return "";
    }
  },
  onClose: {
    type: Function
  }
})

watch(() => props.showDialog, (data) => (visible.value = data))

</script>

<template>
  <div class="card flex justify-content-center">
    <PrimeDialog v-model:visible="visible" modal :header="headerTitle" :style="{ width: '25rem' }">
      <slot name="content"></slot>
      <template #footer>
        <div class="flex gap-2 w-full">
          <PrimeButton label="الاتصال" severity="primary" @click="onClose"/>
          <PrimeButton label="إالغاد" outlined severity="secondary" @click="onClose"/>
        </div>
      </template>
    </PrimeDialog>
  </div>
</template>

