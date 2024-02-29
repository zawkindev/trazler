<script setup>
import { ref } from "vue"
import { formatDate, getImgUrl } from "@/utils/index"
import LandingSection from "@/components/layout/LandingSection.vue"
import SocialGroup from "@/components/common/SocialGroup.vue"
import Card from "@/components/common/Card.vue"
import CButton from "@/components/base/CButton.vue"
import Banner from "@/components/layout/Banner.vue"
import DestinationCard from "@/components/common/DestinationCard.vue"
import Tab from "@/components/common/Tab.vue"
import Footer from "@/components/layout/Footer.vue"

const socialMediaData = [
  {
    stats: "3.7 M",
    alt: "facebook",
    url: "https://facebook.com"
  },
  {
    stats: "2.4 M",
    alt: "instagram",
    url: "https://instagram.com"
  },
  {
    stats: "3.7 M",
    alt: "twitter",
    url: "https://x.com"
  },
  {
    stats: "2.4 M",
    alt: "youtube",
    url: "https://youtube.com"
  }
]

const options = [
  "Category name",
  "Category name",
  "Category name",
  "Category name",
  "Category name",
  "Category name"
]

const activeTab = ref(0)
</script>

<template>
  <div class="flex flex-col py-6 px-24">
    <LandingSection variant="home" alt="landing image" src="lake.jpg" />
    <div class="flex w-full justify-end mt-6">
      <SocialGroup direction="row" theme="light" :data="socialMediaData" />
    </div>
    <div class="flex flex-col gap-28">
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
      <div class="flex w-full items-center justify-center">
        <CButton variant="outline">
          <span class="font-semibold mx-8"> Load more </span>
        </CButton>
      </div>
      <Banner src="sea-xl.png" />
      <div class="flex flex-col gap-8">
        <div>
          <h4 class="text-3xl font-bold">Top Destinations</h4>
          <p class="font-bold text-lg">
            Tick one more destination off of your bucket list with one of our most popular vacations
            in 2024.
          </p>
        </div>
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
      <Tab
        @select-tab="(index) => (activeTab = index)"
        :options="options"
        :active-tab="activeTab"
      />
      <div class="flex justify-between items-center gap-10">
        <div class="flex p-6 border-2 border-gray-300 gap-8 w-7/12">
          <div class="flex flex-col gap-5 w-7/12 text-gray-500 font-semibold">
            <img
              class="h-auto w-full object-fill"
              alt="cho'l"
              src="@/assets/images/categories/8.png"
            />
            <p>1 Month ago</p>
            <h5 class="text-2xl font-bold text-black">
              Tick one more destination off of your bucket list with one of our most popular
              vacations in 2024.
            </h5>
            <p class="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptas placeat
              architecto magnam laborum ipsum, amet facilis magni?
            </p>
          </div>
          <div class="w-5/12 h-full flex flex-col gap-4">
            <div v-for="index in 4" class="flex gap-4" :key="index">
              <img alt="photo" :src="getImgUrl(`categories/${index}.png`)" class="max-w-60 h-32" />
              <div class="flex flex-col gap-4">
                <p class="font-bold text-xl text-wrap flex">Akame Ga Kill: Season finale</p>
                <span>
                  {{ formatDate(new Date("02-02-2024")) }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col px-8 py-5 gap-5 border-2 border-gray-300 w-5/12 h-full justify-between">
          <h5 class="font-bold text-xl">Manga reads</h5>
          <div v-for="index in 3" class="flex gap-4" :key="index">
            <img class="max-w-80 h-40" alt="friends" :src="getImgUrl(`categories/${index+4}.png`)" />
            <div class="flex flex-col gap-4">
              <p class="font-bold text-xl">
                Tick one more destination off of your bucket list with one of our most popular
                vacations in 2024.
              </p>
              <p>
                {{ formatDate(new Date("04-22-2006")) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
