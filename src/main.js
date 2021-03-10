import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import jszip from 'jszip';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js';
import 'datatables.net/js/jquery.dataTables.min.js'
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js'
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css'
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js';
import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

window.JSZip = jszip;
const app = createApp(App)
app.use(router)
app.mount('#app')