import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/destination",
    name: "Destination",
    
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Destinations.vue"),
  },
  {
    path: "/meet-crew",
    name: "Meet Crew",
    component: () =>
      import( "../views/MeetCrew.vue"),
  },
  {
    path: "/technology",
    name: "Technology",
    component: () =>
      import( "../views/Technology.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
