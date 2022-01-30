<template>
  <div class="meet bg">
    <div class="meet-container sect">
      <h5><span>02</span> meet your crew</h5>

      <div class="flex-container">
        <div class="img-container">
          <img :src="src" alt="crew_image" />
          <hr />
        </div>

        <div class="right-div">
          <div class="paginationn">
            <div
              @click.self="
                (component = 'Douglas'), (isActive = 'btn1'), changeImage()
              "
              :class="{ page, one, active: isActive === 'btn1' }"
            ></div>
            <div
              @click.self="
                (component = 'Mark'), (isActive = 'btn2'), changeImage()
              "
              :class="{ active: isActive === 'btn2' }"
            ></div>
            <div
              class="page three rest"
              @click.self="
                (component = 'Victor'), (isActive = 'btn3'), changeImage()
              "
              :class="{ active: isActive === 'btn3' }"
            ></div>
            <div
              class="page four rest"
              @click.self="
                (component = 'Ansari'), (isActive = 'btn4'), changeImage()
              "
              :class="{ active: isActive === 'btn4' }"
            ></div>
          </div>
          <component :is="component"> </component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Douglas from "../components/Crew/Douglas.vue";
import Mark from "../components/Crew/Mark.vue";
import Victor from "../components/Crew/Victor.vue";
import Ansari from "../components/Crew/Ansari.vue";
export default {
  data() {
    return {
      component: "Douglas",
      src: "",
      isActive: "btn1",
    };
  },
  components: {
    Douglas,
    Mark,
    Victor,
    Ansari,
  },
  mounted() {
    this.changeImage();
  },
  methods: {
    changeImage() {
      const crew = this.$store.getters.getCrew;
      crew.forEach((member) => {
        if (member.name.toLowerCase() == this.component.toLowerCase()) {
          this.src = member.src;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  opacity: 1;
  background-color: red;
}
.meet {
  //overflow: hidden;
  height: 105vh;
  background-image: url("../assets/images/meet-crew-mobile.png");
}
.meet-container {
  margin-top: 8em;
}
.flex-container {
  position: relative;
  margin-top: 2em;
  .img-container {
    position: relative;

    img {
      width: 200px;
      height: 230px;
    }
    hr {
      width: 86vw;
      max-width: 500px;
      left: 50%;
      transform: translate(-50%, 0);
      top: 14.4em;
      border-top: 1px solid var(--stroke-fill);
      border-bottom: none;
      position: absolute;
    }
  }
}
.paginationn {
  display: flex;
  align-items: center;
  width: 90px;
  margin: 1em auto 0;
  div {
    &:nth-of-type(1) {
      margin: 0 auto;
      border-radius: 50%;
      width: 10px;
      height: 10px;
    background-color: var(--white-color);
      cursor: pointer;
    }
    &:nth-of-type(2),&:nth-of-type(3), &:nth-of-type(4) {
      margin: 0 auto;
      border-radius: 50%;
      width: 10px;
      height: 10px;
     background: var(--white-color);
      cursor: pointer;
       opacity: 0.17;
    }
  }
}
@media screen and (min-width: 729px) {
  .meet-container {
    top: 2em;
  }
  .flex-container {
    display: flex;
    margin-top: 1em;
    flex-direction: column-reverse;
    hr {
      display: none;
    }
    .img-container {
      margin-top: 2em;
      img {
        width: 300px;
        height: 350px;
      }
    }
  }
  .right-div {
    display: flex;
    flex-direction: column-reverse;
  }
}
@media screen and (min-width: 800px) {
  .meet {
    background-image: url("../assets/images/meet-crew.png");
  }
}
@media screen and (min-width: 1000px) {
  .meet {
    overflow-y: hidden;
    height: 100vh;
  }
}
@media screen and (min-width: 1120px) {
  .meet-container {
    margin-top: 8em;
  }
  .flex-container {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    .img-container {
      img {
        width: 420px;
        height: 710px;
      }
    }
  }
  .right-div {
    //margin-right: 5em;
    p {
      text-align: left;
    }
  }
  .paginationn {
    margin: 0;
  }
}

@media screen and (min-width: 1330px) {
  .right-div {
    margin-right: 7em;
  }
  .paginationn {
    margin: 7em 0 0;
  }
}
</style>