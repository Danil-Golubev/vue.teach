import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../src/components/HelloWorld.vue";
import Cart from "../src/pages/Cart.vue";
import ProductPage from "../src/pages/ProductPage.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/cart", component: Cart },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: ProductPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
