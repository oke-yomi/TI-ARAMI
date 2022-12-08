<template>
  <section>
    <div class="bg-img"></div>

    <div class="story">
      <section-heading heading="Our Story" />

      <div class="text">
        <p>
          TI ARÀMI is Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
          At leo odio vestibulum, quis. Vestibulum turpis mattis consequat in
          suspen diss e eget nibh sed. Vulputate adipiscing mauris rhoncus
          posuere praesent magna.
        </p>

        <p>
          TI ARÀMI is Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
          At leo odio vestibulum, quis. Vestibulum turpis mattis consequat in
          suspen diss e eget nibh sed. Vulputate adipiscing mauris rhoncus
          posuere praesent magna.
        </p>

        <p>
          TI ARÀMI is Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
          At leo odio vestibulum, quis. Vestibulum turpis mattis consequat in
          suspen diss
        </p>
      </div>

      <div class="btns flex">
        <action-button action="Shop Now" />
        <action-button brand="secondary" action="Custom Tailoring" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionHeading from "@/components/shared/SectionHeading.vue";
import ActionButton from "@/components/shared/ActionButton.vue";

export default defineComponent({
  name: "AboutStory",
  components: {
    SectionHeading,
    ActionButton,
  },
});
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 52px;
  padding: 100px;
  min-height: 826px;

  .bg-img {
    background: url("@/assets/img/test-image.jpg") no-repeat center center/cover;
    height: 404px;
    width: 100%;
    align-self: center;
  }

  .story {
    height: 100%;

    .text {
      margin: 24px 0 56px;

      p {
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 20px;
        color: var(--dark-gray);
      }
    }

    .btns {
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 28px;
    }
  }

  // media query
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 52px;
    padding: 60px;

    .story {
      .btns {
        justify-content: center;
      }
    }

    @media (max-width: 860px) {
      padding: 60px 40px;
      grid-template-columns: 1fr;
    }
  }
}
</style>
