<script setup>
defineProps({
  tabs: {
    type: Array,
    default() {
      return []
    }
  }
});

</script>

<template>
  <div class="card">
    <PrimeAccordion :multiple="true" :activeIndex="[0]">
      <PrimeAccordionTab v-for="tab in tabs" :key="tab.title" :disabled="tab.disabled">
        <template #header>
          <div class="flex items-center justify-between gap-2 w-full">
            <span class="font-Almarai text-black text-base font-bold leading-[150%] p-2 ms-2">{{ tab.title }}</span>

            <template v-if="tab.header">
              <div class="flex items-center">
                <p :class="`text-xs font-bold font-Almarai ${tab.header.titleClass || 'text-g-2'}`">{{ tab.header.title }}</p>
                <div
                    :class="`flex items-center justify-center p-[6px] rounded-full ms-3 font-Almarai ${tab.header.class || ''}`">
                  <component :is="tab.header.icon" v-bind="tab.header.props"/>
                </div>
              </div>
            </template>
          </div>
        </template>

        <template v-if="tab.content">
          <p class="m-0">{{ tab.content }}</p>
        </template>
        <template v-else>
          <component :is="tab.component" v-bind="tab.props"/>
        </template>
      </PrimeAccordionTab>
    </PrimeAccordion>
  </div>
</template>

