<template lang="">
  <div class="login-wrapper">
    <signup-section class="col" />
    <signup-image-box class="col" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SignupSection from "@/components/signup/SignupSection.vue";
import SignupImageBox from "@/components/signup/SignupImageBox.vue";

export default defineComponent({
  components: {
    SignupSection,
    SignupImageBox,
  },
});
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;

  .col {
    height: 100%;
    border: 1px solid green;
  }
}
</style>
