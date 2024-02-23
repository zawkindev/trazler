<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "white",
    validator(value) {
      return ["white", "black"].includes(value)
    }
  },
  type: String,
  disabled: Boolean,
  class: String
})

function getClasses() {
  switch (props.variant) {
    case "white":
      return "bg-whtie text-black"
    case "black":
      return "bg-black text-white"
  }
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="getClasses()"
    class="flex items-center justify-center px-6 py-2 rounded-sm"
  >
    <slot />
  </button>
</template>
