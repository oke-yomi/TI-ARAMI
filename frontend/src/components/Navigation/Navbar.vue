<template>
  <header class="w-full border-b-2 border-error">
    <div class="">
      <a href="/">
        <logo />
      </a>

      <div class="">
        <nav>
          <ul>
            <li v-for="navItem in navItems" :key="navItem">
              <a href="">
                {{ navItem }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="">
          <action-button />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "@/assets/images/Logo.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "Navbar",
  components: {
    Logo,
    ActionButton,
  },
  data() {
    return {
      url: "/",
      navItems: ["home", "about", "shop"],
      isLoggedIn: false,
    };
  },
};
</script>

<style scoped></style>
