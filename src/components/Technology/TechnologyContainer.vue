<template>
  <div class="technology-info">
    <p class="terminology gen">the terminology...</p>
    <p class="tech gen">{{data.name}}</p>
    <p class="tech-info">
     {{data.info}}
    </p> 
  </div>
</template>

<script>
export default {
  props: ['data']
};
</script>

<style lang="scss" scoped>
.technology-info {
  padding: 20px 50px;
  .gen {
    text-transform: uppercase;
    text-align: center;
    font-style: normal;
    font-weight: normal;
  }
  .terminology {
    color: var(--purple-color);
    font-family: var(--barlow-condensed-family);
    font-size: 14px;
    letter-spacing: 2.3625px;
  }
  .tech {
    color: var(--purple-color);
    font-family: var(--bellefair-family);
    font-size: 24px;
    margin-top: 10px;
  }
  .tech-info {
    font-size: 15px;
    line-height: 25px;
    color: var(--purple-color);
    font-family: var(--barlow-family);
    margin-top: 1em;
  }
}

@media screen and (min-width: 1000px){
  .technology-info{
    .gen, .tech-info,.terminology{
      text-align: left;
       width: 390px;
    }
    .terminology{
      font-size: 17px;
    }
    .tech{
      font-size: 40px;
    }
    .tech-info{
      font-size: 19px;
    }
  }
}
@media screen and (min-width: 1300px){
  .technology-info{
    .gen, .tech-info,.terminology{
     width: 450px;
    }
   
    .tech{
      width: 500px;
      font-size: 54px;
    }
    .tech-info{
      font-size: 19px;
    }
  }
}
</style>