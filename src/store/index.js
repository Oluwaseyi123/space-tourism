import { createStore } from "vuex";

export default createStore({
  state: {
    planets: [
      {
        name: "moon",
        src: require('../assets/images/planets/moon.png'),
      },
      {
        name: "mars",
        src: require('../assets/images/planets/mars.png'),
      },
      {
        name: "europa",
        src: require('../assets/images/planets/europa.png'),
      },
      {
        name: "Titan",
        src: require('../assets/images/planets/titan.png'),
      },
    ],
    crew: [
      {
        name: 'Douglas',
        src: require('../assets/images/crew/douglas.png'),
      },
      {
        name: 'Mark',
        src: require('../assets/images/crew/mark.png'),
      },
      {
        name: 'Victor',
        src: require('../assets/images/crew/victor.png'),
      },
      {
        name: 'Ansari',
        src: require('../assets/images/crew/ansari.png'),
      }
    ],
    technology: [
      {
        name: 'LaunchVehicle',
        src: require('../assets/images/technology/launch-vehicle.png'),
      },
      {
        name: 'SpaceCapsule',
        src: require('../assets/images/technology/space-capsule.png'),
      },
      {
        name: 'Spaceport',
        src: require('../assets/images/technology/spaceport.png'),
      },
    ]
  },
  getters: {
    getPlanets(state) {
      return state.planets
    },
    getCrew(state) {
      return state.crew
    },
    getTechnology(state) {
      return state.technology
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
