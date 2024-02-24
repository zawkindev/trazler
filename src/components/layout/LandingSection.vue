<script setup>
import CButton from "@/components/base/CButton.vue"
import CoverImage from "@/components/common/CoverImage.vue"
import Header from "@/components/layout/Header.vue"

defineProps({
  variant: {
    required: true,
    type: String,
    validator(value) {
      return ["home", "blogFirst", "blogSecond"].includes(value)
    }
  },
  src: {
    required: true,
    type: String
  },
  alt: {
    required: true,
    type: String
  }
})
</script>

<template>
  <div class="flex flex-col gap-10 h-[700px]  text-white overflow-hidden">
    <CoverImage :alt="alt" :src="src" />
    <Header />
    <div class="flex flex-col justify-center items-center h-full gap-10">
      <div class="text-center">
        <h1 class="text-5xl font-bold uppercase">Inpiration for travel by real people</h1>
        <p class="text-2xl">Book smart, travel simple</p>
      </div>
      <CButton variant="white"
        ><span class="font-semibold"> Start planning your trip </span></CButton
      >
    </div>
  </div>
</template>
