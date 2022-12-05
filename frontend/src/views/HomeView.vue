<template lang="">
  <div>
    <home-hero />
    <home-options />
    <look-book />
    <home-categories />
    <home-cta />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "@/components/home/HomeHero.vue";
import HomeOptions from "@/components/home/HomeOptions.vue";
import LookBook from "@/components/home/LookBook.vue";
import HomeCategories from "@/components/home/HomeCategories.vue";
import HomeCta from "@/components/home/HomeCta.vue";

export default defineComponent({
  components: {
    HomeHero,
    HomeOptions,
    LookBook,
    HomeCategories,
    HomeCta,
  },
});
</script>
