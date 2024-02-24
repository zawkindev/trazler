<script setup>
defineProps({
  hasIcon: Boolean
})
</script>

<template>
  <div
    class="flex items-center justify-center w-fit backdrop-blur-sm bg-white/30 rounded-sm text-white"
    :class="{ 'rounded-full p-2': hasIcon, ' px-2': !hasIcon }"
  >
    <slot />
  </div>
</template>
