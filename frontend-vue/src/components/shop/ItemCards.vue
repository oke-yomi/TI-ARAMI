<template lang="">
  <!-- <div class="card flex" v-for="c in cards" :key="c"> -->
  <div class="card flex">
    <div class="img">
      <img :src="image" alt="" />
    </div>
    <div class="details">
      <p class="name">{{ heading }}</p>
      <p class="price"># {{ price }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemCards",
  components: {},
  props: {
    heading: {
      type: String,
      required: true,
      default: "Shelly skirt",
    },
    price: {
      type: String,
      required: true,
      default: "400.00",
    },
    image: {
      type: String,
      required: true,
      default: "/../../assets/img/image-1.jpg",
    },
  },
  data() {
    return {
      selectedCategory: "all",
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
