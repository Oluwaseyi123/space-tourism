<template>
<planet-container :planet="planet" />
 
</template>

<script>
export default {
  data() {
    return {
      planet: {
        name: "mars",
        src: require('../assets/images/planets/mars.png'),
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        averageDistance: "225 MIL. km",
        travelTime: "9 months",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

</style>