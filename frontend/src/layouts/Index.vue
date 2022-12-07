<template lang="">
  <index-header />

  <main class="layout-wrapper">
    <slot />
  </main>

  <index-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IndexHeader from "@/layouts/indexLayout/IndexHeader.vue";
import IndexFooter from "@/layouts/indexLayout/IndexFooter.vue";

export default defineComponent({
  name: "Index",
  components: {
    IndexHeader,
    IndexFooter,
  },
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  min-height: calc(100vh - 80px);
}
</style>
