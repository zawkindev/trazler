<script setup>
import { RouterView } from "vue-router"
import Header from "@/components/layout/Header.vue"
</script>

<template>
  <div class="relative flex flex-col gap-10 h-[calc(100vh-100px)] py-6 px-24">
    <Header />

    <RouterView />
  </div>
</template>
