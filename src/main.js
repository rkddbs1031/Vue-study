// import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";

// createApp(App).use(store).use(router).mount("#app");
const app = Vue.createApp(App);
app.use(store).use(router);
app.use(VueAxios,axios);
app.mount("#app");