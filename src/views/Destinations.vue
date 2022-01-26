<template>
  <div class="destination moon bg">
    <div class="container sect">
      <h5 class="p"><span>01</span> pick your destination</h5>
      <div class="flex-container">
        <img :src="src" alt="planet_image"  />
        <div class="right-div">
          <div class="s">
            <div class="route-container">
              <ul>
                <li>
                  <router-link to="/destination" @click="(component = 'moon'), changeImage()"
                    >moon</router-link
                  >
                  <router-link to="/destination" @click="(component = 'Mars'), changeImage()"
                    >mars</router-link
                  >
                  <router-link to="/destination" @click="(component = 'Europa'), changeImage()"
                    >europa</router-link
                  >
                  <router-link to="/destination" @click="(component = 'Titan'), changeImage()"
                    >titan</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <keep-alive>
            <component :is="component"> </component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import Moon from "../components/Moon.vue";
import Europa from "../components/Europa.vue";
import Mars from "../components/Mars.vue";
import Titan from "../components/Titan.vue";

export default {
  components: {
    Moon,
    Europa,
    Mars,
    Titan,
  },
  data() {
    return {
      component: "Moon",
      src: "",
    };
  },
  mounted() {
    console.log(this.component);
    const planets = this.$store.getters.getPlanets;
    planets.forEach((planet) => {
      if (planet.name.toLowerCase() == this.component.toLowerCase()) {
        this.src = planet.src;
      }
      console.log(planet);
    });
  },
  methods: {
    changeImage() {
      const planets = this.$store.getters.getPlanets;
      planets.forEach((planet) => {
        if (planet.name.toLowerCase() == this.component.toLowerCase()) {
          this.src = planet.src;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.route-container {
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      a {
        text-transform: uppercase;
        font-size: 15px;
        justify-content: space-between;
        font-family: var(--barlow-condensed-family);
        margin-right: 1em;
        width: 100%;
        letter-spacing: 2.7px;
        color: var(--purple-color);
        position: relative;
        // &.router-link-exact-active:after {
        //   content: "";
        //   bottom: 0;
        //   top: 1.7em;
        //   position: absolute;
        //   width: 100%;
        //   height: 2px;
        //   left: 0em;
        //   background: var(--white-color);
        // }
      }
    }
  }
}
.destination {
  background-image: url("../assets/images/mobile-destination.png");
}
.container {
  top: 5em;
}
.flex-container {
  margin-top: 1.5em;
  img {
    width: 170px;
    height: 170px;
    animation: rotation 17s infinite linear;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.right-div {
  margin-top: 0.7em;
  position: relative;
  width: 100%;
}
.description {
  margin-top: 1em;
  h1 {
    font-family: var(--bellefair-family);
    color: var(--white-color);
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;
  }
  p {
    font-size: 15px;
    font-family: var(--barlow-family);
    color: var(--purple-color);
    line-height: 25px;
  }
}
hr {
  position: absolute;
  margin-top: 1em;
  border-top: 1px solid var(--stroke-fill);
  width: 80vw;
  max-width: 500px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  border-bottom: 0;
}
.dimensions {
  margin-top: 2.5em;
}
.travel {
  margin-top: 1.5em;
}
@media screen and (min-width: 729px) {
  .container {
    top: 7.2em;
    .p {
      width: 100%;
      //text-align: left;
      margin: 0;
    }
  }
  .flex-container {
    margin: 5em auto 00;
  }
}

@media screen and (min-width: 800px) {
  .destination {
    background-image: url("../assets/images/destination-bg.png");
  }
}
@media screen and (min-width: 1000px) {
  .s {
    position: absolute;
    left: 0;
  }
  .flex-container {
    display: flex;
    max-width: 1250px;
    justify-content: space-between;
    padding: 0px 30px;
    width: 100%;
    margin-top: 9em;
    img {
      width: 320px;
      height: 320px;
    }
  }
  .right-div {
    position: relative;
    width: 100%;
    margin-left: 5em;
    p,
    h1 {
      text-align: left;
    }
  }
}
@media screen and (min-width: 1200px) {
  .right-div {
    margin-left: 10em;
  }
}
</style>