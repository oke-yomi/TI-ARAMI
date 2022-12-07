<template lang="">
  <div class="login-image-wrapper">
    <div class="svg">
      <img src="@/assets/svg/bgLayout.svg" alt="" />
    </div>

    <div class="login-image">
      <img src="@/assets/img/loginImage.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginImageBox",
});
</script>

<style lang="scss" scoped>
.login-image-wrapper {
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

  .login-image {
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
