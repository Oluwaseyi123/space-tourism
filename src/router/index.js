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
    component: () =>
      import( "../views/About.vue"),
  },
  {
    path: "/destination",
    name: "Destination",

    component: () =>
      import("../views/Destinations.vue"),
    children: [
      {
        path: 'moon',
        component: () =>
          import( "../components/Planets/Moon.vue"),
      },
      {
        path: 'mars',
        component: () =>
          import( "../components/Planets/Mars.vue"),
      },
      {
        path: 'europa',
        component: () =>
          import( "../components/Planets/Europa.vue"),
      },
      {
        path: 'titan',
        component: () =>
          import( "../components/Planets/Titan.vue"),
      },
    ]
  },
  {
    path: "/meet-crew",
    name: "Meet Crew",
    component: () =>
      import("../views/MeetCrew.vue"),
  },
  {
    path: "/technology",
    name: "Technology",
    component: () =>
      import("../views/Technology.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
