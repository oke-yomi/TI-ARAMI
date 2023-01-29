<template lang="">
  <aside>
    <nav>
      <div class="navigation-wrapper">
        <router-link class="logo" :to="{ name: 'home' }">
          <logo-img />
        </router-link>

        <ul class="navigation">
          <li>
            <router-link class="link flex" :to="{ name: 'home' }">
              <img :src="DashBoardIcon" alt="" />
              <p>Dashboard</p>
            </router-link>
          </li>
          <li>
            <router-link class="link flex" :to="{ name: 'shop' }">
              <img :src="ShopIcon" alt="" />
              <p>Shop</p>
            </router-link>
          </li>
          <li>
            <router-link class="link flex" :to="{ name: 'shop' }">
              <img :src="OrderIcon" alt="" />
              <p>My order</p>
            </router-link>
          </li>
          <li>
            <router-link class="link flex" :to="{ name: 'shop' }">
              <img :src="WishlistIcon" alt="" />
              <p>My wishlist</p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="auth-links">
        <router-link class="link flex" :to="{ name: 'shop' }">
          <img :src="LogoutIcon" alt="" />
          <p class="logout">Logout</p>
        </router-link>
      </div>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoImg from "@/assets/svg/Logo.vue";
import DashBoardIcon from "@/assets/svg/dashboard.svg";
import ShopIcon from "@/assets/svg/shop.svg";
import OrderIcon from "@/assets/svg/orderIcon.svg";
import WishlistIcon from "@/assets/svg/wishlist.svg";
import LogoutIcon from "@/assets/svg/logout.svg";

export default defineComponent({
  name: "AuthSidebar",
  components: {
    LogoImg,
  },
  data() {
    return {
      DashBoardIcon,
      ShopIcon,
      OrderIcon,
      WishlistIcon,
      LogoutIcon,
    };
  },
});
</script>

<style lang="scss" scoped>
aside {
  outline: 2px solid fuchsia;
  height: 100vh;
  max-width: 100vh;
  width: 310px;
  background-color: var(--white);

  nav {
    width: 100%;
    height: 100%;
    padding: 36px 28px 48px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .link {
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      width: 100%;
      border-radius: 24px;
      padding: 12px 20px;

      img {
        display: inline-block;
      }

      p {
        font-weight: 500;
        font-size: 16px;
        color: var(--dark-gray);

        &:hover {
          font-weight: bold;
        }
      }

      &.router-link-exact-active {
        p {
          font-weight: bold;
        }
      }
    }

    .navigation-wrapper {
      width: 100%;

      .logo {
        display: inline-block;
        margin-bottom: 76px;
      }

      .navigation {
        display: flex;
        flex-direction: column;
        gap: 28px;

        .link {
          &:hover {
            background: #fbf7e6;

            p {
              color: var(--primary-color);
            }
          }

          &.router-link-exact-active {
            font-weight: bold;
            background: #fbf7e6;

            p {
              color: var(--primary-color);
            }
          }
        }
      }
    }

    .logout {
      color: #fd2727 !important;
    }
  }
}
</style>
