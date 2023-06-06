<template>
  <div class="">
      <NuxtPage/>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 50;
  filter: blur(10rem);
}
</style>

<script>
export default {
  components: {}
}
</script>