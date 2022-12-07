<template>
  <footer>
    <div class="footer-wrapper flex">
      <div class="description">
        <h3>TI ARÀMI</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo odio
          vestibulum, quis. Vestibulum turpis mattis consequat in suspendisse
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At leo odio
          vestibulum, quis.
        </p>
      </div>
      <div class="quick-links flex">
        <ul class="nav-links flex">
          <li>
            <router-link class="link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="link" to="/about">About</router-link>
          </li>
          <li>
            <router-link class="link" to="/shop">shop</router-link>
          </li>
        </ul>

        <ul class="social-links flex">
          <li>
            <router-link class="link" to="#">
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </router-link>
          </li>
          <li>
            <router-link class="link" to="#">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </router-link>
          </li>
          <li>
            <router-link class="link" to="#">
              <font-awesome-icon icon="fa-brands fa-google-plus-g" />
            </router-link>
          </li>
          <li>
            <router-link class="link" to="#">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexFooter",
});
</script>

<style lang="scss" scoped>
footer {
  background: var(--secondary-color);

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  width: 100%;

  .footer-wrapper {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem;
      padding-right: 0;
    }

    @media (min-width: 1600px) {
      max-width: 1600px;
    }

    .description,
    .link {
      color: var(--white);
    }

    .description {
      width: 100%;
      max-width: 500px;
      font-weight: 500;

      h3 {
        font-size: 40px;
        margin-bottom: 28px;
      }

      p {
        font-size: 16px;
      }
    }

    .quick-links {
      width: 100%;
      max-width: 300px;
      flex-direction: column;
      flex-wrap: wrap;
      margin-left: 2rem;

      @media (max-width: 800px) {
        max-width: 550px;
        flex-direction: row;
        margin-top: 2rem;
        margin-left: 0;
      }

      .social-links,
      .nav-links {
        margin-bottom: 56px;
        width: 100%;

        li {
          margin-right: 30px;
        }

        @media (max-width: 800px) {
          margin-bottom: 0;
          width: fit-content;
          margin-top: 2rem;

          li {
            margin-right: 30px;
          }
        }
      }

      .social-links {
        margin-bottom: 0;
      }
    }
  }
}
</style>
