<script setup lang="ts">
import productBg from "@/assets/images/departments/product/product-bg.png";

const blurSpans = [
  {
    content:
      "我们的日常工作就是负责对产品进行定义并进行需求分析绘制使用流程图，协调技术、设计部门推进项目开发进度。",
    className: "max-w-[528px]",
  },
  {
    content: "收集师生需求&整合各类资源&撰写产品需求文档等相关文字材料",
    className: "",
  },
  {
    content: "欢迎全新的你加入我们，一起构思新的产品，策划新的活动!",
    className: "max-w-[458px]",
  },
];
</script>

<template>
  <div
    class="relative flex h-full min-h-[548px] w-full flex-col overflow-hidden bg-center bg-no-repeat bg-[length:2419px_1524px]"
    :style="{ backgroundImage: `url(${productBg})` }"
  >
    <div class="mt-auto flex flex-col items-end gap-8 px-[25px] py-[50px]">
      <span
        v-for="(span, index) in blurSpans"
        :key="index"
        class="w-fit rounded-lg bg-[#F5F5F5]/50 p-[10px] text-lg tracking-[3.6px] text-[#333] backdrop-blur-sm sm:text-2xl"
        :class="span.className"
      >
        {{ span.content }}
      </span>
    </div>
  </div>
</template>
