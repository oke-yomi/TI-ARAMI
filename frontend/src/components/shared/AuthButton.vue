<template>
  <button type="submit">
    {{ action }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthButton",
  props: {
    action: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  padding: 15px 42px;
  font-weight: 700;
  font-size: 18px;
  border-radius: 50px;
  border: none;
  outline: none;
  display: inline-block;
  width: 100%;

  white-space: nowrap;
  text-transform: capitalize;
  cursor: pointer;

  color: #ffffff;
  background: var(--primary-color);
}
</style>
