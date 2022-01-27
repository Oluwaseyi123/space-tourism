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
        name: "Anousheh Ansari",
        role: "flight engineer",
        info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
    };
  },
};
</script>

<style>
</style>