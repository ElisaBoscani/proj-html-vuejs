<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppInfo from "./AppInfo.vue";
import data from "../data/data.js";
export default {
  name: "AppHeader",
  data() {
    return {
      data,
    };
  },
  components: {
    FontAwesomeIcon,
    AppInfo,
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-dark fixed-top container pt-4">
      <div class="container-fluid">
        <img src="../assets/img/avadabarbers-stickylogo-x1.png" alt="" />
        <div>
          <font-awesome-icon icon="cart-shopping" style="color: #ffffff" />
          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          class="offcanvas offcanvas-end text-bg-dark w-100"
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
            <AppInfo :item="item" v-for="item in data.links" />
            <!--   <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li> -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
