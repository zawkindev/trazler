<script setup>
import { computed } from "vue"

const props = defineProps({
  variant: {
    type: String,
    default: "transparent",
    validator(value) {
      return ["white", "black", "outline", "transparent"].includes(value)
    }
  },
  type: String,
  disabled: Boolean,
  class: String
})

const classes = computed(() => {
  switch (props.variant) {
    case "white":
      return "bg-white text-black  hover:bg-gray-200"
    case "black":
      return "bg-black text-white hover:bg-gray-900"

    case "outline":
      return "bg-white border-2 rounded-sm border-gray-800 text-gray-800 hover:bg-gray-100"
    default:
      return ""
  }
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="classes"
    class="flex items-center justify-center px-8 py-3 rounded-sm"
  >
    <slot />
  </button>
</template>
