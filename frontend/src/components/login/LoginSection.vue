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
        <img :src="Envelope" alt="icon" />
      </base-input>

      <base-input
        :type="changePwdType"
        Input="password"
        placeholder="********"
        v-model="password"
        label="password"
      >
        <div class="eye-icon" @click="toggleShow">
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

        <div class="auth-text">
          <span class="line"></span>
          <p>or login with</p>
          <span class="line"></span>
        </div>

        <google-auth-btn action="google" />
      </div>

      <p class="signup-link">
        Already have an account?
        <router-link to="forgot-password" class="link signup">
          Sign up</router-link
        >
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
.eye-icon {
  width: 20px;
  height: 20px;

  display: block;
}

.login-details-wrapper {
  padding: 120px 97px;

  h3 {
    font-weight: 700;
    font-size: 25px;
    margin-bottom: 4px;
    color: var(--black);
  }

  form {
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

      .auth-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 24px 0;

        .line {
          display: block;
          width: 172px;
          height: 1px;
          background-color: var(--dark-gray);
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
