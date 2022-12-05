<template lang="">
  <div class="text-heading">
    <h3>{{ heading }}</h3>
    <span></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionHeading",
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.text-heading {
  margin-bottom: 12px;

  h3 {
    font-family: "Lavish", serif, Arial;
    font-weight: 400;
    font-size: 40px;
    color: var(--secondary-color);
  }

  span {
    display: block;
    margin-top: 12px;
    width: 64px;
    height: 1.5px;
    background: var(--primary-color);
  }

  @media (max-width: 860px) {
    font-size: 36px;
  }
}
</style>
