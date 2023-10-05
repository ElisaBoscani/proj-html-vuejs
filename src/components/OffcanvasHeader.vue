<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppInfo from "./AppInfo.vue";
import data from "../data/data.js";
export default {
  name: "OffcanvasHeader",
  data() {
    return {
      data,
      activLink: 0,
    };
  },
  components: {
    FontAwesomeIcon,
    AppInfo,
  },
  methods: {
    select(index) {
      this.activLink = index;
    },
  },
};
</script>
<template>
  <div
    class="offcanvas z-1 offcanvas-end text-bg-dark w-100"
    tabindex="-1"
    id="offcanvasDarkNavbar"
    aria-labelledby="offcanvasDarkNavbarLabel"
  >
    <div class="offcanvas-header justify-content-end">
      <button
        type="button"
        class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body text-center">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <AppInfo
          :item="item"
          v-for="(item, index) in data.linksHeader"
          :class="index === activLink ? 'active' : ''"
          @click="select(index)"
        />
      </ul>
    </div>
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
</template>
