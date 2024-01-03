<template>

  <div class="pokemon-container">
    <img class="hidden-pokemon" :src="imgSrc" alt="pokemon">

    <img v-if="showPokemon" class="animate__animated animate__fadeIn" :src="imgSrc" alt="pokemon">
  </div>

  
</template>

<script>
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

}
</script>

<style>

img{
  user-select: none;
  -webkit-user-select: none;
  position: absolute;
  max-height: 200px;
  filter: drop-shadow(0 0 0.25rem #000000);
}

.hidden-pokemon{
  filter: brightness(0) drop-shadow(0 0 0.25rem #000000);
}

.pokemon-container{
  height: 200px;
  margin: 30px 0px;
  display: flex;
  justify-content: center;
}

</style>>