<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppInfo from "./AppInfo.vue";
import data from "../data/data.js";
import OffcanvasHeader from "./OffcanvasHeader.vue";

export default {
  name: "AppHeader",
  data() {
    return {
      data,
      OffcanvasVisible: false,
    };
  },
  components: {
    FontAwesomeIcon,
    AppInfo,
    OffcanvasHeader,
  },
  methods: {
    showOf() {
      this.OffcanvasVisible = !this.OffcanvasVisible;
    },
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-dark container pt-4">
      <div class="container-fluid">
        <img src="../assets/img/avadabarbers-stickylogo-x1.png" alt="" />
        <div>
          <font-awesome-icon icon="cart-shopping" style="color: #ffffff" />

          <OffcanvasHeader></OffcanvasHeader>
        </div>
      </div>
    </nav>
    <section class="d-flex">
      <div class="container d-flex justify-content-evenly align-items-center">
        <div class="d-flex flex-column">
          <h1 class="">Barber Shop</h1>
          <p class="py-3">The Pinnacle Mate Grooming</p>
          <div class="pt-4">
            <a href="#" class="px-4 hover_bnt"> Learn more</a>
          </div>
        </div>
        <div>
          <img
            src="../assets/img/avadabarbers_hero_focalmirror-400x550.png"
            alt=""
          />
        </div>
      </div>
      <div class="d-flex flex-column gap-2 pt-4">
        <div
          class="bg-white d-flex flex-column justify-content-center align-items-center border rounded icon"
        >
          <div
            class="bg-secondary pt-1 border rounded d-flex align-items-center justify-content-center p-2"
          >
            <font-awesome-icon
              icon="fa-brands fa-atlassian"
              flip="horizontal"
              size="xs"
              style="color: #ffffff"
            />
          </div>
          <span class="icon_sale fw-bold pt-2">Demos</span>
        </div>
        <div
          class="bg-white p-2 d-flex flex-column align-items-center border rounded"
        >
          <span class="position-relative text-success fw-bold fs-4">
            39
            <span
              class="position-absolute icon_sold translate-middle badge rounded-pill text-success fw-bold"
            >
              $
            </span>
          </span>
          <span class="icon_sale fw-bolder">On Sale</span>
        </div>
      </div>
    </section>
  </header>
</template>

<style lang="scss" scoped></style>
