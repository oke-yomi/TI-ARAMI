<template lang="">
  <div class="options">
    <div class="options-title">
      <h3>our services</h3>
      <span></span>
    </div>

    <ul>
      <li class="services">
        <div class="outer-img">
          <span class="service-img">
            <img :src="Bespoke" alt="" />
          </span>
        </div>

        <h6 class="service-title">bespoke</h6>

        <p class="service-text">
          placerat tempus in vestibulum rutrum semper enim sed magna.
        </p>
      </li>

      <span class="scissors">
        <img :src="Scissors" alt="" />
      </span>

      <li class="services">
        <div class="outer-img">
          <span class="service-img">
            <img :src="Ready2wear" alt="" />
          </span>
        </div>

        <h6 class="service-title">Ready 2 wear</h6>

        <p class="service-text">
          placerat tempus in vestibulum rutrum semper enim sed magna.
        </p>
      </li>

      <span class="scissors">
        <img :src="Scissors" alt="" />
      </span>

      <li class="services">
        <div class="outer-img">
          <span class="service-img">
            <img :src="Beddings" alt="" />
          </span>
        </div>

        <h6 class="service-title">beddings</h6>

        <p class="service-text">
          placerat tempus in vestibulum rutrum semper enim sed magna.
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Beddings from "@/assets/svg/beddings.svg";
import Bespoke from "@/assets/svg/bespoke.svg";
import Ready2wear from "@/assets/svg/ready2wear.svg";
import Scissors from "@/assets/svg/scissors.svg";

export default defineComponent({
  name: "HomeServices",
  components: {
    // ActionButton,
  },
  data() {
    return {
      Beddings: Beddings,
      Bespoke: Bespoke,
      Ready2wear: Ready2wear,
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
    gap: 15px;

    .services {
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

        width: 190px;
      }
    }
  }

  @media (max-width: 1200px) {
    padding-top: 0;
    margin-top: -90px;

    ul {
      flex-wrap: wrap;
      gap: 15px;

      .scissors {
        display: none;
      }
    }

    @media (max-width: 860px) {
      padding: 24px 36px;
      width: 100%;
      max-width: 100%;

      .options-title {
        h3 {
          font-size: 36px;
        }
      }

      ul {
        margin-top: 36px;

        .service-text {
          width: 100%;
        }
      }
    }
  }
}
</style>
