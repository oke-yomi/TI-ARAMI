<template lang="">
  <div class="shop-wrapper">
    <select-box />

    <!-- shop box -->
    <div class="shop-cards">
      <item-cards />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Index from "@/layouts/Index.vue";

import ItemCards from "@/components/shop/ItemCards.vue";
import SelectBox from "@/components/shop/SelectBox.vue";

export default defineComponent({
  name: "ShopView",
  components: {
    ItemCards,
    SelectBox,
  },
  data() {
    return {
      selectedCategory: "all",
    };
  },
  created() {
    this.$emit("update:layout", Index);
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
