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
        name: "mark shuttleorth",
        role: "mission specialist",
        info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
    };
  },
};
</script>

<style>
</style>