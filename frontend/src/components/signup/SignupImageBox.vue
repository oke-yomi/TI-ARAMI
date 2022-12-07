<template lang="">
  <div class="signup-image-wrapper">
    <div class="svg">
      <img src="@/assets/svg/bgLayout.svg" alt="" />
    </div>

    <div class="signup-image">
      <img src="@/assets/img/signupImage.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignupImageBox",
});
</script>

<style lang="scss" scoped>
.signup-image-wrapper {
  background: #eeda89;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  .svg {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .signup-image {
    width: 520px;
    height: 558px;
    z-index: 99;

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 860px) {
    display: none;
  }
}
</style>
