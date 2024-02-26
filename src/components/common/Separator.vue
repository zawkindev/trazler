<script setup>
defineProps({
  variant: {
    type: String,
    validator(value) {
      return ["stroke", "dot"].includes(value)
    }
  }
})
</script>

<template>
  <div class="flex w-fit justify-center items-center">
    <div
      :class="{ 'w-5 h-[1px]': variant == 'stroke', 'w-1 h-1': variant == 'dot' }"
      class="bg-gray-400 rounded-full"
    />
  </div>
</template>
