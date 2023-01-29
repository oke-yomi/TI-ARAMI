<template>
  <section class="flex">
    <div class="image img-1"><img src="@/assets/img/image-3.jpg" alt="" /></div>

    <div class="text">
      <h3>Giving you the best fashion style</h3>
      <p>Know right away what TI ARÀMI is all about</p>
    </div>

    <div class="image img-2"><img src="@/assets/img/image-4.jpg" alt="" /></div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutHero",
});
</script>

<style lang="scss" scoped>
section {
  padding: 100px;
  min-height: 604px;

  justify-content: space-between;
  gap: 24px;

  .image {
    width: 291px;
    height: 296px;
    position: relative;

    &::before {
      content: "";
      width: 121px;
      height: 100px;
      background-color: var(--secondary-color);
      position: absolute;
      z-index: -1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .img-1 {
    align-self: flex-start;

    &::before {
      bottom: -24px;
      left: -24px;
    }
  }

  .img-2 {
    align-self: flex-end;

    &::before {
      bottom: -24px;
      right: -24px;
      background-color: var(--primary-color);
    }
  }

  .text {
    text-align: center;
    width: 30%;

    h3 {
      font-family: var(--Lavish);
      font-weight: 400;
      font-size: 36px;
      line-height: 58px;
      text-align: center;

      margin-bottom: 16px;
    }

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: var(--dark-gray);
    }
  }

  @media (max-width: 1200px) {
    padding: 60px;

    .img-1 {
      display: none;
    }

    .text {
      width: 60%;
    }

    @media (max-width: 680px) {
      padding: 40px;

      .img-2 {
        display: none;
      }

      .text {
        width: 90%;
      }
    }
  }
}
</style>
