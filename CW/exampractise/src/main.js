import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import purchaseForm from "./components/purchaseForm.vue";
import incomeForm from "./components/incomeForm.vue";
import statForm from "./components/statForm.vue";

const routes = [
  { path: "/purchases", component: purchaseForm },
  { path: "/incomes", component: incomeForm },
  { path: "/statistics", component: statForm },
];

let va = createApp(App);
let router = createRouter({
  history: createWebHashHistory(),
  routes,
});

va.use(router);
va.mount("#app");
