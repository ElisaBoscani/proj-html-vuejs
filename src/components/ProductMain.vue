<script>
import ShavingMain from "./ShavingMain.vue";
export default {
  name: "ProductMain",
  data() {
    return {};
  },
  components: {
    ShavingMain,
  },
};
</script>

<template>
  <section class="products pt-2 pb-5">
    <div class="container text-center d-flex flex-column align-items-center">
      <span>We have you convered</span>
      <h2>Avada Grooming Products</h2>
    </div>
    <div>
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-4 row-cols-lg-4">
          <div class="col d-flex flex-column align-items-center">
            <img src="../assets/img/brush_dark-200x200.png" alt="brush" />

            <h3>Brush</h3>
            <span>$15.00</span>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img src="../assets/img/scissors-200x200.png" alt="scissors" />

            <h3>Scissors</h3>
            <span>$85.00</span>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img src="../assets/img/hot_oil_dark-200x200.png" alt="hot oil" />

            <h3>Hot Oil</h3>
            <span>$15.00</span>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img
              src="../assets/img/straight_razor_dark-200x200.png"
              alt="straight razor"
            />

            <h3>Straight Razor</h3>
            <span>$30.00</span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center p-5">
        <a href="#">Shop our product range</a>
      </div>
    </div>
  </section>
  <ShavingMain></ShavingMain>
</template>
