<template lang="">
  <section>
    <div class="categories-text-wrapper col">
      <div class="dots">
        <img :src="Dots" alt="" />
      </div>

      <div class="categories">
        <h3>Select Your Desired Category</h3>

        <ul>
          <li
            class="category-item"
            v-for="category in categories"
            :key="category.id"
          >
            <p
              :class="{
                'active-category': category.id === this.currentCategory,
              }"
              @click="selectItem(category.id)"
            >
              {{ category.title }}
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="categories-img col">
      <div class="image">
        <img src="@/assets/img/test_image.jpg" alt="" />
      </div>

      <div class="arrows">
        <button><img :src="ArrowLeft" alt="" /></button>
        <button><img :src="ArrowRight" alt="" /></button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dots from "@/assets/svg/dots.svg";
import ArrowLeft from "@/assets/svg/arrowLeft.svg";
import ArrowRight from "@/assets/svg/arrowRight.svg";

export default defineComponent({
  name: "HomeCategories",
  data() {
    return {
      Dots,
      ArrowLeft,
      ArrowRight,

      categories: [
        {
          id: 1,
          title: "tops",
        },
        {
          id: 2,
          title: "skirts",
        },
        {
          id: 3,
          title: "gowns",
        },
        {
          id: 4,
          title: "pants",
        },
        {
          id: 5,
          title: "jumpsuits",
        },
      ],

      currentCategory: 1,
    };
  },
  methods: {
    selectItem(id: number) {
      this.currentCategory = id;
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  height: 856px;
  width: 100%;
  padding: 100px;
  display: grid;
  gap: 0px;
  grid-template-columns: 1fr 1fr;

  position: relative;

  .col {
    height: 100%;
  }

  .dots {
    height: fit-content;
    width: fit-content;

    @media (max-width: 1250px) {
      display: none;
    }

    img {
      object-fit: contain;
    }
  }

  .categories-text-wrapper {
    .dots {
      position: absolute;
      left: 0;
      bottom: 150px;
    }

    .categories {
      padding: 100px;
      width: 100%;
      height: 100%;

      text-align: center;

      h3 {
        font-family: "Lavish", serif, Arial;
        font-weight: 400;
        font-size: 40px;
        line-height: 64px;
        color: var(--secondary-color);
      }

      ul {
        padding: 28px;

        .category-item {
          font-weight: 500;
          font-size: 20px;

          margin-bottom: 24px;

          &:last-of-type {
            margin-bottom: 0px;
          }

          p {
            text-transform: capitalize;
            cursor: pointer;
            width: 100%;
            height: 100%;
            color: var(--dark-gray);

            &:hover {
              color: var(--primary-color);
            }
          }

          .active-category {
            color: var(--primary-color);
            font-weight: 600;
          }
        }
      }
    }
  }

  .categories-img {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .image {
      width: 100%;
      height: 550px;
      border-top-left-radius: 60px;

      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .arrows {
      padding: 26px 36px;
      width: 100%;
      height: 48px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        display: inline-block;
        height: fit-content;
        width: fit-content;

        background-color: inherit;
        cursor: pointer;
        border: none;
      }
    }
  }

  @media (max-width: 1250px) {
    padding: 60px;

    .categories-text-wrapper {
      .categories {
        padding: 40px;
      }
    }

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      padding: 60px;
      height: fit-content;
      gap: 48px;

      .categories-text-wrapper {
        .categories {
          padding: 0 30px;

          h3 {
            margin-bottom: 20px;
          }

          ul {
            border-top: 1px solid var(--primary-color);
            width: 100%;
            padding: 28px 10px;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            gap: 24px;

            .category-item {
              margin-bottom: 0px;
            }
          }
        }
      }

      .categories-img {
        .arrows {
          width: 60%;
          margin: 32px auto 0;

          justify-content: center;
          gap: 2rem;
        }
      }
    }
  }
}
</style>
