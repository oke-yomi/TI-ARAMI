<template>
  <div class="m-0 p-0 font-sans box-border">
    <navbar />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style scoped></style>
