<template>
  <planet-container :planet="planet" />
</template>

<script>

export default {
  components: {  },
  data() {
    return {
      planet: {
        name: "Titan",
        src: require('../assets/images/planets/titan.png'),
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        averageDistance: "1.6 BIL. km",
        travelTime: "7 years",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>