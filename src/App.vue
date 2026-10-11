<script setup lang="ts">
import SiteHeader from "@/components/SiteHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutTeam from "@/components/AboutTeam.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import DepartmentSection from "@/components/DepartmentSection.vue";
import JoinAndReason from "@/components/JoinAndReason.vue";
import SenpaiSaying from "@/components/SenpaiSaying.vue";
import NoticeAndProcess from "@/components/NoticeAndProcess.vue";
import SiteFooter from "@/components/SiteFooter.vue";
</script>

<template>
  <SiteHeader />
  <main class="overflow-hidden">
    <HeroSection />
    <AboutTeam />
    <ServiceSection />
    <DepartmentSection />
    <JoinAndReason />
    <SenpaiSaying />
    <NoticeAndProcess />
  </main>
  <SiteFooter />
</template>
