<template>
  <div class="home bg">
    <div class="hero sect" >
      <div class="left-div">
        <p>So you want to travel to</p>
        <h1>space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="right-div">
        <div class="ex-container">
          <router-link to="/destination/moon">explore</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
};
</script>



<style lang="scss" scoped>
.home {
  background-image: url("../assets/images/mobile-home.png");
  height: 120vh;
}
.hero{
  top: 10em;
}
.left-div {
  width: 100%;
  margin-bottom: 7em;
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }
  h1 {
    text-transform: uppercase;
    color: var(--white-color);
    font-family: var(--bellefair-family);
    font-size: 80px;
    margin-bottom: 0.2em;
     font-style: normal;
    font-weight: normal;
    
  }
  p {
    width: 300px;
    color: var(--purple-color);
    &:nth-of-type(1) {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 500;
      font-family: var(--barlow-condensed-family);
      margin-bottom: 1em;
      letter-spacing: 2.7px;
    }
    &:nth-of-type(2) {
      font-size: 15px;
      font-family: var(--barlow-family);
    }
  }
}
.right-div {
  transition: all 0.5s ease;
}
.ex-container {
  width: 100px;
  height: 100px;
  background: var(--white-color);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 auto;
  transition: all 0.5s ease;
  &:hover:before{
    transition: all 0.5s ease;
    opacity: 0.1;
   
  }
  &:before {
    content: "";
    position: absolute;
    transition: all 0.5s ease;
    width: 150px;
    height: 150px;
    background: var(--white-color);
    border-radius: 50%;
    mix-blend-mode: normal;
     z-index: -1;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 0);
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--dark-color);
    font-family: var(--bellefair-family);
    margin: 0 auto;
  }
}
@media screen and (min-width: 460px) {
  .left-div {
    p {
      width: 400px;
    }
  }
}
@media screen and (min-width: 800px) {
  .home {
    background-image: url("../assets/images/home.png");
  }
}
@media screen and (min-width: 1000px) {
  .hero {
    width: 100%;
    padding: 0px 100px;
    display: flex;
    top: 18em;
  
    align-items: end;
    justify-content: space-between;
  }
  .left-div {
   align-items: flex-end;
    p,
    h1 {
      text-align: left;
    }
    h1{
      font-size: 110px;
    }
    p {
      margin: 0;
      width: 70%;
      max-width: 420px;
      &:nth-of-type(1){
        font-size: 23px;
      }
       &:nth-of-type(2){
        font-size: 17px;
      }
    }
  }
  .right-div{
    position: relative;
    display: flex;
  
    bottom:6em;
    
  }
  .ex-container {
    width: 160px;
    height: 160px;
    position: relative;
    a{
      transition: all .5s ease;
    }
    &:hover:before {
      width: 200px;
      height: 200px;
    }
  }
}
@media screen and (min-width: 1000px){
   .hero {
    padding: 0px 120px;
  }
  .home {
  
  height: 100vh;
}
}
@media screen and (min-width: 1280px){
   .left-div {
    h1{
      font-size: 150px;
       margin-bottom: 0em;
    }
    p {
      margin: 0;
      width: 70%;
      max-width: 420px;
      &:nth-of-type(1){
        font-size: 28px;
      }
       &:nth-of-type(2){
        font-size: 18px;
      }
    }
  }
   .right-div{
    bottom:8em;  
  }
  .ex-container {
    width: 220px;
    height: 220px;
    a{
      font-size: 32px;
    }
    &:hover:before {
      width: 290px;
      height: 290px;
    }
  }
}
</style>
