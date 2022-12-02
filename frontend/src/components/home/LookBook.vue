<template lang="">
  <section>
    <div class="col-1 col">
      <div class="text">
        <h3>Lookbook</h3>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo odio
          vestibulum, quis. Vestibulum turpis mattis consequat in suspendisse
          eget nibh sed.
        </p>
      </div>

      <div class="image-1">
        <img src="@/assets/img/test_image.jpg" alt="" />
      </div>
    </div>

    <div class="col-2 col">
      <div class="image-2">
        <img src="@/assets/img/test-image.jpg" alt="" />
      </div>

      <div class="arrows">
        <button><img :src="ArrowLeft" alt="" /></button>
        <!-- <img :src="Ecllipse" alt="" /> -->
        <button><img :src="ArrowRight" alt="" /></button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArrowLeft from "@/assets/svg/arrowLeft.svg";
import ArrowRight from "@/assets/svg/arrowRight.svg";
import Ecllipse from "@/assets/svg/ecllipse.svg";

export default defineComponent({
  name: "LookBook",
  data() {
    return {
      ArrowLeft: ArrowLeft as string,
      ArrowRight: ArrowRight as string,
      Ecllipse: Ecllipse as string,
    };
  },
});
</script>

<style lang="scss" scoped>
section {
  border: 13px solid green;
  height: 982px;
  width: 100%;
  padding: 100px;
  display: grid;
  gap: 20px;
  grid-template-columns: 2.2fr 1fr;

  .col {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  // img {
  //   object-fit: cover;
  //   width: 100%;
  //   height: 100%;
  // }

  .col-1 {
    h3 {
      font-family: "Lavish", serif, Arial;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      text-transform: uppercase;
      margin-bottom: 30px;
    }

    .desc {
      display: block;
      width: 451px;
      font-weight: 500;
      font-size: 16px;
      padding: 0 12px;

      border-left: 1px solid var(--primary-color);
      color: var(--dark-gray);
    }

    .image-1 {
      width: 100%;
      height: 584px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  .col-2 {
    .image-2 {
      height: 550px;
      width: 100%;
      border-top-left-radius: 60px;

      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .arrows {
      padding: 26px 36px;
      width: 100%;
      height: 48px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        display: block;
        height: fit-content;
        width: fit-content;

        background-color: inherit;
        cursor: pointer;
        border: none;
      }
    }
  }
}
</style>
