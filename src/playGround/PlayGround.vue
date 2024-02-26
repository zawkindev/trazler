<script setup>
import Header from "@/components/layout/Header.vue"
import Breadcrumb from "@/components/common/Breadcrumb.vue"
import Badge from "@/components/common/Badge.vue"
import Card from "@/components/common/Card.vue"
</script>

<template>
  <div class="p-10">
    <Header> </Header>

    <Breadcrumb :data="['salom', 'xayr']" />

    <Badge> salom </Badge>
    <Badge has-icon>
      <img class="h-auto w-4" src="@/assets/images/icons/gallery.svg" />
    </Badge>
    <Card src="lake.jpg" title="Integer Maecans Eget Viverra" share-count="130M" />
  </div>
</template>
