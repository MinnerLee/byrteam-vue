<script setup lang="ts">
import ChalkTitle from "@/components/ChalkTitle.vue";
import ProcessDesktop from "@/assets/images/process/process-desktop-2024.svg?component";
import ProcessMobile from "@/assets/images/process/process-mobile-2024.svg?component";
</script>

<template>
  <section class="mx-auto pt-12">
    <div class="mx-auto max-w-[1280px] px-4 sm:px-10">
      <ChalkTitle title="招新公告与招新流程" />
    </div>
    <div class="mx-auto my-6 max-w-[1440px] px-12">
      <ProcessDesktop class="h-fit w-full max-md:hidden" />
      <ProcessMobile class="h-fit w-full max-sm:px-4 sm:px-10 md:hidden" />
    </div>
  </section>
</template>
