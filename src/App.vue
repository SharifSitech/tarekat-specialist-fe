<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarView from '@/components/layout/SideBarView.vue'
</script>

<template>

  <div class="flex">
    <RouterView />
    <SideBarView />
  </div>
</template>

<style scoped>
</style>
