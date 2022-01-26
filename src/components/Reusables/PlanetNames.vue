<template>
  <div class="route-container">
    <ul>
      <li>
        <router-link to="/destination" @click="(component = moon), show()">moon</router-link>
        <router-link to="/destination" @click="(component = moon)">mars</router-link>
        <router-link to="/destination" @click="(component = europa)">europa</router-link>
        <router-link to="/" @click="(component = planet.titan)">titan</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['planet', 'moon', 'mars', 'europa', 'titan'],
  methods: {
    show(){
      console.log('me')
    }
  }
};
</script>

<style lang="scss">
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
        &.router-link-exact-active:after {
        content: "";
          bottom: 0;
          top: 1.7em;
          position: absolute;
          width: 100%;
          height: 2px;
          left: 0em;
          background: var(--white-color);
        }
      }
    }
  }
}
</style>