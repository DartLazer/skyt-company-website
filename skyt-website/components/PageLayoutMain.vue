<template>
  <div>
    <div class="min-h-screen lg: gap-4 lg:grid-flow-col bg-color3 font-mono text-slate-300 ">
      <div class="lg:pl-10 lg:pt-10 max-lg:p-2">
        <div id="headtag" ref="headtag" class="opacity-0">
          <span class="text-6xl lg:text-9xl"><slot name="title"></slot></span>
        </div>
        <div ref="nametag" class="opacity-0">
          <p class="pb-5 text-2xl text-color2 lg:text-4xl">
            <slot name="subtitle"></slot>
          </p>
        </div>
        <Menu/>
      </div>
      <div class="row-span-2 relative">
        <slot name="content">
        </slot>
      </div>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import {fadeIn} from "~/utils/fadeFunctions";

const headtag = ref(null);
const nametag = ref(null);
const content = ref(null);

onMounted(() => {
  fadeIn(0, headtag.value);
  fadeIn(0, nametag.value);
  fadeIn(1300, content.value);
});
</script>