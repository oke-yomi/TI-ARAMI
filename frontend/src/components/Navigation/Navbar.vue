<template>
  <header
    class="fixed top-0 left-0 w-full border-b border-error h-[100px] px-24"
  >
    <div class="md:flex justify-between items-center h-full">
      <!-- logo -->
      <div class="">
        <a href="/">
          <logo />
        </a>
      </div>

      <!-- Menu Items -->
      <nav class="w-1/2 flex justify-between items-center font-medium">
        <ul class="flex justify-between items-center">
          <li v-for="navItem in navItems" :key="navItem">
            <a :href="url" class="">
              {{ navItem }}
            </a>
          </li>
        </ul>

        <div class="flex justify-between items-center whitespace-nowrap pb-3">
          <a href="" class="mr-6 hover:text-secondary">Login</a>
          <action-button text="Sign up" type="primary" />
        </div>
      </nav>
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
    };
  },
};
</script>

<style scoped>
li {
  @apply capitalize mr-16 last:mr-0 first:text-secondary relative inline-block pb-3;
}

li:hover {
  @apply text-secondary;
}

li:hover::after {
  @apply absolute bottom-0 content-[''] w-[70%] bg-secondary h-[1.5px] left-[10%] right-[10%] mx-auto;
}
</style>
