<script setup>
defineProps({
  hasIcon: Boolean
})
</script>

<template>
  <div
    class="flex items-center justify-center w-fit backdrop-blur-md bg-white/30 text-white"
    :class="{ 'rounded-full p-2': hasIcon, ' px-2 rounded-sm': !hasIcon }"
  >
    <slot />
  </div>
</template>
