<script>
import data from "../data/data.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppInfo from "./AppInfo.vue";
import BntFooter from "./BntFooter.vue";
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
  },
};
</script>
<template>
  <footer>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3">
        <BntFooter :card="card" v-for="card in data.bntImageShop"></BntFooter>
        <div class="col">
          <AppInfo :item="item" v-for="item in data.linkFooter"></AppInfo>
          <div>
            <span>Follow Us</span>
            <div>
              <font-awesome-icon
                icon="fa-brands fa-facebook-f"
                size="lg"
                style="color: #c44141"
              />
              <font-awesome-icon icon="fa-brands fa-twitter" size="lg" />
              <font-awesome-icon icon="fa-brands fa-youtube" size="lg" />
              <font-awesome-icon icon="fa-brands fa-instagram" size="lg" />
            </div>
          </div>
        </div>
        <BntFooter
          :card="card"
          v-for="card in data.bntImageAppointment"
        ></BntFooter>
      </div>
    </div>
  </footer>
</template>
