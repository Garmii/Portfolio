import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueFullPage from "vue-fullpage.js";
import "vue-fullpage.js/dist/style.css";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueFullPage);

app.mount("#app");
