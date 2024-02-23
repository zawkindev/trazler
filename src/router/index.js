import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: "/p",
    component: () => import("@/playGround/PlayGround.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
