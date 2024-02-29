<script setup>
import CButton from "@/components/base/CButton.vue"

defineProps({
  menuOpen: Boolean
})

const emit = defineEmits(["toggle"])

const headerData = ["destinations", "food", "well being", "sport", "family", "lifestyle"]
</script>

<template>
  <div class="flex flex-row w-full justify-between items-center text-white gap-3">
    <img alt="logo" src="@/assets/images/logo.svg" class="h-auto w-48 flex-shrink-0 lg:w-72" />
    <div class="hidden sm:flex gap-10">
      <p
        v-for="item in headerData"
        :key="item"
        class="uppercase hover:cursor-pointer text-xl whitespace-nowrap"
      >
        {{ item }}
      </p>
    </div>
    <div class="hidden sm:flex flex-shrink-0">
      <CButton>
        <img alt="search icon" src="@/assets/images/icons/search.svg" class="h-auto w-5" />
      </CButton>

      <CButton variant="black">
        <p class="uppercase font-semibold text-sm">get your $120 navruz gift</p>
      </CButton>
    </div>
    <div class="menu flex relative sm:hidden">
      <img @click="emit('toggle',!menuOpen)" src="@/assets/images/icons/menu.svg" alt="menu" class="h-auto w-8" />
      <div
        v-show="menuOpen"
        class="absolute flex flex-col top-10 right-0 bg-white text-black rounded-sm p-2 gap-2"
      >
        <p
          v-for="item in headerData"
          :key="item"
          class="capitalize hover:cursor-pointer text-xl whitespace-nowrap active:text-gray-500"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
