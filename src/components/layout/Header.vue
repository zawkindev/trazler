<script setup>
import CButton from "@/components/base/CButton.vue"
</script>

<template>
  <div class="flex w-full justify-between items-center text-white">
    <img alt="logo" src="@/assets/images/logo.svg" class="h-auto w-64 flex-shrink-0" />
    <div class="flex gap-10">
      <p>destinations</p>
      <p>food</p>
      <p>well being</p>
      <p>sport</p>
      <p>family</p>
      <p>lifestyle</p>
    </div>
    <div class="flex">
      <CButton>
        <img alt="search icon" src="@/assets/images/icons/search.svg" class="h-auto w-5" />
      </CButton>

      <CButton variant="black">
        <p>get your $120 navruz gift</p>
      </CButton>
    </div>
  </div>
</template>

<style>
p {
  text-transform: uppercase;
}
p:hover {
  cursor: pointer;
}
</style>
