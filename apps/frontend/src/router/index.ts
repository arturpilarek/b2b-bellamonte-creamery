import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: true },
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: { requiresAuth: false, layout: 'LoginLayout' },
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // next({ name: "login" });
    next();
  } else {
    next();
  }
});

export default router;
