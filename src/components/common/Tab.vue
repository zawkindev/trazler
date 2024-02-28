<script setup>
defineProps({
  activeTab: {
    required: true,
    type: Number
  },
  options: {
    required: true,
    type: Array
  }
})

const emit = defineEmits(['selectTab'])
</script>

<template>
  <div class="relative flex w-full border-b-[2px] border-gray-200">
    <div class="flex absolute -bottom-[2px] z-10 gap-6">
      <div
        v-for="(item, index) in options"
        :key="index"
        :class="`cursor-pointer py-2 border-b-[2px] border-${index === activeTab ? 'black' : 'gray-200'}`"
        @click="emit('selectTab', index)"
      >
        <span class="font-semibold text-2xl">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
