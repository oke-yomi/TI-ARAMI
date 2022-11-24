<template lang="">
  <div>
    <home-hero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHero from "@/components/home/HomeHero.vue";

export default defineComponent({
  components: {
    HomeHero,
  },
});
</script>
