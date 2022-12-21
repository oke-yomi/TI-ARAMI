import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import ShopView from "@/views/ShopView.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home | Ti-arami",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "About | Ti-arami",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "Login | Ti-arami",
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
    meta: {
      title: "Signup | Ti-arami",
    },
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
    meta: {
      title: "Shop | Ti-arami",
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: NotFound,
    meta: {
      title: "Error | Ti-arami",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
