import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TopPage",
    component: () => import("../components/TopPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/grow-official/"),
  routes,
});

export default router;
