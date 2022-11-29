<template>
  <router-link to="signup" :class="buttonClass">{{ action }}</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActionButton",
  props: {
    action: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      default: "primary",
      validator: (value: string) => {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.brand]: true,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
a {
  padding: 9px 42px;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 0px 20px;
  border: none;
  display: inline-block;
  width: fit-content;

  white-space: nowrap;
}

.primary {
  color: #ffffff;
  background: var(--primary-color);
}

.secondary {
  color: var(--primary-color);
  background: #ffffff;
  border: 2px solid var(--primary-color);
}

.tertiary {
  color: #ffffff;
  background: var(--secondary-color);
}
</style>
