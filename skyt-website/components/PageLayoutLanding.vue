<template>
  <div>
    <div id="first" class="min-h-screen lg:grid lg:grid-rows-6 gap-4 lg:grid-flow-col bg-color3 font-mono text-slate-300 ">
      <div class="lg:relative lg:row-span-2 lg:row-span-2 pl-4 lg:pl-10 pt-10">
        <div id="headtag" ref="headtag" class="opacity-0">
          <span class="text-8xl lg:text-9xl"><slot name="title"></slot></span>
        </div>
        <div ref="nametag" class="opacity-0">
          <p class="pb-5 text-2xl lg:text-6xl">
            <slot name="subtitle"></slot>
          </p>
        </div>
        <slot name="menu">

        </slot>
      </div>
      <slot name="content">
      </slot>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import {fadeIn} from "~/utils/fadeFunctions";

const headtag = ref(null);
const nametag = ref(null);
const about_text = ref(null);

onMounted(() => {
  fadeIn(0, headtag.value);
  fadeIn(0, nametag.value);
  fadeIn(1300, about_text.value);
});
</script>