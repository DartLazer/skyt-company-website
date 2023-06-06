<template>
  <div>
    <div class="lg:absolute lg:right-[4rem] lg:top-[5rem] text-xl lg:text-4xl  lg:pb-10 ">
      <p ref="menu1" class="opacity-0">
        <NuxtLink :key="$route.fullPath" class="lg:text-color1 hover:text-indigo-200 hover:font-bold" to="/">Home</Nuxtlink>
      </p>
      <p ref="menu2" class="opacity-0">
        <NuxtLink :key="$route.fullPath" class="lg:text-color1 hover:text-indigo-200  hover:font-bold " to="/about">About me</Nuxtlink>
      </p>
      <p ref="menu3" class="opacity-0">
        <NuxtLink :key="$route.fullPath" class="lg:text-color1 hover:text-indigo-200 hover:font-bold " to="/services">Services</Nuxtlink>
      </p>
      <p ref="menu4" class="opacity-0">
      <NuxtLink :key="$route.fullPath" class="lg:text-color1 hover:text-indigo-200 hover:font-bold " to="/contact">Contact</Nuxtlink>
      </p>
    </div>
  </div>
</template>

<script>
import {fadeIn} from "~/utils/fadeFunctions";

export default {
  mounted() {

    fadeIn(500, this.$refs['menu1'])
    fadeIn(800, this.$refs['menu2'])
    fadeIn(1100, this.$refs['menu3'])
    fadeIn(1400, this.$refs['menu4'])
  }
}
</script>