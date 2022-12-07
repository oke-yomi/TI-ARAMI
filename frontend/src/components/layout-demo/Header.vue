<template>
  <header>
    <nav>
      <router-link to="/">
        <logo-img />
      </router-link>

      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="link" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="link" to="/shop">shop</router-link>
        </li>

        <div class="auth-links">
          <router-link class="link login-link" to="/login">login</router-link>
          <action-button brand="tertiary" action="Sign up" />
        </div>
      </ul>

      <div class="icon">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="link" to="/about">About</router-link>
          </li>
          <li>
            <router-link class="link" to="/shop">shop</router-link>
          </li>

          <div class="auth-links">
            <router-link class="link login-link" to="/login">login</router-link>
            <action-button brand="tertiary" action="Sign up" />
          </div>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoImg from "@/assets/svg/Logo.vue";
import ActionButton from "@/components/shared/ActionButton.vue";

export default defineComponent({
  name: "HeaderView",
  components: {
    LogoImg,
    ActionButton,
  },
  data() {
    return {
      mobile: null as null | boolean,
      mobileNav: null as null | boolean,
      windowWidth: null as null | number,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 860) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  height: 80px;
  border-bottom: 1px solid #e6e6e6;
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: var(--white);

  nav {
    position: relative;
    display: flex;
    padding: 12px 0;
    padding-right: 15px;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1600px) {
      max-width: 1600px;
    }

    ul,
    .link {
      font-weight: 500;
      color: var(--black);
    }

    li {
      display: flex;
      text-transform: capitalize;
      padding: 16px;
      margin-left: 32px;
    }

    .link {
      font-size: 1rem;
      transition: 0.5s ease all;

      &.router-link-exact-active {
        border-bottom: 1px solid var(--primary-color);
        color: var(--primary-color);
      }

      &:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;

      .login-link {
        margin-left: 60px;
        margin-right: 24px;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      svg {
        cursor: pointer;
        color: var(--black);
        font-size: 24px;
        transition: 0.8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      padding: 1.5rem;
      height: 100%;
      background-color: #e6e6e6;
      top: 80px;
      left: 0;

      li {
        margin-left: 0;
        margin-bottom: 16px;
      }

      .auth-links {
        display: flex;
        flex-direction: column;
        .login-link {
          margin-top: 60px;
          margin-bottom: 24px;
          padding-left: 1.5rem;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0px);
    }
  }
}
</style>
