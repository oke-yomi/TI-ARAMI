import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: HomeView,
  },
  {
    path: "/shop",
    name: "Shop",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: HomeView,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
