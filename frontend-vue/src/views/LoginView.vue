<template lang="">
  <div class="login-wrapper">
    <login-image-box class="col" />
    <login-section class="col" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlainLayout from "@/layouts/PlainLayout.vue";

import LoginImageBox from "@/components/login/LoginImageBox.vue";
import LoginSection from "@/components/login/LoginSection.vue";

export default defineComponent({
  components: {
    LoginImageBox,
    LoginSection,
  },

  created() {
    this.$emit("update:layout", PlainLayout);
  },
});
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  .col {
    height: 100%;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
}
</style>
