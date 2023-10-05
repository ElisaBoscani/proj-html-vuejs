<script>
import TriangleElement from "./TriangleElement.vue";
import ProBarbersMain from "./ProBarbersMain.vue";
import ServiceMain from "./ServiceMain.vue";
import ProductMain from "./ProductMain.vue";
import ReviewsMain from "./ReviewsMain.vue";
import BlogMain from "./BlogMain.vue";
export default {
  name: "AppMain",
  data() {
    return {};
  },
  components: {
    TriangleElement,
    ProBarbersMain,
    ServiceMain,
    ProductMain,
    ReviewsMain,
    BlogMain,
  },
};
</script>

<template>
  <main>
    <ProBarbersMain></ProBarbersMain>
    <div class="d-flex justify-content-center">
      <TriangleElement></TriangleElement>
    </div>
    <ServiceMain></ServiceMain>
    <div class="d-flex justify-content-center">
      <TriangleElement style="fill: #121315"></TriangleElement>
    </div>
    <ProductMain></ProductMain>
    <ReviewsMain></ReviewsMain>
    <TriangleElement
      style="transform: rotate(180deg); padding: 0 27px 60px"
    ></TriangleElement>
    <BlogMain></BlogMain>
  </main>
</template>
