import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthenticationView.vue"),
    },
  ],
});
