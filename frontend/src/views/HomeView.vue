<template lang="">
  <div>
    <home-hero />
    <home-options />
    <look-book />
    <home-categories />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "@/components/home/HomeHero.vue";
import HomeOptions from "@/components/home/HomeOptions.vue";
import LookBook from "@/components/home/LookBook.vue";
import HomeCategories from "@/components/home/HomeCategories.vue";

export default defineComponent({
  components: {
    HomeHero,
    HomeOptions,
    LookBook,
    HomeCategories,
  },
});
</script>
