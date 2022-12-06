<template>
  <button>
    <img :src="GoogleIcon" alt="" />
    {{ action }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GoogleIcon from "@/assets/svg/googleIcon.svg";

export default defineComponent({
  name: "GoogleAuthBtn",
  props: {
    action: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      GoogleIcon,
    };
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

  color: var(--primary-color);
  background: #ffffff;
  border: 2px solid var(--primary-color);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
</style>
