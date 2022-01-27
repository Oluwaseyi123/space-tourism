<template>
<planet-container :planet="planet" />
 
</template>

<script>
export default {
  data() {
    return {
      planet: {
        name: "moon",
        src: require('@/assets/images/planets/moon.png'),
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        averageDistance: "384,400 km",
        travelTime: "3 days",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>