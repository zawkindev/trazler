<script setup>
import SocialGroup from "@/components/common/SocialGroup.vue"
const socialMediaData = [
  {
    stats: "3.7 M",
    alt: "facebook"
  },
  {
    stats: "2.4 M",
    alt: "instagram"
  },
  {
    stats: "3.7 M",
    alt: "twitter"
  },
  {
    stats: "2.4 M",
    alt: "youtube"
  }
]
</script>
<template>
  <div class="flex justify-between w-full p-16 bg-black text-white">
    <p class="text-xl">Designed & Developed by <span class="font-bold text-xl uppercase">Megumi Katou</span></p>
    <SocialGroup direction="col" theme="dark" :data="socialMediaData" />
  </div>
</template>
