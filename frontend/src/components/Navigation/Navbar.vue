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
      <ul v-show="!mobile" class="flex items-center flex-1 justify-end">
        <!-- list -->
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.link }">
            {{ navItem.name }}
          </router-link>
        </li>

        <!-- authentication -->
        <div class="">
          <router-link :to="{ name: 'Login' }"> Login</router-link>
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
          class="flex flex-col fixed w-full max-w-xs h-full bg-yellow-500 top-0 left-0"
        >
          <!-- list -->
          <li v-for="navItem in navItems" :key="navItem.name">
            <router-link :to="{ name: navItem.link }">
              {{ navItem.name }}
            </router-link>
          </li>

          <!-- authentication -->
          <div class="">
            <router-link :to="{ name: 'Login' }"> Login</router-link>
            <router-link :to="{ name: 'SignUp' }">
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
import ActionButton from "@/components/Shared/ActionButton.vue";

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
      if (scrollPosition > 70) {
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
  @apply z-50 w-full fixed top-0 ease-linear duration-500 transition-all border-b border-blue-500 bg-white;
}

nav {
  @apply flex flex-row ease-linear duration-500 transition-all w-full mx-auto 2xl:max-h-[1400px] relative;
}

/* ul {
  @apply flex items-center flex-1 justify-end;
} */

/* li {
  @apply capitalize mr-16 last:mr-0 first:text-secondary relative inline-block pb-3 p-4 list-none no-underline ease-linear duration-500 transition-all;
}

li:hover {
  @apply text-secondary;
}

li:hover::after {
  @apply absolute bottom-0 content-[''] w-[70%] bg-secondary h-[1.5px] left-[10%] right-[10%] mx-auto;
} */

/* .active-icon {
  @apply rotate-180;
} */
.scrolled-nav {
  @apply bg-secondary shadow-3xl;
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
