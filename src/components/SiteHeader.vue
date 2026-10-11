<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Logo from "@/assets/images/demo-logo.svg?component";

const links = [
  { name: "北邮人论坛", href: "https://bbs.byr.cn/" },
  { name: "北邮人BT", href: "https://byr.pt/" },
  { name: "BYRIO技术社区", href: "https://byrio.org/" },
] as Array<{ name: string; href: string }>;

const isBlurBg = ref(false);

function onScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  isBlurBg.value = scrollTop > window.innerHeight - 120;
}

onMounted(() => {
  document.addEventListener("scroll", onScroll);
});
onUnmounted(() => {
  document.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header class="sticky top-0 z-30 -mb-[64px] w-full">
    <div
      class="absolute top-0 z-[-1] h-full w-full transition-colors duration-500"
      :class="isBlurBg ? 'border-b bg-[#F5F5F5]/50 backdrop-blur-sm' : ''"
    ></div>
    <div class="py-3 pl-3 pr-12 sm:px-12">
      <div
        class="flex items-center justify-between transition duration-500"
        :class="!isBlurBg ? 'text-white' : 'text-[#333]'"
      >
        <a href="/">
          <Logo class="h-7 sm:h-10 sm:w-[150px]" />
        </a>
        <nav class="hidden gap-16 text-base sm:flex">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.href"
            rel="noopener noreferrer"
            target="_blank"
          >
            {{ link.name }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
