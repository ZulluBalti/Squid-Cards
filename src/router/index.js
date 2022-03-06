import { createRouter, createWebHistory } from "vue-router";
import LandingPageVue from "../views/LandingPage.vue";
import TnC from "../views/TermNconditions.vue";
import privacyPolicy from "../views/Privacy-Policy.vue";
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
      path: "/terms-and-conditions",
      name: "TnC",
      component: TnC,
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: privacyPolicy,
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
