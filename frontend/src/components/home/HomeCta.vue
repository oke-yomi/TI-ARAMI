<template lang="">
  <section>
    <div class="cta-image-wrapper col">
      <img src="@/assets/img/image-1.jpg" alt="" />

      <div class="small-image">
        <img src="@/assets/img/image-1.jpg" alt="" />
      </div>
    </div>

    <div class="cta-text-wrapper col">
      <section-heading heading="Custom Tailoring" />

      <p class="text-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo odio
        vestibulum, quis. Vestibulum turpis mattis consequat in suspendisse eget
        nibh sed. Vulputate adipiscing mauris rhoncus posuere praesent magna.
        Ullamcorper dolor enim parturient augue arcu viverra. Suspendisse cursus
        lacinia a viverra. Ac placerat tempus in vestibulum rutrum semper enim
        sed magna. Facilisis egestas morbi eget tristique massa in fermentum
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo odio
        vestibulum, quis. Vestibulum turpis mattis consequat in suspendisse eget
        nibh sed.
      </p>

      <div class="btns">
        <action-button action="Order Tailoring" class="primary-btn" />
        <router-link class="link" to="/about">View More</router-link>
      </div>
    </div>

    <div class="dots">
      <img :src="Dots" alt="" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dots from "@/assets/svg/dots.svg";
import ActionButton from "@/components/shared/ActionButton.vue";
import SectionHeading from "@/components/shared/SectionHeading.vue";

export default defineComponent({
  name: "HomeCta",
  components: {
    ActionButton,
    SectionHeading,
  },
  data() {
    return {
      Dots,
    };
  },
});
</script>

<style lang="scss" scoped>
section {
  height: 788px;
  width: 100%;
  padding: 100px;
  display: grid;
  gap: 176px;
  grid-template-columns: 1fr 1fr;

  .col {
    height: 100%;
  }

  .dots {
    height: fit-content;
    width: fit-content;

    position: absolute;
    right: 0;
    bottom: 10px;

    @media (max-width: 1250px) {
      display: none;
    }

    img {
      object-fit: contain;
    }
  }

  .cta-image-wrapper {
    height: 588px;
    width: 100%;

    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .small-image {
      width: 171px;
      height: 312px;

      border-radius: 200px 200px 0px 0px;
      overflow: hidden;

      position: absolute;
      top: 138px;
      right: -90px;
    }
  }

  .cta-text-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .text-body {
      margin: 12px 0 48px;
      font-weight: 500;
      font-size: 16px;
      color: var(--dark-gray);
    }

    .btns {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 32px;

      .link {
        font-weight: 700;
        font-size: 16px;
        color: var(--dark-gray);

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  @media (max-width: 1250px) {
    padding: 60px;
    gap: 60px;

    .small-image {
      display: none;
    }

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      padding: 60px;
      height: fit-content;
      gap: 48px;

      .btns {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
}
</style>
