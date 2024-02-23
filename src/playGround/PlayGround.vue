<script setup>
import Header from "@/components/layout/Header.vue"
import Breadcrumb from "@/components/common/Breadcrumb.vue"
</script>

<template>
  <div class="p-10 bg-gray-500">
    <Header> </Header>

    <Breadcrumb :data="['salom', 'xayr']" />
  </div>
</template>
