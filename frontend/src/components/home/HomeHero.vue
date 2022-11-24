<template>
  <section class="hero-wrapper">
    <div class="image-container">
      <div class="image1">
        <img class="" src="@/assets/img/test_image.jpg" alt="" />
      </div>

      <div class="image2">
        <img class="" src="@/assets/img/test_image.jpg" alt="" />
      </div>
    </div>
    <!-- text box -->
    <div class="text-container">
      <h4>Express Your Female Beauty With Fashion</h4>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeHero",
});
</script>

<style lang="scss" scoped>
.hero-wrapper {
  // background: var(--primary-color);
  display: flex;
  height: 604px;

  .image-container {
    display: flex;
    gap: 20px;
    padding-top: 48px;
    height: 100%;
    width: 50%;
    border: 1px solid red;

    img {
      height: 100%;
      width: 100%;
      display: block;
      object-fit: cover;
    }

    .image1 {
      width: 52%;
      border-radius: 0px 100px 0px 0px;
      overflow: hidden;
    }

    .image2 {
      width: 48%;
      border-radius: 200px 200px 0px 0px;
      overflow: hidden;
    }
  }

  .text-container {
    h4 {
      font-family: "Lavish", serif, Arial;
      font-weight: 400;
      font-size: 36px;
      color: var(--secondary-color);
    }
  }
}
</style>
