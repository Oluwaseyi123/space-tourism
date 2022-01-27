import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/style.scss'

import PlanetContainer from './components/Planets/PlanetContainer'
import CrewContainer from './components/Crew/CrewContainer'
import TechnologyContainer from './components/Technology/TechnologyContainer.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('planet-container', PlanetContainer)
app.component('crew-container', CrewContainer)
app.component('technology-container', TechnologyContainer)
app.mount("#app");
