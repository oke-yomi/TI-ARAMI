<template>
  <div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <layout-view />
    <!-- <router-view /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LayoutView from "@/components/layout/LayoutView.vue";
export default defineComponent({
  components: {
    LayoutView,
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
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
