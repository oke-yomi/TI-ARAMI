import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import router from "./router";
import store from "./store";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faFacebookF, faInstagram, faGooglePlusG, faLinkedinIn);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
