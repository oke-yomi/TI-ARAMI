<template lang="">
  <div class="options">
    <section-heading heading="our services" />

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
            <img :src="DressIcon" alt="" />
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
import SectionHeading from "@/components/shared/SectionHeading.vue";
import Beddings from "@/assets/svg/beddings.svg";
import Bespoke from "@/assets/svg/bespoke.svg";
import DressIcon from "@/assets/svg/dressIcon.svg";
import Scissors from "@/assets/svg/scissors.svg";

export default defineComponent({
  name: "HomeServices",
  components: {
    SectionHeading,
  },
  data() {
    return {
      Beddings: Beddings,
      Bespoke: Bespoke,
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
