<template>
  <component :is="layout">
    <router-view v-model:layout="layout" />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      layout: `div`,
    };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");

@font-face {
  font-family: "Lavish";
  src: local("Lavish"), url("@/fonts/Lavish.ttf") format("truetype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}

:root {
  --primary-color: #d4aa00;
  --secondary-color: #12123d; // dark blue
  --black: #000000;
  --white: #ffffff;
  --dark-gray: #707070;

  --Lavish: "Lavish", serif, Arial;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  object-fit: contain;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  @media (max-width: 860px) {
    border-bottom: 1px solid #e4e4e4;
  }
}
</style>
