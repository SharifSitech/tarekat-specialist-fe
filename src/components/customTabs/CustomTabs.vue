<script setup>
const props = defineProps({
  tabsList: {
    type: Array,
    default() {
      return []
    }
  }
})

</script>

<template>
  <PrimeTabView :scrollable="true">
    <PrimeTabPanel v-for="tab in props.tabsList" :key="tab.title" :header="tab.title" :disabled="tab.disabled">
      <template v-if="tab.content">
        <p class="m-0">{{ tab.content }}</p>
      </template>
      <template v-else>
        <component :is="tab.component"/>
      </template>
    </PrimeTabPanel>
  </PrimeTabView>
</template>