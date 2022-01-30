<template>
  <the-header />
  <router-view v-slot="{ Component }">
    <transition name="page-anim"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
      <component :is="Component"> </component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/Reusables/TheHeader.vue'
export default {
  components: {
    TheHeader

  }
}
</script>


<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
