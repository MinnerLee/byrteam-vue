<script setup lang="ts">
import ChalkTitle from "@/components/ChalkTitle.vue";
import IconFree from "@/assets/images/join-team/icon-free.svg?component";
import IconHarvest from "@/assets/images/join-team/icon-harvest.svg?component";
import IconClap from "@/assets/images/join-team/icon-clap.svg?component";

const reasons = [
  {
    icon: IconFree,
    title: "开放自由",
    description:
      "自由开放的文化氛围让你的声音会被认真聆听，你可以与整个团队的同学进行思想碰撞，点燃创意的火花。在这里，你遇到的不只是学长学姐，更是并肩作战的伙伴。",
  },
  {
    icon: IconHarvest,
    title: "收获满满",
    description:
      "无论你想提升自己的coding能力、产品思维能力还是交互设计能力，这里都有手握多个大厂offer的学长学姐手把手教学。从0到1带你做项目，成为你简历上最亮眼的一笔！",
  },
  {
    icon: IconClap,
    title: "发挥价值",
    description:
      "这里有梦和追梦的勇气，我们为每一个有想法的同学搭建舞台，赋予把思考变为现实以满足用户需求的勇气和能力。好的内容，值得被更多人看见！",
  },
];
</script>

<template>
  <section class="mx-auto max-w-[1280px] px-4 pt-12 sm:px-10">
    <ChalkTitle title="加入byrTeam的N个理由" />
    <div
      class="mx-auto mt-3 flex flex-col items-center justify-center gap-6 py-3 sm:flex-row sm:gap-3 sm:py-9 lg:gap-6"
    >
      <div
        v-for="reason in reasons"
        :key="reason.title"
        class="relative mx-auto flex max-w-[344px] flex-col items-center self-stretch sm:basis-1/3"
      >
        <component
          :is="reason.icon"
          class="z-10 mx-auto -mb-6 h-[80px] shrink-0 sm:-mb-8 sm:h-[100px] lg:-mb-20 lg:h-[150px]"
        />
        <div
          class="grow rounded-2xl bg-white text-center px-6 pb-6 pt-[30px] sm:px-6 sm:pb-6 sm:pt-[40px] lg:px-12 lg:pb-9 lg:pt-[100px]"
        >
          <h3 class="font-smiley text-[20px] sm:text-[24px] lg:text-[28px]">
            {{ reason.title }}
          </h3>
          <p class="mt-5 text-xs text-[#585858] sm:text-sm lg:text-base">
            {{ reason.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
