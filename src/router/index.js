import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "default" },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/",
    name: "Auth",
    meta: { layout: "auth" },
    component: () => import("@/views/AuthView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "Auth" });
  } else {
    next();
  }
});

export default router;