import { createRouter, createWebHistory } from "vue-router";
import LandingPageVue from "../views/LandingPage.vue";
import SignUpVue from "../views/SignUp.vue";
import Dashboard from "../views/Dashboard.vue";
import MakeACard from "../views/MakeACard.vue";
import Quiz from "../views/Quiz.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPageVue,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUpVue,
    },
    {
      path: "/dashboard/make-a-card",
      name: "MakeACard",
      component: MakeACard,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: Quiz,
    },
  ],
});

export default router;
