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
        name: "victor glover",
        role: "pilot",
        info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      },
    };
  },
};
</script>

<style>
</style>