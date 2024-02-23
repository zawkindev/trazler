<script setup>
import CButton from "@/components/base/CButton.vue"
import LandingImage from "@/components/common/LandingImage.vue"
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
  <div class="relative flex flex-col gap-10 h-[600px] py-6 px-24 text-white">
    <LandingImage :alt="alt" :src="src" />
    <Header />
    <div class="flex flex-col justify-center items-center h-full">
      <h1 class="text-3xl">Inpiration for travel by real people</h1>
      <p>Book smart, travel simple</p>
      <CButton variant="white"> Start planning your trip </CButton>
    </div>
  </div>
</template>
