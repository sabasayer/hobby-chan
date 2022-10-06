import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import ToastService from "primevue/toastservice";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { i18n } from "./localization";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(i18n);

app.component("PButton", Button);
app.use(ToastService);

app.mount("#app");
