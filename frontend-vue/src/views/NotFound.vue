<template>
  <section class="flex">
    <div class="image-wrapper">
      <img src="@/assets/svg/404.svg" alt="" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IndexErrorLayout from "@/layouts/IndexErrorLayout.vue";

export default defineComponent({
  components: {},

  created() {
    this.$emit("update:layout", IndexErrorLayout);
  },
});
</script>

<style lang="scss" scoped>
section {
  padding: 30px;
  height: 100%;

  .image-wrapper {
    width: 100%;
    max-width: 500px;
    height: auto;
    max-height: 500px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
