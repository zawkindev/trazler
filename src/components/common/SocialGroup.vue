<script setup>
import { getImgUrl } from "@/utils/index"

defineProps({
  variant: {
    required: true,
    type: String,
    validator(value) {
      return ["row", "col"].includes(value)
    }
  },
  data: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <div class="flex gap-5">
    <div v-for="item in data" :key="item" :class="`flex flex-${variant} gap-1 items-center justify-center`">
      <img :alt="item.alt" :src="getImgUrl(item.src)" class="h-auto w-6"/>
      <p class="whitespace-nowrap">{{ item.stats }}</p>
    </div>
  </div>
</template>
