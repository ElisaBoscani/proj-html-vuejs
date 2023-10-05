<script>
import data from "../data/data.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppInfo from "./AppInfo.vue";
import BntFooter from "./BntFooter.vue";
import CopywriteFooter from "./CopywriteFooter.vue";
export default {
  name: "AppFooter",
  data() {
    return {
      data,
    };
  },
  components: {
    BntFooter,
    AppInfo,
    FontAwesomeIcon,
    CopywriteFooter,
  },
};
</script>
<template>
  <footer>
    <div class="container p-5">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3">
        <BntFooter :card="card" v-for="card in data.bntImageShop"></BntFooter>
        <div class="col link_footer d-flex flex-column align-items-center">
          <img
            src="../assets/img/avadabarbers-logo-x1.png"
            class="pb-3"
            alt=""
          />
          <ul>
            <AppInfo :item="item" v-for="item in data.linkFooter"></AppInfo>
          </ul>
          <div class="p-3 d-flex flex-column align-items-center">
            <span>Follow Us</span>
            <div class="p-2 d-flex gap-3">
              <font-awesome-icon
                icon="fa-brands fa-facebook-f"
                size="sm"
                style="color: #f5f5f5"
              />
              <font-awesome-icon
                icon="fa-brands fa-twitter"
                size="sm"
                style="color: #f5f5f5"
              />
              <font-awesome-icon
                icon="fa-brands fa-youtube"
                size="sm"
                style="color: #f5f5f5"
              />
              <font-awesome-icon
                icon="fa-brands fa-instagram"
                size="sm"
                style="color: #f5f5f5"
              />
            </div>
          </div>
        </div>
        <BntFooter
          :card="card"
          v-for="card in data.bntImageAppointment"
        ></BntFooter>
      </div>
    </div>
    <ul class="bg_footer">
      <CopywriteFooter></CopywriteFooter>
    </ul>
  </footer>
</template>
