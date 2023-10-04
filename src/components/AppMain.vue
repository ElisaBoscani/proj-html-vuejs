<script>
import TriangleElement from "./TriangleElement.vue";
export default {
  name: "AppMain",
  data() {
    return {};
  },
  components: {
    TriangleElement,
  },
};
</script>

<template>
  <main>
    <section class="pro_barbers">
      <div class="d-flex flex-column align-items-center">
        <span class="text-uppercase fw-bolder">Award winning</span>
        <h2 class="pb-2">Pro Barber</h2>
        <a href="#" class="">Meet tour new barber</a>
      </div>
    </section>
    <div class="d-flex justify-content-center">
      <TriangleElement></TriangleElement>
    </div>
    <section class="pt-4 service">
      <div class="d-flex flex-column align-items-center">
        <div class="d-flex flex-column align-items-center pb-5">
          <span class="text-uppercase fw-bold">Mens Grooming</span>
          <h2>Services</h2>
        </div>

        <div class="container">
          <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3">
            <div class="col d-flex flex-column align-items-center gap-3">
              <img
                src="../assets/img/avadabarbers-trimcut-icon-before.png"
                alt=""
              />
              <h3>Trim & Cut</h3>
              <p class="text-center fw-light lh-lg">
                Avada Barbers are experts in the lickety split trim and hair
                cut. Quick but careful and ridiculously good looking.
              </p>
            </div>
            <div class="col d-flex flex-column align-items-center gap-3">
              <img src="../assets/img/avadabarbers-washndry-icon.png" alt="" />
              <h3>Wash & Dry</h3>
              <p class="text-center fw-light lh-lg">
                Take a seat in our fine leather chairs, lean back and let us
                lether you a fresh head in a luxurious fashion.
              </p>
            </div>
            <div class="col d-flex flex-column align-items-center gap-3">
              <img src="../assets/img/avadabarbers-beardtrim-icon.png" alt="" />
              <h3>Beard Tidy</h3>
              <p class="text-center fw-light lh-lg">
                Tame the tangles and untidy facil hairs like a gentleman whit
                our Beard Tidy services from Avada Barbers.
              </p>
            </div>
          </div>
        </div>
        <div class="pt-5">
          <a href="#" class="px-3">Read About Our Services</a>
        </div>
      </div>
    </section>

    <div class="d-flex justify-content-center">
      <TriangleElement style="fill: black"></TriangleElement>
    </div>
    <section class="products"></section>
  </main>
</template>
