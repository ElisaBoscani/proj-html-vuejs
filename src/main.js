import { createApp } from "vue";
import "../src/scss/app.scss";
/* import * as bootstrap from "bootstrap"; */
/* import "../node_modules/bootstrap/dist/js/bootstrap.js"; */
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import {
  faAtlassian,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faAtlassian,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faCartShopping
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
