<template>
  <technology-container :data="data"/>
</template>

<script>

export default {
    components: {},
     data(){
      return{
        data: {
          name: 'space capsule',
          info: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`
        }
      }
    }
}
</script>

<style>

</style>