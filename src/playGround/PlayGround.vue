<script setup>
import Header from "@/components/layout/Header.vue"
import Breadcrumb from "@/components/common/Breadcrumb.vue"
import Badge from "@/components/common/Badge.vue"
import Card from "@/components/common/Card.vue"
import Tab from "@/components/common/Tab.vue"
import DestinationCard from "@/components/common/DestinationCard.vue"

const options = [
  "Category name",
  "Category name",
  "Category name",
  "Category name",
  "Category name",
  "Category name",
]
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

  <Tab :options="options" :active-tab="1" />
  <div class="flex flex-col gap-4">
    <h4 class="text-3xl font-bold">Top Destinations</h4>
    <p class="font-bold text-lg">
      pick one more destination off of your bucket list with one of our most popular vacations in
      2024.
    </p>
    <div class="flex justify-between gap-6">
      <DestinationCard
        v-for="index in 5"
        :key="index"
        alt="domicano"
        :src="`destinations/${index}.png`"
        title="Domican Republic"
      />
    </div>
  </div>
</template>
