<template lang="">
  <div class="dropdown-wrapper">
    <div
      @click="isVisible = !isVisible"
      :class="isVisible ? 'thick-border' : ''"
      class="selected-category flex"
    >
      <span>{{ selectedCategory }}</span>
      <svg
        :class="isVisible ? 'dropdown' : ''"
        class="dropdown-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"
        />
      </svg>
    </div>

    <div :class="isVisible ? 'visible' : 'invisible'" class="dropdown-popover">
      <ul class="options">
        <li
          @click="selectCategory(selection)"
          v-for="selection in selections"
          :key="selection"
        >
          {{ selection }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectBox",
  components: {},
  data() {
    return {
      selectedCategory: "all" as string,
      isVisible: false,

      selections: [
        "all",
        "skirts",
        "tops",
        "pants",
        "jumpsuits",
        "gowns",
        "beddings",
      ],
    };
  },
  methods: {
    selectCategory(selection: string) {
      this.selectedCategory = selection;

      this.isVisible = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  position: relative;
  margin-bottom: 28px;
  width: 209px;
  font-weight: 500;
  font-size: 20px;
  text-transform: capitalize;

  .selected-category {
    width: 209px;
    height: 64px;
    border: 0.5px solid var(--primary-color);
    border-radius: 5px;

    padding: 16px 20px;

    justify-content: space-between;
    background-color: var(--white);
    cursor: pointer;

    &.thick-border {
      border: 2px solid var(--primary-color);
    }

    &:hover {
      border: 2px solid var(--primary-color);
    }

    .dropdown-icon {
      transform: rotate(0deg);
      transition: all 0.5s ease;

      &.dropdown {
        transform: rotate(180deg);
      }
    }
  }

  .dropdown-popover {
    position: absolute;
    border: 0.5px solid lightgray;
    top: 64px;
    left: 0;
    right: 0;
    max-width: 100%;
    background-color: var(--white);
    padding: 16px;

    visibility: hidden;
    transition: all 0.4s ease;
    opacity: 0;
    max-height: 0px;
    overflow: hidden;

    &.visible {
      visibility: visible;
      max-height: 240px;
      opacity: 1;
    }

    .options {
      max-height: 200px;
      overflow-y: scroll;

      /* width */
      &::-webkit-scrollbar {
        width: 5px;
      }
      /* Track */
      &::-webkit-scrollbar-track {
        background: #dedede;
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: var(--dark-gray);
        border-radius: 10px;
      }
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: var(--dark-gray);
      }

      li {
        width: 100%;
        border-bottom: 0.5px solid lightgray;
        padding: 10px;
        background-color: #f1f1f1;
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;

        &:hover {
          background-color: var(--primary-color);
          color: var(--white);
          font-weight: 700;
        }
      }
    }
  }
}
</style>
