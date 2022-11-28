<template lang="">
  <section>
    <div class="selections-wrapper">
      <div class="dots dots1">
        <img :src="Dots" alt="" />
      </div>

      <ul>
        <li class="selections">
          <p class="selection-text"><span class="num">1.</span> about us</p>
        </li>
        <li class="selections">
          <p class="selection-text"><span class="num">2.</span> our services</p>
        </li>
        <li class="selections">
          <p class="selection-text"><span class="num">3.</span> how it works</p>
        </li>
      </ul>
    </div>

    <div class="options-wrapper">
      <!-- <home-about /> -->
      <!-- <home-services /> -->
      <how-it-works />

      <div class="dots dots2">
        <img :src="Dots" alt="" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dots from "@/assets/svg/dots.svg";
import HomeAbout from "./home-options/HomeAbout.vue";
import HomeServices from "./home-options/HomeServices.vue";
import HowItWorks from "./home-options/HowItWorks.vue";

export default defineComponent({
  name: "HomeOptions",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HomeAbout,
    // eslint-disable-next-line vue/no-unused-components
    HomeServices,
    // eslint-disable-next-line vue/no-unused-components
    HowItWorks,
  },
  data() {
    return {
      Dots: Dots,
    };
  },
});
</script>

<style lang="scss" scoped>
section {
  display: flex;
  gap: 60px;
  height: 554px;
  overflow: hidden;

  @media (max-width: 1200px) {
    gap: 5px;
    height: fit-content;

    @media (max-width: 860px) {
      flex-direction: column;
      // height: fit-content;
      gap: 0px;

      border-top: 1px solid #e4e4e4;
    }
  }

  .dots {
    height: fit-content;
    width: fit-content;

    @media (max-width: 1250px) {
      display: none;
    }

    img {
      object-fit: contain;
    }
  }

  .selections-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    ul {
      height: 100%;
      padding: 100px 44px;

      .selections {
        border-top: 1px solid var(--dark-gray);
        width: 400px;
        padding: 40px 0 26px;

        &:last-of-type {
          border-bottom: 1px solid var(--dark-gray);
        }

        .selection-text {
          font-family: "Lavish", serif, Arial;
          cursor: pointer;
          text-transform: uppercase;
          font-weight: 400;
          font-size: 32px;
          color: var(--dark-gray);

          width: 100%;
          height: 100%;

          &:hover {
            color: var(--black);
            font-weight: 600;
          }
        }
      }
    }

    @media (max-width: 860px) {
      display: block;

      ul {
        padding: 30px 16px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .selections {
          border: none;
          width: fit-content;
          padding: 10px 16px;
          text-align: center;

          &:last-of-type {
            border: none;
          }

          .selection-text {
            padding-bottom: 15px;
            font-size: 16px;
            border-bottom: 1px solid var(--dark-gray);

            .num {
              display: none;
            }
          }
        }
      }
    }
  }

  .options-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    padding-top: 124px;
    border: 1px solid red;

    @media (max-width: 1200px) {
      // padding-top: 16px;

      @media (max-width: 860px) {
        display: block;
        padding-top: 48px;
      }
    }
  }
}
</style>
