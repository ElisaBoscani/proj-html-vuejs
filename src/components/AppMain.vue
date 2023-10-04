<script>
import TriangleElement from "./TriangleElement.vue";
import ProBarbersMain from "./ProBarbersMain.vue";
import ServiceMain from "./ServiceMain.vue";
export default {
  name: "AppMain",
  data() {
    return {};
  },
  components: {
    TriangleElement,
    ProBarbersMain,
    ServiceMain,
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
    <section class="products pt-2 pb-5">
      <div class="container text-center d-flex flex-column align-items-center">
        <span class="text-uppercase fw-bold">We have you convered</span>
        <h2>Avada Grooming Products</h2>
      </div>
      <div>
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-4 row-cols-lg-4">
            <div class="col">
              <img src="../assets/img/brush_dark-200x200.png" alt="" />
              <div class="d-flex flex-column align-items-center">
                <span class="fs-4 font_family">Brush</span>
                <span>$15.00</span>
              </div>
            </div>
            <div class="col">
              <img src="../assets/img/scissors-200x200.png" alt="" />
              <div class="d-flex flex-column align-items-center">
                <span class="fs-4 font_family">Scissors</span>
                <span>$85.00</span>
              </div>
            </div>
            <div class="col">
              <img src="../assets/img/hot_oil_dark-200x200.png" alt="" />
              <div class="d-flex flex-column align-items-center">
                <span class="fs-4 font_family">Hot Oil</span>
                <span>$15.00</span>
              </div>
            </div>
            <div class="col">
              <img src="../assets/img/straight_razor_dark-200x200.png" alt="" />
              <div class="d-flex flex-column align-items-center">
                <span class="fs-4 font_family">Straight Razor</span>
                <span>$30.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center p-5">
          <a href="#" class="test-uppercase px-3">Shop our product range</a>
        </div>
      </div>
    </section>
    <section class="shaving pb-5">
      <div class="container d-flex justify-content-center w-75">
        <div class="shaving_img">
          <img src="../assets/img/shaving_butter-200x200.png" alt="" />
        </div>
        <div class="w-50 bg-black p-3 px-5">
          <span class="text-uppercase fw-bolder"
            >This months featured product</span
          >
          <h2>Shaving Butter</h2>
          <p class="fw-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nihil at aliquid suscipit quod nemo id tempore dicta! Sint
            temporibus corporis qu
          </p>
          <a href="#" class="px-3">Buy now</a>
        </div>
      </div>
    </section>
    <section class="pt-5 reviews">
      <div class="d-flex flex-column align-items-center">
        <span class="text-uppercase fw-bold">What people say</span>
        <h2>Reviews</h2>
      </div>
      <div class="container pt-4">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3">
          <div class="col d-flex flex-column align-items-center gap-3">
            <p class="text-center lh-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              ipsam autem optio ad blanditiis inventore eius facere aspernatur
              exercitationem cumque.
            </p>
            <img
              src="../assets/img/avadabarbers-trimcut-gallery6-200x200.jpg"
              alt="John Doe"
              class="square"
            />
            <span>John Doe</span>
          </div>
          <div class="col d-flex flex-column align-items-center gap-3">
            <p class="text-center lh-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              ipsam autem optio ad blanditiis inventore eius facere aspernatur
              exercitationem cumque.
            </p>
            <img
              src="../assets/img/avadabarbers-trimcut-gallery7-200x201.jpg"
              alt="pete jones"
              class="square"
            />
            <span>Pete Jones</span>
          </div>
          <div class="col d-flex flex-column align-items-center gap-3">
            <p class="text-center fw-light lh-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              ipsam autem optio ad blanditiis inventore eius facere aspernatur
              exercitationem cumque.
            </p>
            <img
              src="../assets/img/avadabarbers-trimcut-gallery3-200x201.jpg"
              alt="Mark Wilson"
              class="square"
            />
            <span>Mark Wilson</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
