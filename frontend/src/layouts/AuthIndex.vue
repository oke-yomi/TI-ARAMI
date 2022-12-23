<template lang="">
  <auth-header />

  <main class="layout-wrapper">
    <slot />
  </main>

  <auth-sidebar />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthHeader from "@/layouts/authLayout/AuthHeader.vue";
import AuthSidebar from "@/layouts/authLayout/AuthSidebar.vue";

export default defineComponent({
  name: "AuthIndex",
  components: {
    AuthHeader,
    AuthSidebar,
  },
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  min-height: calc(100vh - 80px);
}
</style>
