<script setup lang="ts">
import { ref, type Component } from "vue";
import ChalkTitle from "@/components/ChalkTitle.vue";
import IconTech from "@/assets/images/departments/icon-tech.svg?component";
import IconMedia from "@/assets/images/departments/icon-media.svg?component";
import IconProduct from "@/assets/images/departments/icon-product.svg?component";
import IconDesign from "@/assets/images/departments/icon-design.svg?component";
import TechDescription from "@/components/department/TechDescription.vue";
import MediaDescription from "@/components/department/MediaDescription.vue";
import ProductDescription from "@/components/department/ProductDescription.vue";
import DesignDescription from "@/components/department/DesignDescription.vue";

const departments: Array<{
  name: string;
  icon: Component;
  content: Component;
}> = [
  { name: "技术组", icon: IconTech, content: TechDescription },
  { name: "新媒体组", icon: IconMedia, content: MediaDescription },
  { name: "产品运营组", icon: IconProduct, content: ProductDescription },
  { name: "设计组", icon: IconDesign, content: DesignDescription },
];

const selected = ref(0);
</script>

<template>
  <section class="mx-auto max-w-[1280px] px-4 pt-12 sm:px-10">
    <ChalkTitle title="部门介绍" />
    <div class="mt-3 overflow-hidden py-3 sm:py-9">
      <div class="flex flex-col gap-3 rounded-2xl bg-white p-3 sm:p-6 lg:flex-row">
        <nav class="rounded-xl bg-[#F5F5F5] p-3 lg:p-6">
          <ul class="flex h-full justify-between sm:gap-4 lg:flex-col lg:gap-6">
            <li
              v-for="(dept, index) in departments"
              :key="dept.name"
              class="flex basis-1/4 cursor-pointer flex-col items-center justify-center gap-1 sm:flex-row sm:gap-0"
              :class="
                index === selected
                  ? 'font-extrabold text-[#0067D1]'
                  : 'text-[#A8A8A8] hover:text-zinc-500'
              "
              @click="selected = index"
            >
              <component
                :is="dept.icon"
                class="block h-6 w-6 sm:hidden"
              />
              <div
                class="relative flex w-full items-center justify-center self-stretch text-center sm:px-2 sm:py-6 lg:px-3 lg:py-10"
              >
                <!-- 选中项的白色背景 + 大图标水印 -->
                <div
                  v-if="index === selected"
                  class="absolute inset-0 flex items-center justify-center rounded-xl bg-white"
                >
                  <component
                    :is="dept.icon"
                    class="hidden opacity-20 sm:block sm:h-[64px] sm:w-[64px] lg:h-[78px] lg:w-[78px]"
                  />
                </div>
                <span
                  class="relative whitespace-nowrap text-sm transition duration-500 sm:text-xl sm:tracking-[3.6px] lg:text-2xl"
                >
                  {{ dept.name }}
                </span>
              </div>
            </li>
          </ul>
        </nav>
        <main class="relative min-w-0 grow">
          <component :is="departments[selected].content" />
        </main>
      </div>
    </div>
  </section>
</template>
