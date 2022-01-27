<template>
<header>
    <nav-links />
</header>
  
</template>

<script>
import NavLinks from "./NavLinks.vue";
export default {
  components: {
    NavLinks,
  },
};
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  max-width: 1300px;
    z-index: 100;
    padding: 20px 40px;
}
</style>