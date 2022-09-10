<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <!-- logo -->
      <div class="flex items-center">
        <router-link
          :to="{ name: 'Home' }"
          class="ease-linear duration-500 transition-all"
        >
          <logo />
        </router-link>
      </div>

      <!-- Nav items -->
      <ul
        v-show="!mobile"
        class="flex items-center justify-between w-[65%] lg:w-1/2"
      >
        <!-- list -->
        <div class="flex items-center justify-center">
          <li
            v-for="navItem in navItems"
            :key="navItem.name"
            class="mr-4 lg:mr-12 last:mr-0 first:pb-3"
          >
            <router-link :to="{ name: navItem.link }" class="p-2">
              {{ navItem.name }}
            </router-link>
          </li>
        </div>

        <!-- authentication -->
        <div class="pt-2">
          <router-link
            :to="{ name: 'Login' }"
            class="px-4 py-2 mb-3 ease-linear duration-300 transition-all hover:text-secondary inline-block mr-1 lg:mr-4"
          >
            Login
          </router-link>
          <router-link :to="{ name: 'SignUp' }">
            <action-button text="Sign up" type="primary" />
          </router-link>
        </div>
      </ul>

      <!-- icon -->
      <div class="flex items-center absolute top-0 right-6 h-full">
        <font-awesome-icon
          v-show="mobile"
          :icon="['fas', 'fa-bars']"
          :class="[
            activeIcon,
            'cursor-pointer',
            'text-2xl',
            'ease-linear',
            'duration-700',
            'transition-all',
          ]"
          @click="toggleMobileNav"
        />
      </div>

      <!-- transition for mobile nav -->
      <transition name="mobile-nav">
        <ul
          v-show="mobileNav"
          class="flex flex-col fixed w-full h-full bg-white top-0 left-0 mt-16 px-8 py-10"
        >
          <!-- list -->
          <li v-for="navItem in navItems" :key="navItem.name" class="mb-6 pb-3">
            <router-link :to="{ name: navItem.link }" class="p-4">
              {{ navItem.name }}
            </router-link>
          </li>

          <!-- authentication -->
          <div class="flex flex-col mt-7 w-fit">
            <router-link
              :to="{ name: 'Login' }"
              class="px-4 py-2 mb-3 ease-linear duration-300 transition-all hover:text-secondary inline-block"
            >
              Login
            </router-link>
            <router-link :to="{ name: 'SignUp' }" class="inline-block">
              <action-button text="Sign up" type="primary" />
            </router-link>
          </div>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import Logo from "@/assets/images/Logo.vue";
import ActionButton from "@/components/Shared/ActionButton/ActionButton.vue";

export default {
  name: "Navbar",
  components: {
    Logo,
    ActionButton,
  },
  data() {
    return {
      navItems: [
        {
          name: "home",
          link: "Home",
        },
        {
          name: "about",
          link: "About",
        },
        {
          name: "shop",
          link: "Shop",
        },
      ],
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  computed: {
    activeIcon() {
      return {
        "rotate-180": this.mobileNav,
      };
    },
  },

  created() {
    window.addEventListener("resize", this.checkScreenWidth);
    this.checkScreenWidth;
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreenWidth() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 768) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
    },
  },
};
</script>

<style scoped>
header {
  @apply z-50 w-full fixed top-0 ease-linear duration-500 transition-all border-b bg-white h-16 lg:h-20;
}

nav {
  @apply flex flex-row md:justify-between h-full ease-linear duration-500 transition-all w-full items-center px-5  lg:px-24 2xl:max-h-[1400px] relative;
}

li {
  @apply capitalize first:text-secondary relative inline-block  list-none no-underline ease-linear duration-300 transition-all w-fit;
}

li:hover {
  @apply text-secondary pb-3;
}

li:first-child::after,
li:hover::after {
  @apply absolute bottom-0 content-[''] w-[45%] bg-secondary h-[1.5px] left-[50%] translate-x-[-50%];
}

.scrolled-nav {
  @apply border-b border-secondary shadow-3xl;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  @apply ease-linear duration-1000 transition-all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  @apply translate-x-[-250px];
}
.mobile-nav-enter-to {
  @apply translate-x-0;
}
</style>
