<script setup>
import { generateBreadcrumbData } from "@/utils/index"

defineProps({
  data: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <div class="flex gap-2 items-center">
    <div v-for="item in generateBreadcrumbData(data)" :key="item">
      <img v-if="item == '>'" alt="arrow right" src="@/assets/images/icons/arrow-right.svg" />
      <p v-else class="capitalize text-white hover:cursor-pointer">{{ item }}</p>
    </div>
  </div>
</template>
