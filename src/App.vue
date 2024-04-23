<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarView from '@/components/layout/SideBarView.vue'
</script>

<template>

  <div class="flex !font-Almarai">
    <SideBarView />
    <div class="bg-g-5 flex-1 p-10 h-[100vh]">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
