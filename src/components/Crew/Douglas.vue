<template>
  <crew-container :data="data" />
</template>

<script>
import CrewContainer from "./CrewContainer.vue";
export default {
  components: { CrewContainer },
  data() {
    return {
      data: {
        name: "douglas hurley",
        role: "commander",
        info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
    };
  },
};
</script>

<style>
</style>