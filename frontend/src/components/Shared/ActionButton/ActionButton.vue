<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<style scoped>
button {
  @apply py-2 px-11 border-none rounded-tr-[20px] rounded-bl-[20px];
}

.primary {
  @apply bg-primary text-white;
}

.secondary {
  @apply bg-secondary text-white;
}
</style>
