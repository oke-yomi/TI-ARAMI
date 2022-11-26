<template lang="">
  <section>
    <div class="selections-wrapper">
      <div class="dots1">
        <img :src="Dots" alt="" />
      </div>

      <ul>
        <li>1. about us</li>
        <li>2. our services</li>
        <li>3. how it works</li>
      </ul>
    </div>

    <div class="options-wrapper">
      <div class="">
        <div class="">
          <h3>about us</h3>
          <span>line</span>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo odio
          vestibulum, quis. Vestibulum turpis mattis consequat in suspendisse
          eget nibh sed. Vulputate adipiscing mauris rhoncus posuere praesent
          magna. Ullamcorper dolor enim parturient augue arcu viverra.
          Suspendisse cursus lacinia a viverra. Ac placerat tempus in vestibulum
          rutrum semper enim sed magna. Facilisis egestas morbi eget tristique
          massa in Read more...
        </p>
      </div>

      <div class="dots2">
        <img :src="Dots" alt="" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dots from "@/assets/svg/dots.svg";

export default defineComponent({
  name: "HomeOptions",
  components: {
    // ActionButton,
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
  border: 1px solid blue;
  display: flex;
  height: 554px;

  .options-wrapper,
  .selections-wrapper {
    border: 1px solid red;
  }

  li {
    font-family: "Lavish", serif, Arial;
    font-weight: 400;
    font-size: 32px;
    color: var(--dark-gray);
    padding: 40px 0 26px;
    border-top: 1px solid var(--dark-gray);

    &:last-of-type {
      border-bottom: 1px solid var(--dark-gray);
    }
  }
}
</style>
