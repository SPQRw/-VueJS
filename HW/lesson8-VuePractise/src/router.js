import { createRouter, createWebHistory } from "vue-router";
import ProductSelection from "./components/ProductSelection.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import OrderConfirmation from "./components/OrderConfirmation.vue";

const routes = [
  {
    path: "/",
    name: "ProductSelection",
    component: ProductSelection,
  },
  {
    path: "/cart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
  {
    path: "/confirmation",
    name: "OrderConfirmation",
    component: OrderConfirmation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
