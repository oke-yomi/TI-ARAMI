<template lang="">
  <div class="signup-details-wrapper">
    <h3>Sign up</h3>

    <form @submit.prevent="signupWithPassword">
      <base-input
        type="text"
        Input="fullname"
        placeholder="Faith Grant"
        v-model.trim="fullname"
        label="full name"
      />

      <base-input
        type="email"
        Input="email"
        placeholder="example@gmail.com"
        v-model.trim="email"
        label="email"
      >
        <div class="icon">
          <img :src="Envelope" alt="icon" />
        </div>
      </base-input>

      <base-input
        type="tel"
        Input="phone"
        placeholder="08145678923"
        v-model.trim="phone"
        label="phone number"
      >
        <div class="icon">
          <img :src="PhoneIcon" alt="icon" />
        </div>
      </base-input>

      <base-input
        :type="changePwdType"
        Input="password"
        placeholder="********"
        v-model.trim="password"
        label="password"
      >
        <div class="eye-icon icon" @click="toggleShow">
          <img v-if="showPassword" :src="EyeOpen" alt="icon" />
          <img v-else :src="EyeClose" alt="icon" />
        </div>
      </base-input>

      <div class="tandc flex">
        <input
          type="checkbox"
          name="checkbox"
          class="checkbox"
          v-model="checkbox"
        />
        <p>I agree to all</p>
        <router-link to="terms-and-conditions" class="link">
          Terms & Conditions
        </router-link>
      </div>

      <div class="auth-btn">
        <auth-button action="sign up" />

        <div class="auth-text flex">
          <span class="line"></span>
          <p>or signup with</p>
          <span class="line"></span>
        </div>

        <google-auth-btn action="google" />
      </div>

      <p class="signup-link">
        Already have an account?
        <router-link to="login" class="link signup"> Login</router-link>
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
import PhoneIcon from "@/assets/svg/phoneIcon.svg";

export default defineComponent({
  name: "SignupSection",
  components: {
    AuthButton,
    GoogleAuthBtn,
    BaseInput,
  },
  data() {
    return {
      fullname: "" as string,
      email: "" as string,
      phone: "" as string,
      password: "" as string,
      checkbox: false as boolean,

      passwordType: "password" as string,
      showPassword: false as boolean,

      // icons
      Envelope,
      EyeClose,
      EyeOpen,
      PhoneIcon,
    };
  },
  methods: {
    signupWithPassword() {
      if (
        !this.fullname ||
        !this.email ||
        !this.phone ||
        !this.password ||
        !this.checkbox
      ) {
        alert("All fields required");

        return;
      } else {
        alert("success");

        this.fullname = "";
        this.email = "";
        this.phone = "";
        this.password = "";
        this.checkbox = false;
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
.signup-details-wrapper {
  display: flex;
  flex-direction: column;
  padding: 48px 98px;

  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 860px) {
    padding: 36px 52px;
  }

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

    .eye-icon {
      cursor: pointer;
    }

    .link {
      font-weight: 400;
      font-size: 16px;
      color: var(--primary-color);
    }

    .tandc {
      margin-top: 8px;
      justify-content: flex-start;

      .checkbox {
        height: 24px;
        width: 24px;
      }

      p {
        margin: 0 4px;
      }
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
