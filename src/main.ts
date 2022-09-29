import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "primeVue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.component("PButton", Button);

app.mount("#app");
