import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/style.scss'

import PlanetContainer from './components/PlanetContainer'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('planet-container', PlanetContainer)
app.mount("#app");
