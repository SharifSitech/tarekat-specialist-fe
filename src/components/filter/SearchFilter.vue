<script setup>
import FilterIcon from "@/components/icons/FilterIcon.vue";
import SearchInput from "@/components/searchInput/SearchInput.vue";

</script>

<template>
  <div class="flex">
    <div
        class="w-[42px] h-[42px] flex bg-white items-center justify-center rounded-lg border-solid border-g-4 p-[12px]">
      <FilterIcon/>
    </div>

    <SearchInput class="mx-4"/>
  </div>
</template>
