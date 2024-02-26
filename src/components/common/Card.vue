<!-- eslint-disable no-unused-label -->
<script setup>
import { formatDate, getImgUrl } from "@/utils/index"
import Separator from "@/components/common/Separator.vue"
import Badge from "@/components/common/Badge.vue"

defineProps({
  textBadges: {
    type: Array,
    default: () => ["Aenan Elefiend", "Aliquam"]
  },
  imgBagde: {
    type: Object,
    default: () => ({
      alt: "play",
      src: "icons/play.svg"
    })
  },
  src: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  author: {
    type: Object,
    default: () => ({
      src: "author.png",
      fullName: "Joanna Wellick",
      shares: "1K"
    })
  },
  date: {
    type: Object,
    default: () => new Date("2006-04-22")
  },
  shareCount: {
    type: String,
    default: () => "111K",
    validator(value) {
      return value.length <= 4
    }
  },
  description: {
    type: String,
    default: `  Aenean eleifend ante maecenas pulvinar montes lorem et pede
                dis dolor pretium donec dictum. Vici consequat justo enim.
                Venenatis eget adipiscing luctus lorem.
             `
  }
})
</script>

<template>
  <div class="flex flex-col gap-4 w-[330px] border-box text-gray-500 mt-20">
    <div class="relative flex w-full h-[250px]">
      <img :src="getImgUrl(src)" class="w-full h-full" />
      <div class="absolute flex w-full justify-between items-center p-4">
        <div class="flex gap-2">
          <Badge v-for="(item, index) in textBadges" :key="index">
            <p class="capitalize font-semibold">{{ item }}</p></Badge
          >
        </div>
        <Badge has-icon>
          <img :alt="imgBagde.alt" :src="getImgUrl(imgBagde.src)" class="w-4 h-4" />
        </Badge>
      </div>
    </div>
    <p class="text-3xl font-bold text-black">{{ title }}</p>
    <div class="flex gap-2 items-center">
      <div class="flex items-center flex-shrink-0">
        <img :src="getImgUrl(author.src)" class="h-6 w-6" />
        <span class="font-bold font-md text-black">
          {{ author.fullName }}
        </span>
      </div>
      <Separator variant="stroke" />
      <span class="text-sm w-fit flex flex-shrink-0">
        {{ formatDate(date) }}
      </span>
      <Separator variant="dot" />
      <div class="flex items-center">
        <img alt="share" src="@/assets/images/icons/share.svg" class="h-4 w-4" />
        <p class="text-sm flex items-center">{{ shareCount }} shares</p>
      </div>
    </div>
    <p>
      {{ description }}
    </p>
    <div class="border-b border-black text-xl font-bold w-fit cursor-pointer text-black">
      View Post
    </div>
  </div>
</template>
