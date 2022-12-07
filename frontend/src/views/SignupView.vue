<template lang="">
  <div class="signup-wrapper">
    <signup-section class="col" />
    <signup-image-box class="col" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlainLayout from "@/layouts/PlainLayout.vue";

import SignupSection from "@/components/signup/SignupSection.vue";
import SignupImageBox from "@/components/signup/SignupImageBox.vue";

export default defineComponent({
  components: {
    SignupSection,
    SignupImageBox,
  },

  created() {
    this.$emit("update:layout", PlainLayout);
  },
});
</script>

<style lang="scss" scoped>
.signup-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  overflow: hidden;

  .col {
    height: 100%;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
}
</style>
