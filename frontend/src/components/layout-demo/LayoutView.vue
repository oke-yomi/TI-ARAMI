<template lang="">
  <header-view />

  <main class="layout-wrapper">
    <router-view />
  </main>

  <footer-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderView from "@/components/layout/Header.vue";
import FooterView from "@/components/layout/Footer.vue";

export default defineComponent({
  name: "LayoutView",
  components: {
    HeaderView,
    FooterView,
  },
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  min-height: calc(100vh - 80px);
}
</style>
