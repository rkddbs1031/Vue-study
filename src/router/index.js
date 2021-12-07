import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Todo from "../views/Todo.vue";
import Todo2 from "../views/Todo2.vue";
import Apitest from "../views/Apitest.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/todo2",
    name: "Todo2",
    component: Todo2,
  },
  {
    path: "/api",
    name: "Apitest",
    component: Apitest,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
