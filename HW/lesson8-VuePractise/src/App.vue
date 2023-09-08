<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import ProductSelection from './ProductSelection.vue';
import Cart from './Cart.vue';
import OrderConfirmation from './OrderConfirmation.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: ProductSelection },
  { path: '/cart', component: Cart },
  { path: '/confirmation', component: OrderConfirmation },
];

const router = new VueRouter({
  routes,
});

export default {
  router,
};
</script>