<template lang="">
  <div class="login-wrapper">
    <login-image-box class="col" />
    <login-section class="col" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginImageBox from "@/components/login/LoginImageBox.vue";
import LoginSection from "@/components/login/LoginSection.vue";

export default defineComponent({
  components: {
    LoginImageBox,
    LoginSection,
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
