<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import ChalkTitle from "@/components/ChalkTitle.vue";
import Quote from "@/assets/images/senpai-saying/quote.svg?component";
import IconArrow from "@/assets/images/senpai-saying/icon-arrow.svg?component";
import SenpaiMaleIcon from "@/assets/images/senpai-saying/senpai-male.svg?component";
import SenpaiFemale3Icon from "@/assets/images/senpai-saying/senpai-female-3.svg?component";
import SenpaiFemale4Icon from "@/assets/images/senpai-saying/senpai-female-4.svg?component";
import SenpaiFemale2Icon from "@/assets/images/senpai-saying/senpai-female-2.svg?component";

interface Achievement {
  text: string;
  highlight?: boolean;
}

interface SenpaiInfo {
  avatar: unknown;
  name: string;
  department: string;
  identity: string;
  achievements: Achievement[];
  /** 允许 <b> 内联标签 */
  sayingHtml: string;
}

const info: SenpaiInfo[] = [
  {
    avatar: SenpaiMaleIcon,
    name: "Makiras",
    department: "技术组",
    identity: "18级-计算机学院",
    achievements: [
      { text: "前技术组划水负责人" },
      { text: "中科院在读博士", highlight: true },
      { text: "初创&大厂实习", highlight: true },
      { text: "人工SMT&BGA平台" },
    ],
    sayingHtml:
      "在这里可以接触各路神仙，挑战各种问题，发展各式能力，探索各类可能。一个自驱的团队可以帮你能力与乐趣两开花，解决现实问题的同时丰富你的履历。如果你觉得 [这里忘了] 就去建设它，那这里就是最适合的地方，改变北邮的机会正触手可及！It’s now or never !",
  },
  {
    avatar: SenpaiMaleIcon,
    name: "zekin",
    department: "技术组",
    identity: "22级-计算机学院",
    achievements: [
      { text: "北邮摸鱼硕士", highlight: true },
      { text: "大厂实习" },
      { text: "救火队长" },
      { text: "各类竞赛奖项", highlight: true },
    ],
    sayingHtml:
      "从构建处理器的第一个门电路开始……到串联起每一个北邮人的计算机网络……再到服务北邮人的各种服务，在这里你可以体验计算机的方方面面。现在，开启你最伟大的探索吧：从计算机体系结构到计算机网络技术实践。",
  },
  {
    avatar: SenpaiFemale3Icon,
    name: "+1",
    department: "新媒体组",
    identity: "17级-数字媒体设计学院",
    achievements: [
      { text: "北邮人产品设计新媒体前负责人", highlight: true },
      { text: "活力研究生" },
      { text: "退休老干部(除了技术啥都干)", highlight: true },
    ],
    sayingHtml:
      "BYR Team在北邮是一个响当当的名号，在这里确实认识了很多<b>技术巨巨、设计大佬、运营鬼才</b>。重要的是大家都有<b>有趣而自由的灵魂</b>，团队也有供大家自由创作和发挥才能的空间。可能有些组织退出了就不再联系，但加入BYR Team，就会一直都是BYR Team的一员。我们有自己的传承，我们拥抱新人。",
  },
  {
    avatar: SenpaiFemale4Icon,
    name: "momo",
    department: "新媒体组",
    identity: "21级-网络空间安全学院",
    achievements: [
      { text: "永远年轻的大三学姐^^", highlight: true },
      { text: "可进可退可盐可甜" },
      { text: "除了工科摄影遛狗插花啥都干" },
      { text: "国奖获得者", highlight: true },
    ],
    sayingHtml:
      "年级（纪）越大，BYR Team越成为我的快乐老家，可可爱爱的学妹，温温柔柔的学弟，酷酷飒飒的老板老板娘以及一些可爱的小碎嘴子。<b>成年人的生活太需要这样的轻松和志趣</b>，我们是线上的好友和伙伴，也是线下的小姐妹、好朋友。如果一定要用一个词来形容我们，那便是<b>松弛与理想并存</b>吧。",
  },
  {
    avatar: SenpaiMaleIcon,
    name: "好圆圆圆",
    department: "产品组",
    identity: "20级-数字媒体设计学院",
    achievements: [
      { text: "国奖获得者", highlight: true },
      { text: "支教团美术老师一枚" },
      { text: "德艺双馨" },
      { text: "十余项设计竞赛获奖", highlight: true },
    ],
    sayingHtml:
      "在北邮人团队，你会收获亲自设计的项目上线服务全体北邮人的机会，你会收获为同一目标努力工作的好友，欢迎你加入北邮人团队大家庭，收获属于自己的未来！",
  },
  {
    avatar: SenpaiFemale2Icon,
    name: "Sprr",
    department: "设计组",
    identity: "20级-数字媒体设计学院",
    achievements: [
      { text: "三好学生" },
      { text: "智育top1", highlight: true },
      { text: "没有滑板的铲屎官不是好设计师", highlight: true },
      { text: "" },
    ],
    sayingHtml:
      "这里有最自由和包容的土壤，有最可爱和有趣的灵魂。发现问题、设计构思、解决问题。在北邮人，让设计真正的落地，服务更多的人。",
  },
];

const trackRef = ref<HTMLElement | null>(null);
const canPrev = ref(false);
const canNext = ref(true);

function updateButtons() {
  const el = trackRef.value;
  if (!el) return;
  canPrev.value = el.scrollLeft > 1;
  canNext.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
}

function scrollPrev() {
  // 一张卡片宽度 723px + 间距 48px
  trackRef.value?.scrollBy({ left: -771, behavior: "smooth" });
}

function scrollNext() {
  trackRef.value?.scrollBy({ left: 771, behavior: "smooth" });
}

onMounted(() => {
  updateButtons();
  trackRef.value?.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateButtons);
});
</script>

<template>
  <section class="mx-auto pt-12">
    <div class="mx-auto max-w-[1280px] px-4 sm:px-10">
      <ChalkTitle title="学长学姐说" />
    </div>

    <div class="mt-3 h-fit py-3 sm:py-9">
      <div class="relative">
        <!-- 轮播轨道 -->
        <div
          ref="trackRef"
          class="scroll-smooth snap-x snap-mandatory overflow-x-auto"
        >
          <div class="ml-32 flex touch-pan-y gap-6 sm:ml-0 sm:gap-12">
            <div
              v-for="(senpai, index) in info"
              :key="senpai.name + '-' + index"
              class="relative min-w-0 flex-[0_0_723px] self-end pl-1 snap-center"
            >
              <!-- 头像与信息 -->
              <div class="relative flex items-center">
                <div class="mx-10 scale-75 max-sm:-mt-7 sm:scale-100">
                  <component
                    :is="senpai.avatar"
                    class="w-[275px] max-w-none"
                  />
                </div>
                <div class="-mx-[100px] -mt-5 flex flex-col gap-5 sm:-mx-0 sm:mt-0">
                  <div class="flex gap-2 max-sm:flex-col sm:items-end">
                    <span class="font-smiley text-2xl">
                      @{{ senpai.name }}「{{ senpai.department }}」
                    </span>
                    <span class="inline-block h-fit text-sm text-[#727272]">
                      {{ senpai.identity }}
                    </span>
                  </div>
                  <div class="text-sm max-sm:text-xs">
                    <div class="max-sm:-mx-[12px] max-sm:-mt-4">
                      <div
                        v-for="(achievement, aIndex) in senpai.achievements.slice(
                          0,
                          senpai.achievements.length / 2
                        )"
                        :key="'a-' + aIndex"
                        class="ml-2 inline-block"
                      >
                        <div
                          v-if="achievement.highlight"
                          class="relative block w-fit"
                        >
                          <div
                            class="absolute bottom-0 h-4/5 w-full bg-gradient-to-r from-[#DAFF47] to-[#D9D9D900]"
                          ></div>
                          <h2 class="relative ml-2">
                            {{ achievement.text }}
                          </h2>
                        </div>
                        <template v-else>{{ achievement.text }}</template>
                      </div>
                    </div>
                    <div class="max-sm:-mx-[8px] sm:mt-2">
                      <div
                        v-for="(achievement, aIndex) in senpai.achievements.slice(
                          senpai.achievements.length / 2
                        )"
                        :key="'b-' + aIndex"
                        class="ml-2 inline-block"
                      >
                        <div
                          v-if="achievement.highlight"
                          class="relative block w-fit"
                        >
                          <div
                            class="absolute bottom-0 h-4/5 w-full bg-gradient-to-r from-[#DAFF47] to-[#D9D9D900]"
                          ></div>
                          <h2 class="relative ml-2">
                            {{ achievement.text }}
                          </h2>
                        </div>
                        <template v-else>{{ achievement.text }}</template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 引言卡片 -->
              <div
                class="-mt-[72px] mb-8 flex items-end justify-start max-sm:ml-32 max-sm:px-2 sm:justify-end"
              >
                <div
                  class="m-2 flex flex-auto flex-col items-center justify-center rounded-2xl bg-white p-4 px-[50px] py-[45px] min-h-[300px] max-sm:max-w-[320px] max-sm:px-[30px] max-sm:py-[25px] sm:min-h-[230px]"
                >
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <p v-html="senpai.sayingHtml"></p>
                </div>
                <Quote
                  class="-mb-8 -ml-[46px] h-[77px] w-[90px] max-sm:-ml-[60px] max-sm:scale-50"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 两侧渐隐遮罩 -->
        <div
          class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F5F5F5] to-transparent max-sm:hidden"
        ></div>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F5F5F5] to-transparent max-sm:hidden"
        ></div>

        <!-- 左右切换按钮 -->
        <div
          class="pointer-events-none absolute inset-x-0 bottom-1/2 flex translate-y-1/2 justify-between sm:bottom-2 sm:right-20 sm:translate-y-0 sm:justify-end sm:gap-8 [&>button]:pointer-events-auto"
        >
          <button
            class="scale-x-[-1] rounded-full p-3 sm:shadow-md"
            :class="
              !canPrev
                ? 'cursor-not-allowed text-zinc-400 sm:bg-zinc-300'
                : 'text-[#838383] sm:bg-white sm:hover:bg-[#175DDC] sm:hover:text-white'
            "
            :disabled="!canPrev"
            @click="scrollPrev"
          >
            <IconArrow class="h-8 w-8" />
          </button>
          <button
            class="rounded-full p-3 sm:shadow-md"
            :class="
              !canNext
                ? 'cursor-not-allowed text-zinc-400 sm:bg-zinc-300'
                : 'text-[#838383] sm:bg-white sm:text-[#838383] sm:hover:bg-[#175DDC] sm:hover:text-white'
            "
            :disabled="!canNext"
            @click="scrollNext"
          >
            <IconArrow class="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
