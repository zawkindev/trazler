<script setup>
import LandingSection from "@/components/layout/LandingSection.vue"
import SocialGroup from "@/components/common/SocialGroup.vue"
import Card from "@/components/common/Card.vue"
import CButton from "@/components/base/CButton.vue"
import Banner from "@/components/layout/Banner.vue"

const socialMediaData = [
  {
    stats: "3.7 M",
    src: "icons/facebook-dark.svg",
    alt: "facebook"
  },
  {
    stats: "2.4 M",
    src: "icons/intagram-dark.svg",
    alt: "instagram"
  },
  {
    stats: "3.7 M",
    src: "icons/twitter-dark.svg",
    alt: "twitter"
  },
  {
    stats: "2.4 M",
    src: "icons/youtube-dark.svg",
    alt: "youtube"
  }
]
</script>

<template>
  <div class="flex flex-col py-6 px-24">
    <LandingSection variant="home" alt="landing image" src="lake.jpg" />
    <div class="flex w-full justify-end mt-6">
      <SocialGroup variant="row" :data="socialMediaData" />
    </div>
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
    <div class="flex w-full items-center justify-center my-28">
      <CButton variant="outline">
        <span class="font-semibold mx-8"> Load more </span>
      </CButton>
    </div>
    <Banner src="sea-xl.png" />
  </div>
</template>
