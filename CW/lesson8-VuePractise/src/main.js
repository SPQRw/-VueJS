import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import App from "./App.vue";

let va = createApp(App);

let routes = [
  // { path: "/", component: App },
  { path: "/first", component: HelloWorld },
  { path: "/second", component: FirstPage },
  { path: "/third", component: SecondPage },
];

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});
va.use(router);
va.mount("#app");
