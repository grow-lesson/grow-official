import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TopPage",
    component: () => import("../components/TopPage.vue"),
  },
  {
    path: "/philosophy",
    name: "PhilosophyPage",
    component: () => import("../components/PhilosophyPage.vue"),
  },
  {
    path: "/company",
    name: "CompanyPage",
    component: () => import("../components/CompanyPage.vue"),
  },
  {
    path: "/employee",
    name: "EmployeePage",
    component: () => import("../components/EmployeePage.vue"),
  },
  {
    path: "/philosophy",
    name: "Philosophy",
    component: () => import("../components/PhilosophyPage.vue"),
  },
  {
    path: "/employee-detail",
    name: "EmployeeDetailPage",
    component: () => import("../components/EmployeeDetailPage.vue"),
  },
  {
    path: "/accomplishment",
    name: "AccomplishmentPage",
    component: () => import("../components/AccomplishmentPage.vue"),
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: () => import("../components/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
