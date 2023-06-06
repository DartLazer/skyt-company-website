<template>
  <div>
    <PageLayoutLanding>
      <template v-slot:title>Sky-T</template>
      <template v-slot:subtitle>Top notch IT services</template>
      <template v-slot:menu>
        <Menu/>
      </template>
      <template v-slot:content>
        <div class="row-span-2 lg:row-span-3 pl-3 pt-10 text-color3 min-w-[70%] lg:justify-self-end lg:text-right">
          <div ref="block" class="bg-color4 p-5 opacity-0
        text:text-sm lg:text-2xl max-w-full lg:h-[80%] lg:max-w-8xl  ">
            <div ref="fourth_line" class="opacity-70 lg:pb-5 lg:pl-20 h-full">
              <div class="">
                <p class="text-2xl lg:text-6xl min-[2100px]:text-8xl pb-5 pr-5"><strong>Freelance IT
                  Development</strong></p>
                <i>
                  <p class="lg:pb-20 lg:text-4xl min-[2100px]:text-4xl pr-5">Available on short notice</p>
                  <p class="lg:text-4xl min-[2100px]:text-4xl pr-5">Providing you with the best possible value for your
                    investment</p>
                  <p class="lg:text-4xl min-[2100px]:text-4xl pr-5">so you can focus on
                    what really matters</p></i>
                <p class="text-2xl lg:text-6xl min-[2100px]:text-8xl pb-5 max-lg:pt-5 pr-5"><strong>Growing your business</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:relative lg:row-span-1 text-4xl pt-10 text-right pl-5 lg:pl-10 ">
          <div ref="third_line" class="opacity-0">
            <!--            <p class="lg:absolute lg:bottom-5 ">Rik Beernink </p>-->
            <span ref="arrow" class="opacity-0">
            <NuxtLink to="/services" class="lg:absolute lg:right-[50%] lg:bottom-10 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg>
              </NuxtLink>
            </span>
          </div>
        </div>
      </template>
    </PageLayoutLanding>




  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import Menu from "~/components/Menu.vue";
import {fadeIn, fadeinBlock} from "~/utils/fadeFunctions";
import PageLayoutLanding from "~/components/PageLayoutLanding.vue";

const headline = ref(null);
const second_line = ref(null);
const third_line = ref(null);
const fourth_line = ref(null);
const block = ref(null);
const arrow = ref(null);

onMounted(() => {
  fadeIn(0, headline.value);
  fadeIn(0, second_line.value);
  fadeIn(0, third_line.value);
  fadeIn(0, fourth_line.value);
  fadeinBlock(1000, block.value);
  fadeIn(3000, arrow.value);
});
</script>
