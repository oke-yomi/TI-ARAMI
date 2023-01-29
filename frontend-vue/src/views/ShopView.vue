<template lang="">
  <div class="shop-wrapper">
    <select-box :filteredCategory="filteredCategory" />

    <!-- shop box -->
    <div class="shop-cards">
      <item-cards
        v-for="c in filteredItems"
        :key="c"
        :heading="c.title"
        :price="c.price"
        :image="c.image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Index from "@/layouts/Index.vue";
import AuthIndex from "@/layouts/AuthIndex.vue";
import axios from "axios";

import ItemCards from "@/components/shop/ItemCards.vue";
import SelectBox from "@/components/shop/SelectBox.vue";

interface IProduct {
  createdAt: Date;
  title: string;
  image: string;
  description: string;
  price: string;
  size: string[];
  color: string[];
  noOfItems: number;
  tags: string[];
  id: string;
}

export default defineComponent({
  name: "ShopView",
  components: {
    ItemCards,
    SelectBox,
  },
  data() {
    return {
      selectedCategory: "all",
      items: [],
      filteredItems: [],
    };
  },
  created() {
    // this.$emit("update:layout", Index);
    this.$emit("update:layout", AuthIndex);
  },
  methods: {
    filteredCategory(category: string) {
      console.log(category);

      if (category === "all") {
        this.filteredItems = this.items;
      } else {
        this.filteredItems = this.items.filter((el: IProduct) =>
          el.tags.includes(category)
        );
      }

      console.log(this.filteredItems);
    },
  },
  async mounted() {
    try {
      const baseUrl = process.env.VUE_APP_BASE_URL;

      const response = await axios.get(`${baseUrl}/store`);

      this.items = response.data;

      this.filteredItems = this.items;
    } catch (err) {
      console.log(err);
    }
  },
});
</script>

<style lang="scss" scoped>
.shop-wrapper {
  padding: 32px 100px;

  .shop-cards {
    display: grid;
    column-gap: 26px;
    row-gap: 48px;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  }

  @media (max-width: 860px) {
    padding: 32px 60px;
  }
}
</style>
