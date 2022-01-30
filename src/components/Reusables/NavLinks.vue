<template>
  <div class="mobile-nav">
    <router-link to="/">
      <img src="@/assets/images/logo.png" alt="" />
    </router-link>
    <div class="try">
      <div class="bars" @click="animateNav" :class="{ animate: isClicked }">
        <div class="bar one"></div>
        <div class="bar two"></div>
      </div>
      <div class="line"></div>
      <nav>
        <ul :class="{ show: isClicked }">
          <li>
            <router-link to="/" @click="closeNav">
              <span>00</span> home</router-link
            >
            <router-link to="/destination/moon" @click="closeNav"
              ><span>01</span> destination</router-link
            >
            <router-link to="/meet-crew" @click="closeNav"
              ><span>02</span> crew</router-link
            >
            <router-link to="/technology" @click="closeNav"
              ><span>03</span> technology</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false,
      isNav: true,
    };
  },
  methods: {
    animateNav() {
      this.isClicked = !this.isClicked;
    },
    closeNav() {
      this.isNav = false;
     
    },
  },
};
</script>

<style lang="scss" scoped>
.bars {
  z-index: 100;
  position: relative;
  cursor: pointer;
  .bar {
    width: 20px;
    height: 2px;
    background: var(--purple-color);
    transition: all 0.2s ease;
  }
  .bar:nth-of-type(1) {
    margin-bottom: 5px;
  }
}
.mobile-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    img {
      width: 30px;
    }
  }
}
.animate {
  .one {
    transform: rotate(45deg);
  }
  .two {
    transform: rotate(-45deg) translate(4px, -5px);
  }
}
// .off{
//   display: none;
// }
ul {
  list-style: none;
  display: none;
  transition: all 0.2s ease;
  li {
    a {
      text-decoration: none;
      color: var(--white-color);
      transition: all 0.3s ease;
      font-size: 20px;
    }
  }
}
.show {
  display: flex;
  flex-direction: column;
  position: absolute;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  padding-left: 3em;
  animation: slideIn 0.2s linear;
  top: 0;
  padding-top: 6em;
  right: 0;
  width: 55%;
  max-width: 250px;
  height: 100vh;
  z-index: 1;
  font-family: var(--barlow-condensed-family);
  li {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  a {
    margin-bottom: 2em;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 2.7px;
    position: relative;
    &.router-link-exact-active:after {
      content: "";
      right: 0;
      border: 1px solid var(--grey-color);
      position: absolute;
      width: 3px;
      height: 25px;

      background: var(--white-color);
    }
    span {
      font-weight: 700;
    }
  }
}
.line {
  width: 42%;
  height: 1px;
  position: absolute;
  left: 10em;
  z-index: 1000;
  background: var(--white-color);
  mix-blend-mode: normal;
  opacity: 0.25;
  display: none;
}
@keyframes slideIn {
  from {
    right: -10em;
  }
  to {
    right: 0;
  }
}

@media screen and (min-width: 729px) {
  ul {
    position: absolute;
    display: flex;
    height: 80px;
    right: 0;
    font-family: var(--barlow-condensed-family);
    top: 0;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 50%;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    li {
      margin: 0 auto;
      a {
        color: var(--white-color);
        text-transform: uppercase;
        position: relative;
        font-size: 16px;
        margin-right: 20px;
        transition: all 0.5s ease;
        &:nth-of-type(6) {
          margin: 0;
        }

        &.router-link-exact-active:after {
          content: "";
          bottom: 0;
          top: 3em;
          position: absolute;
          width: 100%;
          height: 2px;
          left: -0.2em;
          background: var(--white-color);
        }
        span {
          display: none;
        }
      }
    }
  }
  .bars {
    display: none;
  }
}

@media screen and (min-width: 1120px) {
  .line {
    display: block;
  }
  nav {
    ul {
      li {
        display: flex;
        a {
          display: flex;
          span {
            padding-right: 0.2em;
            display: block;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>