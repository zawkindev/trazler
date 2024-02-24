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
  <div class="bg-black flex absolute top-0 left-0 -z-10 w-full h-[700px] opacity-40" />
</template>
