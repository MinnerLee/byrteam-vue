<script setup lang="ts">
import IconDots from "@/assets/images/departments/media/icon-dots.svg?component";
import PurpleMonster from "@/assets/images/departments/media/avatar-purple-monster.svg?component";
import BlueCutie from "@/assets/images/departments/media/avatar-blue-cutie.svg?component";
import Dinosaur from "@/assets/images/departments/media/avatar-dinosaur.svg?component";
import IconPencil from "@/assets/images/departments/icon-pencil.svg?component";
import IconSmile from "@/assets/images/departments/media/icon-smile.svg?component";
import IconPhoto from "@/assets/images/departments/media/icon-photo.svg?component";
import IconLocation from "@/assets/images/departments/media/icon-location.svg?component";
import IconPin from "@/assets/images/departments/media/icon-pin.svg?component";
import starBgUrl from "@/assets/images/departments/media/star-bg.svg?url";

/** 气泡样式：isYou 右侧蓝色，否则左侧白色带阴影；isLast 控制圆角形态 */
function bubbleClass(isYou: boolean, isLast: boolean) {
  return [
    "w-fit px-5 py-2 max-sm:text-sm sm:text-lg",
    isYou
      ? "bg-[#4AA3FF]"
      : "bg-[#FFF] shadow-[0_0_4px_0] shadow-[#DEE6F2]",
    isYou && isLast
      ? "rounded-l-[24px] rounded-br-[24px] rounded-tr-[4px]"
      : "",
    isYou && !isLast ? "rounded-l-[24px] rounded-r-[4px]" : "",
    !isYou && isLast
      ? "rounded-r-[24px] rounded-bl-[24px] rounded-tl-[4px]"
      : "",
    !isYou && !isLast ? "rounded-l-[4px] rounded-r-[24px]" : "",
  ];
}
</script>

<template>
  <section class="overflow-hidden rounded-xl border-[0.5px] bg-[#F6F8FC]">
    <!-- 顶部栏 -->
    <header
      class="flex h-[75px] items-center justify-between border-b-[0.5px] px-4 text-[#333] max-sm:py-2 sm:py-4"
    >
      <div class="text-2xl leading-[180%] tracking-[4.8px]">🎉招新啦🎉</div>
      <div class="cursor-pointer p-1">
        <IconDots class="h-8 w-8 opacity-40" />
      </div>
    </header>

    <!-- 聊天区域 -->
    <div class="h-[394px] w-full overflow-y-auto">
      <article
        class="flex flex-col gap-3 bg-repeat-y bg-top px-3 pb-10 pt-2 bg-[length:520px_auto] sm:bg-[length:820px_auto] lg:bg-[length:960px_auto]"
        :style="{ backgroundImage: `url(${starBgUrl})` }"
      >
        <!-- 你发出的消息 -->
        <section class="flex max-sm:gap-2 sm:gap-4 self-end">
          <div class="flex flex-col gap-[6px] text-white">
            <div class="flex items-baseline justify-end gap-4">
              <span class="max-sm:text-xs leading-[180%] opacity-50 sm:text-sm">
                05:04 PM
              </span>
              <span class="max-sm:text-sm leading-[180%] text-[#393939] sm:text-lg">
                You
              </span>
            </div>
            <div class="flex flex-col gap-[6px]">
              <div :class="bubbleClass(true, true)">
                新媒体组好酷啊！好想加！！❤
              </div>
            </div>
          </div>
          <PurpleMonster
            class="h-[36px] w-[36px] shrink-0 sm:h-[56px] sm:w-[56px]"
          />
        </section>

        <!-- 系统提示 -->
        <div
          class="max-sm:text-xs text-center leading-[180%] opacity-60 sm:text-base"
        >
          北邮人团队 新媒体组 拍了拍 你，并发送了一条加群邀请
        </div>

        <!-- 成员壹 -->
        <section class="flex max-sm:gap-2 sm:gap-4 self-start flex-row-reverse">
          <div class="flex flex-col gap-[6px] text-black">
            <div class="flex flex-row-reverse items-baseline justify-end gap-4">
              <span class="max-sm:text-xs leading-[180%] opacity-50 sm:text-sm">
                05:06 PM
              </span>
              <span class="max-sm:text-sm leading-[180%] text-[#393939] sm:text-lg">
                新媒体组某不知名成员壹
              </span>
            </div>
            <div class="flex flex-col gap-[6px]">
              <div :class="bubbleClass(false, false)">
                Hi，欢迎来到有趣灵魂聚集地新媒体组！ 我们是——
              </div>
              <div :class="bubbleClass(false, false)">＃生活观察员＃</div>
              <div :class="bubbleClass(false, false)" class="max-w-[640px]">
                在这里，与你同行，写你所想。<br />
                我们驻守在官方新媒体平台，捕捉校园生活中的小确幸、小美好，以图文定格北邮人的独家记忆。
              </div>
              <div :class="bubbleClass(false, true)" class="w-full">
                <div
                  class="flex justify-between max-sm:flex-col [&>div]:flex [&>div]:flex-col [&>div]:gap-[2px]"
                >
                  <div>
                    <div class="relative block w-fit">
                      <div
                        class="absolute bottom-0 box-content h-3/5 w-full pr-8 bg-gradient-to-r from-[#DAFF47] to-[#D9D9D900] opacity-40"
                      ></div>
                      <div
                        class="relative whitespace-nowrap text-center leading-[180%] max-sm:text-base sm:text-xl"
                      >
                        #春日邮啊邮：
                      </div>
                    </div>
                    <div class="flex items-start gap-1">
                      <a
                        class="max-sm:text-sm leading-[180%] underline sm:text-lg"
                        href="https://mp.weixin.qq.com/s/vI0UQ144QMib4nX00E_mNw"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        藏在北三环里的小众宝藏打卡地
                      </a>
                      <IconPencil class="h-[25px] w-6 shrink-0" />
                    </div>
                    <div class="flex items-start gap-1">
                      <a
                        class="max-sm:text-sm leading-[180%] underline sm:text-lg"
                        href="https://mp.weixin.qq.com/s/ADSExMLzODeZxSbGP_Lg2Q"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        北六环约会圣地，城区40min可达
                      </a>
                      <IconPencil class="h-[25px] w-6 shrink-0" />
                    </div>
                    <div class="flex items-start gap-1">
                      <a
                        class="max-sm:text-sm leading-[180%] underline sm:text-lg"
                        href="https://mp.weixin.qq.com/s/lC57Iya44k2g7KoiVcjtMw"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        春日邮花图鉴
                      </a>
                      <IconPencil class="h-[25px] w-6 shrink-0" />
                    </div>
                  </div>
                  <div>
                    <div class="relative block w-fit">
                      <div
                        class="absolute bottom-0 box-content h-3/5 w-full pr-8 bg-gradient-to-r from-[#DAFF47] to-[#D9D9D900] opacity-40"
                      ></div>
                      <div
                        class="relative whitespace-nowrap text-center leading-[180%] max-sm:text-base sm:text-xl"
                      >
                        #北邮爱情故事：
                      </div>
                    </div>
                    <div class="flex items-start gap-1">
                      <a
                        class="max-sm:text-sm leading-[180%] underline sm:text-lg"
                        href="https://mp.weixin.qq.com/s/Fg4ETkdX0Z1qlUBazAE7DA"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        BYR七夕不规则访谈
                      </a>
                      <IconPencil class="h-[25px] w-6 shrink-0" />
                    </div>
                    <div class="flex items-start gap-1">
                      <a
                        class="max-sm:text-sm leading-[180%] underline sm:text-lg"
                        href="https://mp.weixin.qq.com/s/oGQ9BGFT-Lt0YjMN4RoVGg"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        BYR520约会方式一览
                      </a>
                      <IconPencil class="h-[25px] w-6 shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlueCutie
            class="h-[36px] w-[36px] shrink-0 sm:h-[56px] sm:w-[56px]"
          />
        </section>

        <!-- 成员贰 -->
        <section class="flex max-sm:gap-2 sm:gap-4 self-start flex-row-reverse">
          <div class="flex flex-col gap-[6px] text-black">
            <div class="flex flex-row-reverse items-baseline justify-end gap-4">
              <span class="max-sm:text-xs leading-[180%] opacity-50 sm:text-sm">
                05:12 PM
              </span>
              <span class="max-sm:text-sm leading-[180%] text-[#393939] sm:text-lg">
                新媒体组某不知名成员贰
              </span>
            </div>
            <div class="flex flex-col gap-[6px]">
              <div :class="bubbleClass(false, false)">我们也是——</div>
              <div :class="bubbleClass(false, false)">＃浪漫的幻想家＃</div>
              <div :class="bubbleClass(false, false)">
                在这里，梦境碰撞现实，一切皆有可能。<br />
                我们点燃灵感的焰火，将天马行空的脑洞付诸笔下，摘星揽月、逐光织梦。
              </div>
              <div :class="bubbleClass(false, true)">
                <div class="flex items-start gap-1">
                  <a
                    class="max-sm:text-sm leading-[180%] underline sm:text-lg"
                    href="https://mp.weixin.qq.com/s/SPhbDiPZIETY8QqiC4rwSw"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    世界破破烂烂，小动物缝缝补补
                  </a>
                  <IconPencil class="h-[25px] w-6 shrink-0" />
                </div>
                <div class="flex items-start gap-1">
                  <a
                    class="max-sm:text-sm leading-[180%] underline sm:text-lg"
                    href="https://mp.weixin.qq.com/s/HCklNWP5T37ukMYtgPVYpg"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    超能力与副作用的化学反应
                  </a>
                  <IconPencil class="h-[25px] w-6 shrink-0" />
                </div>
              </div>
            </div>
          </div>
          <Dinosaur
            class="h-[36px] w-[36px] shrink-0 sm:h-[56px] sm:w-[56px]"
          />
        </section>
      </article>
    </div>

    <!-- 底部输入栏 -->
    <footer class="bg-white p-4">
      <div
        class="flex items-center justify-between rounded-full bg-[#F6F8FC] text-black/40 max-md:px-6 max-md:py-[6px] md:px-11 md:py-3"
      >
        <div
          class="border-r-[2px] max-sm:pr-3 sm:pr-6 [&>svg]:cursor-pointer [&>svg]:max-sm:h-5 [&>svg]:max-sm:w-5"
        >
          <IconPin class="h-[25px] w-6" />
        </div>
        <input
          class="min-w-0 bg-transparent py-[3px] outline-none placeholder:tracking-[2.16px] max-sm:shrink max-sm:px-4 sm:grow sm:px-7"
          type="text"
          placeholder="请输入..."
        />
        <div
          class="flex justify-between gap-4 sm:gap-5 md:gap-7 [&>svg]:cursor-pointer [&>svg]:max-sm:h-6 [&>svg]:max-sm:w-6"
        >
          <IconSmile class="h-[33px] w-8" />
          <IconPhoto class="h-[33px] w-8" />
          <IconLocation class="h-[33px] w-8" />
        </div>
      </div>
    </footer>
  </section>
</template>
