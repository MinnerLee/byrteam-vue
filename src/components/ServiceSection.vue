<script setup lang="ts">
import { ref } from "vue";
import ChalkTitle from "@/components/ChalkTitle.vue";
import { services } from "@/data/services";
import Underline from "@/assets/images/service/underline.svg?component";
import IconArrowTR from "@/assets/images/departments/icon-arrow-tr.svg?component";

const selected = ref(0);
</script>

<template>
  <section class="mx-auto max-w-[1280px] px-4 pt-12 sm:px-10">
    <ChalkTitle title="我们的产品" />
    <div class="mt-3">
      <div class="flex flex-col gap-6">
        <!-- 桌面端：等距排布，选中图标变大 -->
        <div class="hidden items-center justify-around lg:flex">
          <div
            v-for="(service, index) in services"
            :key="'service-desktop-' + service.name + '-' + index"
            class="relative cursor-pointer"
            role="button"
            :title="service.name"
            @click="selected = index"
          >
            <img
              :src="service.image"
              :alt="service.name"
              :width="index === selected ? 100 : 54"
            />
            <svg
              v-if="index === selected"
              width="130"
              height="120"
              viewBox="0 0 117 104"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[calc(50%+6px)] top-[calc(50%+8px)] -translate-x-1/2 -translate-y-1/2"
              fill="none"
            >
              <path
                d="M113.758 47.7575C100.925 67.2575 72.799 105.113 32.2585 86.2575C-10.7416 66.2579 -6.16411 7.76068 44.796 3.26009C101.575 -1.7544 115.259 46.7575 97.7588 71.7575C80.2588 96.7575 65.298 103.758 32.2585 100.257"
                stroke="#0067D1"
                stroke-width="6"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <!-- 移动端/平板：横向滚动图标列表，点击选中 -->
        <div class="flex items-center gap-4 overflow-x-auto py-4 pt-3 lg:hidden">
          <div
            v-for="(service, index) in services"
            :key="'service-mobile-' + service.name + '-' + index"
            class="relative flex shrink-0 cursor-pointer items-center justify-center"
            role="button"
            :title="service.name"
            @click="selected = index"
          >
            <img
              :src="service.image"
              :alt="service.name"
              :width="index === selected ? 80 : 54"
            />
            <svg
              v-if="index === selected"
              width="130"
              height="120"
              viewBox="0 0 117 104"
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-[calc(50%+6px)] top-[calc(50%+8px)] -translate-x-1/2 -translate-y-1/2 scale-75"
              fill="none"
            >
              <path
                d="M113.758 47.7575C100.925 67.2575 72.799 105.113 32.2585 86.2575C-10.7416 66.2579 -6.16411 7.76068 44.796 3.26009C101.575 -1.7544 115.259 46.7575 97.7588 71.7575C80.2588 96.7575 65.298 103.758 32.2585 100.257"
                stroke="#0067D1"
                stroke-width="6"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <!-- 详情卡片 -->
        <div class="rounded-[18px] bg-white px-6 py-4">
          <div class="flex flex-col gap-2">
            <div class="flex justify-between">
              <h3 class="inline-flex w-fit flex-col items-center text-2xl">
                <a
                  v-if="services[selected].url !== undefined"
                  :href="services[selected].url"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {{ services[selected].name }}
                </a>
                <template v-else>{{ services[selected].name }}</template>
                <Underline class="h-[19px] w-[163px]" />
              </h3>
              <a
                v-if="services[selected].url"
                class="cursor-pointer p-2 text-[#0067D1]"
                :href="services[selected].url"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconArrowTR class="h-4 w-4" />
              </a>
            </div>
            <div class="text-[#0067D1] opacity-80">
              {{ services[selected].slogan }}
            </div>
            <article class="text-lg leading-[180%] [&>p]:indent-8">
              <p
                v-for="(paragraph, index) in services[selected].descriptionHtml"
                :key="index"
                v-html="paragraph"
              ></p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
