<template>
  <section class="hero-wrapper">
    <div class="image-container">
      <div class="image1">
        <img class="" src="@/assets/img/test_image.jpg" alt="" />
      </div>

      <div class="image2">
        <img class="" src="@/assets/img/test-image.jpg" alt="" />
      </div>
    </div>
    <!-- text box -->
    <div class="text-container">
      <h4>Express Your Female Beauty With Fashion</h4>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl massa
        tempor, quam congue sed est enim vitae eu.
      </p>

      <div class="btns">
        <action-button action="Shop Now" class="primary-btn" />
        <action-button brand="secondary" action="Custom Tailoring" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActionButton from "@/components/shared/ActionButton.vue";

export default defineComponent({
  name: "HomeHero",
  components: {
    ActionButton,
  },
});
</script>

<style lang="scss" scoped>
.hero-wrapper {
  display: flex;
  height: 604px;

  @media (max-width: 860px) {
    padding: 0 24px;
    height: fit-content;
  }

  .image-container {
    display: flex;
    gap: 20px;
    padding-top: 48px;
    height: 100%;
    width: 50%;

    @media (max-width: 860px) {
      display: none;
    }

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

      @media (max-width: 950px) {
        width: 100%;
      }
    }

    .image2 {
      width: 48%;
      border-radius: 200px 200px 0px 0px;
      overflow: hidden;

      @media (max-width: 950px) {
        display: none;
      }
    }
  }

  .text-container {
    height: 100%;
    width: 50%;
    padding: 60px 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 950px) {
      width: 85%;
      padding: 24px;

      @media (max-width: 860px) {
        width: 100%;
      }
    }

    h4 {
      font-family: var(--Lavish);
      color: var(--secondary-color);
      line-height: 1.5;

      font-weight: 400;
      font-size: 36px;
      margin-bottom: 28px;
    }

    p {
      margin-bottom: 46px;
      max-width: 360px;
      width: 100%;
    }

    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 28px;

      @media (max-width: 430px) {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
}
</style>
