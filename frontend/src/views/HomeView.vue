<template lang="">
  <div>
    <home-hero />
    <home-options />
    <look-book />
    <home-categories />
    <home-cta />

    <div class="unique-style">
      <h3 class="unique-style-heading">unique style</h3>
      <p class="unique-style-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo odio
        vestibulum, quis. Vestibulum turpis mattis consequat in suspendisse
      </p>

      <div class="unique-style-btns">
        <action-button action="Shop Now" />
        <action-button brand="secondary" action="Custom Tailoring" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Index from "@/layouts/Index.vue";

import HomeHero from "@/components/home/HomeHero.vue";
import HomeOptions from "@/components/home/HomeOptions.vue";
import LookBook from "@/components/home/LookBook.vue";
import HomeCategories from "@/components/home/HomeCategories.vue";
import HomeCta from "@/components/home/HomeCta.vue";
import ActionButton from "@/components/shared/ActionButton.vue";

export default defineComponent({
  components: {
    HomeHero,
    HomeOptions,
    LookBook,
    HomeCategories,
    HomeCta,
    ActionButton,
  },

  created() {
    this.$emit("update:layout", Index);
  },
});
</script>

<style lang="scss" scoped>
.unique-style {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/img/unique-style-bg.png") no-repeat center center/cover;
  min-height: 426px;
  width: 100%;
  padding: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--white);

  .unique-style-heading {
    font-weight: 400;
    font-size: 40px;
    color: var(--primary-color);
    font-family: "Lavish", serif, Arial;
  }

  .unique-style-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    margin: 12px 0 26px;

    width: 40%;
  }

  .unique-style-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
  }

  // media query
  @media (max-width: 860px) {
    padding: 30px;

    .unique-style-heading {
      font-size: 36px;
    }

    .unique-style-text {
      width: 100%;
    }
  }
}
</style>
