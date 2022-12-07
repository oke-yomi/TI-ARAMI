<template lang="">
  <div class="layout-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlainLayout",
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100vh;
  width: 100vw;
}
</style>
