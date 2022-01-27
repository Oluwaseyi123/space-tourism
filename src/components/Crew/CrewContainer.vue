<template>
  <div class="crew-info">
    <p class="role">{{ data.role }}</p>
    <p class="commander">{{ data.name }}</p>
    <p class="info">
      {{ data.info }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.crew-info {
  margin-top: 1.4em;
  width: 100%;
  .role,
  .commander {
    text-transform: uppercase;
    font-style: normal;
    font-weight: normal;
    font-family: var(--bellefair-family);
    text-align: center;
    color: var(--white-color);
  }
  .role {
    font-size: 16px;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-bottom: 1em;
  }
  .commander {
    margin-top: 10px;
    font-size: 24px;
    line-height: 28px;
  }
  .info {
    font-family: var(--barlow-family);
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    width: 100%;

    color: var(--purple-color);
  }
}

@media screen and (min-width: 1120px) {
.crew-info {
  margin-top: 1.4em;
  width: 100%;
  .role,
  .commander {
    text-align: left;
  }
  .role {
    font-size: 26px;
  }
  .commander {
    margin-top: 15px;
    font-size: 50px;
    width:500px;
    line-height: auto;
  }
  .info {
    font-size: 18px;
    margin: 1em 0;
    line-height: 25px;
    text-align: left;
  }
}
}
</style>