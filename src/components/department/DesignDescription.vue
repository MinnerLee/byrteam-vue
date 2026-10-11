<script setup lang="ts">
import DesignTitle from "@/assets/images/departments/design/icon-title.svg?component";
import IconSaturn from "@/assets/images/departments/design/icon-saturn.svg?component";

const marqueeTexts = [
  { text: "GRAPHIC", baseVelocity: -5 },
  { text: "PRODUCT", baseVelocity: 5 },
  { text: "INTERACTION", baseVelocity: -5 },
  { text: "WHATEVER", baseVelocity: 5 },
];
</script>

<template>
  <section class="relative h-full overflow-hidden text-[#0067D1]">
    <!-- 背景大字（原版为滚动视差，此处按要求不做动画） -->
    <div
      class="font-poppins-800 absolute inset-0 -mr-1 flex flex-col justify-center gap-12 text-right italic opacity-20 sm:gap-8 sm:text-7xl md:gap-5 md:text-8xl lg:justify-between lg:text-9xl"
    >
      <div v-for="item in marqueeTexts" :key="item.text">{{ item.text }}</div>
    </div>

    <article
      class="relative flex h-full flex-col justify-between gap-8 sm:gap-11 md:gap-16"
    >
      <section>
        <div
          class="flex w-[250px] flex-wrap items-center justify-center gap-1 border-[2px] border-[#0067D1] bg-white/40 p-[10px] sm:w-fit md:gap-[10px]"
        >
          <DesignTitle class="h-[122px] w-[244px]" />
          <div class="flex flex-col items-center gap-[10px] px-[10px]">
            <IconSaturn class="h-[67px] w-[90px]" />
            <span
              class="font-dfphei text-xl tracking-[3.25px] sm:text-4xl sm:tracking-[5.4px]"
            >
              design=__
            </span>
          </div>
        </div>
        <div class="font-dfphei w-fit p-[10px] text-5xl tracking-[7.2px]">
          *找一些新的人做新的__*
        </div>
        <div
          class="border-[2px] border-[#0067D1] bg-white/40 px-2 text-2xl leading-none tracking-[3px]"
        >
          “把一种设想通过合理的规划、周密的计划、通过<span class="underline">各种方式</span>表达出来的过程”
        </div>
      </section>

      <section class="self-end sm:mr-24">
        <div
          class="w-fit border-[2px] border-[#0067D1] bg-white/40 px-[9px] text-right text-[32px] leading-[125.5%] tracking-[4px]"
        >
          <p>#坛服</p>
          <p>#文创</p>
          <p>#第二课堂</p>
        </div>
      </section>

      <section class="w-fit border-[2px] border-[#0067D1]">
        <div class="bg-white/40 text-base leading-[111%] tracking-[2.4px]">
          只要你喜欢__想了解__，你都可以来定义byrTeam的__
        </div>
        <div class="bg-white/40 text-base leading-[111%] tracking-[2.4px]">
          用你的作品和想法打动我们
        </div>
      </section>
    </article>
  </section>
</template>
