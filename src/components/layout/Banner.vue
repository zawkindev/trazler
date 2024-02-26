<script setup>
import CButton from "@/components/base/CButton.vue"
import Badge from "@/components/common/Badge.vue"

import { getImgUrl } from "@/utils/index"

defineProps({
  src: {
    required: true,
    type: String
  }
})
</script>

<template>
  <div
    class="relative flex flex-col w-full h-[500px] items-center justify-center gap-8 font-bold text-white"
  >
    <img class="absolute w-full h-full left-0 top-0 -z-10" :src="getImgUrl(src)" />
    <div class="absolute inset-0 bg-gray-900 opacity-5 -z-10"></div>
    <Badge class="text-xl"> Travel </Badge>
    <p class="text-5xl">Richird Nortoo photorealistic rendering as real photos</p>
    <p class="text-lg text-gray-300 w-5/12 text-center">
      Progressively incentivize cooperative systems through technically sound functionalities. The
      credibly productivate seamless data.
    </p>
    <CButton variant="white">
      <span class="text-violet-500"> Start planning your trip </span>
    </CButton>
  </div>
</template>
