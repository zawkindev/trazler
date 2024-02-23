<script setup>
import { getImgUrl } from "@/utils/index"
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <img
      alt="background image"
      :src="getImgUrl(src)"
      class="absolute -z-20 w-screen max-h-full top-0 object-cover"
    />
    <div class="bg-black flex absolute top-0 -z-10 w-screen h-full opacity-50"></div>
  </div>
</template>
