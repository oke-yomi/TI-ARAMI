<template lang="">
  <div class="login-details-wrapper">
    <h3>Log in</h3>

    <form @submit.prevent="signupWithPassword">
      <base-input
        type="email"
        Input="email"
        placeholder="example@gmail.com"
        v-model="email"
        label="email"
      >
        <div class="icon">
          <img :src="Envelope" alt="icon" />
        </div>
      </base-input>

      <base-input
        :type="changePwdType"
        Input="password"
        placeholder="********"
        v-model="password"
        label="password"
      >
        <div class="eye-icon icon" @click="toggleShow">
          <img v-if="showPassword" :src="EyeOpen" alt="icon" />
          <img v-else :src="EyeClose" alt="icon" />
        </div>
      </base-input>

      <p class="forgot-password">
        <router-link to="forgot-password" class="link">
          Forgot Password?
        </router-link>
      </p>

      <div class="auth-btn">
        <auth-button action="login" />

        <div class="auth-text flex">
          <span class="line"></span>
          <p>or login with</p>
          <span class="line"></span>
        </div>

        <google-auth-btn action="google" />
      </div>

      <p class="signup-link">
        Don't have an account?
        <router-link to="signup" class="link signup"> Sign up</router-link>
      </p>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthButton from "@/components/shared/AuthButton.vue";
import GoogleAuthBtn from "@/components/shared/GoogleAuthBtn.vue";
import BaseInput from "@/components/shared/BaseInput.vue";
// icons
import Envelope from "@/assets/svg/envelope.svg";
import EyeClose from "@/assets/svg/eyeClose.svg";
import EyeOpen from "@/assets/svg/eyeOpen.svg";

export default defineComponent({
  name: "LoginSection",
  components: {
    AuthButton,
    GoogleAuthBtn,
    BaseInput,
  },
  data() {
    return {
      email: "" as string,
      password: "" as string,
      Envelope,
      EyeClose,
      EyeOpen,
      passwordType: "password" as string,
      showPassword: false as boolean,
    };
  },
  methods: {
    signupWithPassword() {
      if (!this.email || !this.password) {
        alert("Email or password required");

        return;
      } else {
        alert("success");

        this.email = "";
        this.password = "";
      }
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },

  computed: {
    changePwdType() {
      if (this.showPassword) {
        return "text";
      }
      return "password";
    },
  },
});
</script>

<style lang="scss" scoped>
.login-details-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 98px;

  @media (max-width: 860px) {
    padding: 0 52px;
  }

  h3 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 4px;
    color: var(--black);
  }

  form {
    .icon {
      width: 20px;
      height: 20px;

      display: block;
    }

    .eye-icon {
      cursor: pointer;
    }

    .link {
      font-weight: 400;
      font-size: 16px;
      color: var(--primary-color);
    }

    .forgot-password {
      text-align: right;
      margin-top: 8px;
    }

    .auth-btn {
      margin: 60px 0 40px;
      width: 100%;

      @media (max-width: 860px) {
        margin: 40px 0 20px;
      }

      .auth-text {
        justify-content: space-between;
        margin: 24px 0;

        .line {
          display: block;
          width: 172px;
          height: 1px;
          background-color: var(--dark-gray);
        }

        @media (max-width: 860px) {
          justify-content: center;
          gap: 12px;
          margin: 18px 0;

          .line {
            width: 24px;
          }
        }
      }
    }

    .signup-link {
      text-align: center;
      font-weight: 600;
      font-size: 18px;

      .signup {
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}
</style>
