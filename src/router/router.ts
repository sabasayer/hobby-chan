import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthenticationView.vue"),
    },
  ],
});
