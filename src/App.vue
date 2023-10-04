<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    FontAwesomeIcon,
    AppHeader,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <section class="pro_barbers">
      <div class="d-flex flex-column align-items-center">
        <span class="text-uppercase fw-bolder">Award winning</span>
        <h2 class="pb-4">Pro Barber</h2>
        <a href="#" class="">Meet tour new barber</a>
      </div>
    </section>
    <section class="service d-flex justify-content-center">
      <svg
        class="fusion-big-triangle-candy"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style="fill: #ffffff; padding: 27; margin: -73"
      >
        <path d="M0 100 L50 2 L100 100 Z"></path>
      </svg>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
