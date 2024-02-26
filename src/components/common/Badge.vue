<script setup>
defineProps({
  hasIcon: Boolean
})
</script>

<template>
  <div
    class="flex items-center justify-center w-fit backdrop-blur-xs bg-white/30 text-white"
    :class="{ 'rounded-full p-2': hasIcon, ' px-2 py-[2px] rounded-sm': !hasIcon }"
  >
    <slot />
  </div>
</template>
