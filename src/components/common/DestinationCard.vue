<script setup>
import { getImgUrl } from "@/utils/index"
defineProps({
  src: {
    required: true,
    type: String
  },
  alt: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  }
})
</script>
<template>
  <div class="relative flex items-center justify-center h-64 w-80 flex-shrink-0">
    <div class="absolute inset-0 bg-black opacity-30 w-full h-full -z-10"></div>
    <img class="absolute w-full h-full -z-20 object-cover" :alt="alt" :src="getImgUrl(src)" />
    <span class="font-bold text-white text-2xl">{{ title }}</span>
  </div>
</template>
