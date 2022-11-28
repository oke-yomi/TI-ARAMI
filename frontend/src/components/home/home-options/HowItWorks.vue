<template lang="">
  <div class="options">
    <div class="options-title">
      <h3>how it works</h3>
      <span></span>
    </div>

    <ul>
      <li class="services">
        <div class="outer-img">
          <span class="service-img">
            <img :src="DressIcon" alt="" />
          </span>
        </div>

        <h6 class="service-title">Choose a Style</h6>

        <p class="service-text">
          Find your favourite style from any category in our lookbook.
        </p>
      </li>

      <span class="scissors">
        <img :src="Scissors" alt="" />
      </span>

      <li class="services">
        <div class="outer-img">
          <span class="service-img">
            <img :src="TapeIcon" alt="" />
          </span>
        </div>

        <h6 class="service-title">Send in body size</h6>

        <p class="service-text">
          Provide a details information of your body size.
        </p>
      </li>

      <span class="scissors">
        <img :src="Scissors" alt="" />
      </span>

      <li class="services">
        <div class="outer-img">
          <span class="service-img">
            <img :src="BagIcon" alt="" />
          </span>
        </div>

        <h6 class="service-title">Get your order</h6>

        <p class="service-text">
          Get your order after a stipulated time has been given to you.
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BagIcon from "@/assets/svg/bagIcon.svg";
import TapeIcon from "@/assets/svg/tapeIcon.svg";
import DressIcon from "@/assets/svg/dressIcon.svg";
import Scissors from "@/assets/svg/scissors.svg";

export default defineComponent({
  name: "HowItWorks",
  components: {
    // ActionButton,
  },
  data() {
    return {
      BagIcon: BagIcon,
      TapeIcon: TapeIcon,
      DressIcon: DressIcon,
      Scissors: Scissors,
    };
  },
});
</script>

<style lang="scss" scoped>
.options {
  padding: 24px 0;
  width: 100%;
  max-width: fit-content;

  .options-title {
    margin-bottom: 15px;

    h3 {
      font-family: "Lavish", serif, Arial;
      font-weight: 400;
      font-size: 40px;
      color: var(--secondary-color);
    }

    span {
      display: inline-block;
      margin-top: 12px;
      width: 64px;
      height: 1.5px;
      background: var(--primary-color);
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 12px;

    .services {
      width: 190px;
      .outer-img {
        padding: 5px;
        border-radius: 100%;
        background: #e7e7ec;

        width: fit-content;
        height: fit-content;

        margin-bottom: 16px;

        .service-img {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 87px;
          height: 87px;
          background: transparent;

          border: 1px solid var(--primary-color);
          border-radius: 100%;
        }
      }

      .service-title {
        font-weight: 700;
        font-size: 20px;

        text-transform: capitalize;
        color: var(--secondary-color);

        margin-bottom: 8px;
      }

      .service-text {
        font-weight: 500;
        font-size: 16px;

        color: var(--dark-gray);
      }
    }
  }

  @media (max-width: 1200px) {
    padding-top: 0;
    margin-top: -90px;

    ul {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;

      .services {
        width: 80%;
      }

      .scissors {
        display: none;
      }
    }

    @media (max-width: 860px) {
      padding: 24px 36px;
      width: 100%;
      max-width: 100%;
      margin-top: 0px;

      .options-title {
        h3 {
          font-size: 36px;
        }
      }

      ul {
        margin-top: 36px;

        .services {
          width: 230px;
        }
      }
    }
  }
}
</style>
