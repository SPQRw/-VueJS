import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import ProductSelection from "./components/ProductSelection.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import OrderConfirmation from "./components/OrderConfirmation.vue";

const routes = [
  { path: "/", component: ProductSelection },
  { path: "/cart", component: ShoppingCart },
  { path: "/confirmation", component: OrderConfirmation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
