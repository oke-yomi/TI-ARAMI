<template lang="">
  <div>
    <home-hero />
    <home-options />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "@/components/home/HomeHero.vue";
import HomeOptions from "@/components/home/HomeOptions.vue";

export default defineComponent({
  components: {
    HomeHero,
    HomeOptions,
  },
});
</script>
