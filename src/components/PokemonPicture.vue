<template>

  <div class="pokemon-container" ref="tiltedElement">
    <img class="hidden-pokemon" :src="imgSrc" alt="pokemon" >

    <img v-if="showPokemon" class="animate__animated animate__fadeIn" :src="imgSrc" alt="pokemon" >
  </div>

  
</template>

<script>

import VanillaTilt from 'vanilla-tilt';

export default {

  props:{
    pokemonId: {
      type: Number,
      default: 1,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
      imgSrc() {
          return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
      }
    },

    mounted() {
    // Accede al elemento después de que se haya montado el componente
    const element = this.$refs.tiltedElement;

    // Inicializa VanillaTilt en el elemento
    VanillaTilt.init(element, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': .3,
      reverse: true,
    });
  },

}
</script>


<style>

img{
  user-select: none;
  -webkit-user-select: none;
  position: absolute;
  height: 250px;
  width: 250px;
  filter: drop-shadow(0 0 0.25rem #000000);
}

.hidden-pokemon{
  filter: brightness(0) drop-shadow(0 0 0.25rem #000000);
}

.pokemon-container{
  width: 250px;
  height: 250px;
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

</style>>