<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppInfo from "./AppInfo.vue";
import data from "../data/data.js";
export default {
  name: "OffcanvasHeader",
  data() {
    return {
      data,
      hoverLink: false,
      OffcanvasVisible: false,
    };
  },
  components: {
    FontAwesomeIcon,
    AppInfo,
  },
  methods: {
    showOf() {
      this.OffcanvasVisible = !this.OffcanvasVisible;
    },
  },
};
</script>
<template>
  <button
    class="navbar-toggler border-0"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasDarkNavbar"
    aria-controls="offcanvasDarkNavbar"
    aria-label="Toggle navigation"
    @click="showOf"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div v-show="OffcanvasVisible" class="offcanvas_mio">
    <button
      type="button"
      class="btn-close btn_of_close btn-close-white"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
      @click="showOf"
    ></button>
    <div class="offcanvas-body text-center offcan_link">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 pt-5">
        <AppInfo
          :item="item"
          v-for="(item, index) in data.linksHeader"
          :class="{ active: true }"
        />
      </ul>
      <div class="d-flex flex-column gap-2 pt-4 square_offcanvas">
        <div
          class="bg-white d-flex flex-column justify-content-center align-items-center border rounded icon pt-1"
        >
          <div
            class="bg-secondary border rounded d-flex align-items-center justify-content-center p-2"
          >
            <font-awesome-icon
              icon="fa-brands fa-atlassian"
              flip="horizontal"
              size="xs"
              style="color: #ffffff"
            />
          </div>
          <span class="icon_sale fw-bold pt-2">Prebuilts</span>
        </div>
        <div
          class="bg-white p-2 pt-3 d-flex flex-column align-items-center border rounded icon"
        >
          <font-awesome-icon
            icon="cart-shopping"
            flip="horizontal"
            size="xl"
            style="color: #b0b0b0"
          />
          <span class="icon_sale fw-bolder pt-2">Buy Now</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../src/scss/variables" as *;
</style>
