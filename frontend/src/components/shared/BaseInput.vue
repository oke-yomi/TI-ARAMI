<template>
  <div class="input-group">
    <label :for="Input" class="label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :type="type"
        :name="Input"
        :id="Input"
        :placeholder="placeholder"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Envelope from "@/assets/svg/envelope.svg";

export default defineComponent({
  name: "BaseInput",
  props: {
    type: {
      type: String,
      required: true,
    },
    Input: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Your text gies here",
    },
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      Envelope,
    };
  },
  methods: {
    // handleInputChange(): (event: Event) =>
    //   (event.target as HTMLInputElement).value
  },
});
</script>

<style lang="scss" scoped>
.input-group {
  width: 100%;
  margin-top: 24px;

  .label {
    font-weight: 600;
    font-size: 18px;
    color: var(--black);
    text-transform: capitalize;
    margin-bottom: 8px;
    display: block;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    gap: 10px;

    background: #f1f1f1;
    height: 52px;
    padding: 16px 20px;
    border-radius: 50px;

    input {
      flex: 1 1 0%;
      height: 100%;
      font-weight: 500;
      font-size: 16px;

      background-color: inherit;
      color: var(--dark-gray);
      border: none;
      outline: none;

      &::placeholder {
        color: #bfbfbf;
      }
    }

    &:focus-within {
      border: 2px solid var(--primary-color);
    }
  }
}
</style>
