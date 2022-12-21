<template lang="">
  <div class="card flex" v-for="c in cards" :key="c">
    <div class="img">
      <img src="@/assets/img/image-1.jpg" alt="" />
    </div>
    <div class="details">
      <p class="name">Shelly skirt</p>
      <p class="price"># 4,000</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemCards",
  components: {},
  data() {
    return {
      selectedCategory: "all",
      cards: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40,
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 290px;
  height: 459px;
  outline: 1px solid #eeeeee;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;

  .img {
    width: 290px;
    height: 369px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details {
    width: 100%;
    padding: 5px;

    .name {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 8px;
      text-transform: capitalize;
    }

    .price {
      font-weight: 700;
      font-size: 20px;
    }
  }
}
</style>
