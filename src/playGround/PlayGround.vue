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
    <div class="flex flex-wrap gap-8">
      <Card
        v-for="index in 8"
        :key="index"
        :img-bagde="{
          alt: index % 2 == 1 ? 'gallery' : 'play',
          src: `icons/${index % 2 == 1 ? 'gallery' : 'play'}.svg`
        }"
        :src="`posts/${index}.png`"
        title="Integer Maecans Eget Viverra"
      />
    </div>
  </div>
</template>
