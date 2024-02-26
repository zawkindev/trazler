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
  <img
    alt="background image"
    :src="getImgUrl(src)"
    class="absolute -z-20 w-full h-[700px] top-0 left-0 object-cover"
  />

  <div class="absolute inset-0 bg-black opacity-40 h-[700px] -z-10"></div>
</template>
