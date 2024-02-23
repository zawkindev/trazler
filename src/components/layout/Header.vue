<script setup>
import CButton from "@/components/base/CButton.vue"

const headerData = ["destinations", "food", "well being", "sport", "family", "lifestyle"]
</script>

<template>
  <div class="flex flex-row w-full justify-between items-center text-white">
    <img alt="logo" src="@/assets/images/logo.svg" class="h-auto w-64 flex-shrink-0" />
    <div class="flex gap-10">
      <p v-for="item in headerData" :key="item" class="uppercase hover:cursor-pointer">
        {{ item }}
      </p>
    </div>
    <div class="flex">
      <CButton>
        <img alt="search icon" src="@/assets/images/icons/search.svg" class="h-auto w-5" />
      </CButton>

      <CButton variant="black">
        <p class="uppercase">get your $120 navruz gift</p>
      </CButton>
    </div>
  </div>
</template>
