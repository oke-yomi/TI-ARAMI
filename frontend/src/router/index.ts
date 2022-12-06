import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Home | Ti-arami",
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: {
      title: "About | Ti-arami",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: {
      title: "Login | Ti-arami",
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupView,
    meta: {
      title: "Signup | Ti-arami",
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
