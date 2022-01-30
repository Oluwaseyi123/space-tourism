<template>
  <div class="technology bg">
    <div class="technology-container sect">
      <h5><span>03</span> space launch 101</h5>
      <div class="flexx-container">
        <div class="image-container">
          <img :src="src" alt="tech_image" />
        </div>
        <div class="right">
          <div class="pagination">
            <div class="page one" @click="(component = 'LaunchVehicle'),(isActive = 'btn1'),changeImage()" :class="{ active: isActive === 'btn1' }">
              <p>1</p>
            </div>
            <div
              class="page two rest"
              @click="
                (component = 'Spaceport'), (isActive = 'btn2'), changeImage()
              "
              :class="{ active: isActive === 'btn2' }"
            >
              <p>2</p>
            </div>
            <div
              class="page three rest"
              @click="
                (component = 'SpaceCapsule'), (isActive = 'btn3'), changeImage()
              "
              :class="{ active: isActive === 'btn3' }"
            >
              <p>3</p>
            </div>
          </div>
          <component :is="component"> </component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LaunchVehicle from "../components/Technology/LaunchVehicle.vue";
import SpaceCapsule from "../components/Technology/SpaceCapsule.vue";
import Spaceport from "../components/Technology/Spaceport.vue";
export default {
  components: { LaunchVehicle, SpaceCapsule, Spaceport },
  data() {
    return {
      component: "LaunchVehicle",
      isActive: 'btn1',
      src: "",
    };
  },
  mounted() {
    this.changeImage();
  },
  methods: {
    changeImage() {
      const technology = this.$store.getters.getTechnology;
      technology.forEach((tech) => {
        if (tech.name.toLowerCase() == this.component.toLowerCase()) {
          this.src = tech.src;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.active {
  background: var(--white-color);
  p{
    color: var(--dark-color);
  }
}
.technology {
  overflow-x: hidden;
  height: 125vh;
  background-image: url("../assets/images/mobile-technology.png");
}
.technology-container {
  margin-top: 6em;
}
.flexx-container {
  margin-top: 2em;
}
.image-container {
  width: 100%;
  img {
    object-fit: fill;
    width: 100vw;
    height: 40vh;
  }
}
.pagination {
  display: flex;
  align-items: center;
  width: 200px;
  margin: 1em auto 0;
  .page {
    margin: 0 auto;
    width: 40px;
    height: 40px;
    border: 1px solid var(--stroke-fill);
    border-radius: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--white-color);
    p {
      z-index: 100;
      margin: 0 auto;
    
    }
  }
}
@media screen and (min-width: 729px) {
  .technology-container {
    top: 4em;
  }
}
@media screen and (min-width: 800px) {
  .technology {
    background-image: url("../assets/images/technology.png");
  }
}

@media screen and (min-width: 1000px) {
  .technology {
    overflow-y: hidden;
    height: 100vh;
  }

  .flexx-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .image-container {
    img {
      width: 400px;
      height: 477px;
    }
  }
  .right {
    width: 500px;
    display: flex;
  }
  .pagination {
    flex-direction: column;
    .page {
      margin-bottom: 2em;
    }
  }
}
@media screen and (min-width: 1300px) {
  .right {
    margin-right: 12em;
  }
  .image-container {
    img {
      width: 700px;
      height: 500px;
      margin-right: -24em;
    }
  }
}
</style>