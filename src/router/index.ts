import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import FullPage from "../views/FullPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FullPage,
    },
  ],
});

export default router;
