<template>
  <section class="flex">
    <div class="image-wrapper">
      <img src="@/assets/svg/error.svg" alt="" />
    </div>
    <p>It’s not you it’s us</p>
    <action-button action="Try again" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import IndexErrorLayout from "@/layouts/IndexErrorLayout.vue";
import ActionButton from "@/components/shared/ActionButton.vue";

export default defineComponent({
  components: {
    ActionButton,
  },

  created() {
    this.$emit("update:layout", IndexErrorLayout);
  },
});
</script>

<style lang="scss" scoped>
section {
  padding: 30px;
  height: 100%;
  flex-direction: column;

  .image-wrapper {
    width: 100%;
    max-width: 276px;
    height: auto;
    max-height: 276px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  p {
    font-weight: 700;
    font-size: 25px;
    color: var(--black);
    margin: 28px 36px;
  }
}
</style>
