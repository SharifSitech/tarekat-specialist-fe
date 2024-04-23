<script setup lang="ts">

import LogoIcon from '@/components/icons/LogoIcon.vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import NotificationIcon from '@/components/icons/NotificationIcon.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import MOJIcon from '@/components/icons/MOJIcon.vue'
import VisionIcon from '@/components/icons/VisionIcon.vue'
import RequestsIcon from '@/components/icons/RequestsIcon.vue'
</script>

<template>
  <div class="bg-white h-[90vh] w-[230px] p-4">
    <div class="mb-2 pb-2">
      <LogoIcon />
    </div>
    <div class="h-[1px] bg-g-4"></div>
    <div class="flex flex-col justify-between h-full">
      <div>
        <RouterLink to="/home" active-class="active">
          <div class="item flex items-center gap-3 p-2 mt-1 hover:bg-light-5 rounded-lg">
            <HomeIcon />
            <div class="text-black font-bold">الرئيسية</div>
          </div>
        </RouterLink>
        <RouterLink to="/">
          <div class="item flex items-center gap-3 p-2 mt-1 hover:bg-light-5 rounded-lg">
            <RequestsIcon />
            <div class="text-black font-bold">الطلبات</div>
          </div>
        </RouterLink>
      </div>
      <div class="">
        <div class="h-[1px] bg-g-4"></div>
        <RouterLink to="/notifications" active-class="active">
          <div class="item flex items-center gap-3 p-2 mt-1 hover:bg-light-5 rounded-lg">
            <NotificationIcon />
            <div class="text-black font-bold">الإشعارات</div>
          </div>
        </RouterLink>
        <RouterLink to="/settings">
          <div class="item flex items-center gap-3 p-2 mt-1 hover:bg-light-5 rounded-lg">
            <SettingsIcon />
            <div class="text-black font-bold">الإعدادات</div>
          </div>
        </RouterLink>
        <div class="h-[1px] bg-g-4 my-4"></div>
        <div class="flex justify-between">
          <MOJIcon />
          <VisionIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.router-link-exact-active .item {
  background: #E5F3F2 !important;
}
</style>
