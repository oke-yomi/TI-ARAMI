<template>
  <div class="about">
    <about-hero />
    <about-story />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Index from "@/layouts/Index.vue";

import AboutHero from "@/components/about/AboutHero.vue";
import AboutStory from "@/components/about/AboutStory.vue";

export default defineComponent({
  components: {
    AboutHero,
    AboutStory,
  },

  created() {
    this.$emit("update:layout", Index);
  },
});
</script>
