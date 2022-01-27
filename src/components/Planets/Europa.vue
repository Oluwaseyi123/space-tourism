<template>
<planet-container :planet="planet" />
 
</template>

<script>
export default {
  data() {
    return {
      planet: {
        name: "europa",
        src: require('@/assets/images/planets/europa.png'),
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        averageDistance: "628 MIL. km",
        travelTime: "3 years",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>