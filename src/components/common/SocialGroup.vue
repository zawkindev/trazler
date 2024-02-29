<script setup>
import { getImgUrl } from "@/utils/index"

defineProps({
  direction: {
    required: true,
    type: String,
    validator(value) {
      return ["row", "col"].includes(value)
    }
  },
  theme: {
    required: true,
    type: String,
    validator(value) {
      return ["light", "dark"].includes(value)
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
    <div
      v-for="item in data"
      :key="item"
      :class="`flex flex-${direction} gap-1 items-center justify-center`"
    >
      <img
        :alt="item.alt"
        :src="getImgUrl(`icons/social/${theme}/${item?.alt}.svg`)"
        class="h-auto w-6  cursor-pointer"
      />
      <p class="whitespace-nowrap font-bold" :class="{'text-gray-300':theme=='dark'}">{{ item.stats }}</p>
    </div>
  </div>
</template>
