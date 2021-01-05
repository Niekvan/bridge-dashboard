import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () =>
      import(/* webpackChunkName: "result" */ '../views/Result.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
