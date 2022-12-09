<template lang="">
  <index-header />

  <main class="layout-wrapper">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IndexHeader from "@/layouts/indexLayout/IndexHeader.vue";

export default defineComponent({
  name: "IndexErrorLayout",
  components: {
    IndexHeader,
  },
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: calc(100vh - 80px);
}
</style>
