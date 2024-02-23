<script setup>
import LandingSection from "@/components/layout/LandingSection.vue"
import SocialGroup from "@/components/common/SocialGroup.vue"

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
  <div class="flex flex-col gap-8 py-6 px-24 overflow-x-hidden">
    <LandingSection variant="home" alt="landing image" src="lake.jpg" />
    <div class="flex w-full justify-end">
      <SocialGroup variant="row" :data="socialMediaData" />
    </div>
  </div>
</template>
