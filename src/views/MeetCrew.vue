<template>
  <div class="meet bg">
    <div class="meet-container sect">
      <h5><span>02</span> meet your crew</h5>

      <div class="flex-container">
        <img src="../assets/images/crew/douglas.png" alt="" />
        <hr />
        <div class="right-div">
          <div class="pagination"></div>
          <p class="role">commander</p>
          <p class="commander">douglas hurley</p>
          <p class="info">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.meet {
  background-image: url("../assets/images/meet-crew-mobile.png");
}
.meet-container {
  margin-top: 5em;
}
.flex-container {
  margin-top: 2em;
  img {
    width: 200px;
  }
}
@media screen and (min-width: 800px) {
  .meet {
    background-image: url("../assets/images/meet-crew.png");
  }
}
</style>