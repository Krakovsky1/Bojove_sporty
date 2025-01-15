import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Sports from "../views/Sports.vue";
import Blog from "../views/Blog.vue";
import TimerPage from "../views/TimerPage.vue";
import Box from "../views/Box.vue";
import MMA from "../views/MMA.vue";
import Kickbox from "../views/Kickbox.vue";
import MuayThai from "../views/MuayThai.vue";
import KravMaga from "../views/KravMaga.vue";
import BlogPostPage from "../components/BlogPostPage.vue";
import Organizations from "@/views/Organizations.vue";
import BMICalculator from "@/components/BMICalculator.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/sports", name: "Sports", component: Sports },
  { path: "/organization", name: "Organizations", component: Organizations },
  { path: "/blog", name: "Blog", component: Blog },
  {
    path: "/blog/:id",
    name: "BlogPostPage",
    component: BlogPostPage,
    props: true,
  },
  { path: "/timer", name: "TimerPage", component: TimerPage },
  { path: "/box", name: "Box", component: Box },
  { path: "/mma", name: "MMA", component: MMA },
  { path: "/kickbox", name: "Kickbox", component: Kickbox },
  { path: "/muaythai", name: "MuayThai", component: MuayThai },
  { path: "/kravmaga", name: "KravMaga", component: KravMaga },
  { path: "/bmi", name: "BMICalculator", component: BMICalculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
