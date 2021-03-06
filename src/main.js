import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import jszip from "jszip";
import VueProgressBar from "@aacassandra/vue3-progressbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.min.js";
import "datatables.net/js/jquery.dataTables.min.js";
import "datatables.net-bs4/js/dataTables.bootstrap4.min.js";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js";
import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons/faFileSignature";
import { faCalculator } from "@fortawesome/free-solid-svg-icons/faCalculator";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons/faTachometerAlt";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons/faFileAlt";
library.add(faHome, faFileSignature, faCalculator, faTachometerAlt, faFileAlt);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import axios from "axios";
axios.defaults.baseURL = "https://e-comstock.herokuapp.com";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.withCredentials = true;
window.JSZip = jszip;
const options = {
  color: "#7df9ff",
  failedColor: "#d9534f",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(VueProgressBar, options);
app.provide("progressBar", app.config.globalProperties.$Progress);
app.mount("#app");
