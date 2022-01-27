<template>
  <div class="description">
    <h1>{{ planet.name }}</h1>
    <p>
      {{ planet.description }}
    </p>
  </div>
  <hr />
  <div class="dimensions">
    <div class="avg-distance">
      <p class="sub-heading2">avg distance</p>
      <p class="sub-heading1">{{ planet.averageDistance }}</p>
    </div>
    <div class="avg-distance travel">
      <p class="sub-heading2">est. travel time</p>
      <p class="sub-heading1">{{ planet.travelTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["planet"],
};
</script>

<style lang="scss" scoped>
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
  .dimensions {
    width: 100%;
    max-width: 500px;
    margin: 3em auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .travel {
      margin-top: 0;
    }
  }
}

@media screen and (min-width: 1000px) {
  .description {
    margin-top: 3em;
    p {
      width: 450px;
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
  hr {
    margin-top: 1em;
    position: none;
    border-top: 1px solid var(--stroke-fill);
    width: 100%;
    max-width: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    border-bottom: 0;
  }
}
</style>
