<script setup>
import CButton from "@/components/base/CButton.vue"
import CoverImage from "@/components/common/CoverImage.vue"
import Header from "@/components/layout/Header.vue"
import { ref } from "vue"

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

const menuOpen = ref(true)

function closeMenu(e) {
  if (!e.target.closest(".menu")) {
    menuOpen.value = false
  }
}
</script>

<template>
  <div class="flex flex-col h-[680px] text-white" @click="closeMenu">
    <CoverImage :alt="alt" :src="src" />
    <Header :menu-open="menuOpen" @toggle="(bool) => (menuOpen = bool)"  />
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
