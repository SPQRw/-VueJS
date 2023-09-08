import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import PagesComp from "./components/PagesComp.vue";
import ItemsComp from "./components/ItemsComp.vue";

let routes = [
  { path: "/", component: PagesComp },
  { path: "/pages", component: PagesComp },
  { path: "/items", component: ItemsComp },
  { path: "/items/:id", component: ItemsComp },
  { path: "/second", redirect: "/items/2" },
];

let va = createApp(App);
let router = createRouter({
  history: createWebHashHistory(),
  routes,
});

va.use(router);
va.mount("#app");
