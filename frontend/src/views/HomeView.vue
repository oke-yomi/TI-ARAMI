<template lang="">
  <div>
    <home-hero />
    <home-options />
    <look-book />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "@/components/home/HomeHero.vue";
import HomeOptions from "@/components/home/HomeOptions.vue";
import LookBook from "@/components/home/LookBook.vue";

export default defineComponent({
  components: {
    HomeHero,
    HomeOptions,
    LookBook,
  },
});
</script>
