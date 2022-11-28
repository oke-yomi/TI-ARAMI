<template lang="">
  <div class="options">
    <div class="options-title">
      <h3>about us</h3>
      <span></span>
    </div>

    <p class="about-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo odio
      vestibulum, quis. Vestibulum turpis mattis consequat in suspendisse eget
      nibh sed. Vulputate adipiscing mauris rhoncus posuere praesent magna.
      Ullamcorper dolor enim parturient augue arcu viverra. Suspendisse cursus
      lacinia a viverra. Ac placerat tempus in vestibulum rutrum semper enim sed
      magna. Facilisis egestas morbi eget tristique massa in
      <router-link class="link" to="/about">Read More...</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeAbout",
  components: {
    // ActionButton,
  },
  data() {
    return {
      // Dots: Dots,
    };
  },
});
</script>

<style lang="scss" scoped>
.options {
  padding: 24px 0;
  width: 100%;
  max-width: 451px;

  .options-title {
    margin-bottom: 12px;

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

  .about-text {
    font-weight: 500;
    font-size: 16px;
    color: var(--dark-gray);

    .link {
      color: var(--secondary-color);
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

    .about-text {
      font-weight: 500;
      font-size: 16px;
      color: var(--dark-gray);

      .link {
        color: var(--secondary-color);
      }
    }
  }
}
</style>
