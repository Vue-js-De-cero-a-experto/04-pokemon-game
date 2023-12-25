<template>

  <div class="pokemon-container">
    <img class="hidden-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon">

    <img class="animate__animated animate__fadeIn" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon">
  </div>

  
</template>

<script>
export default {

}
</script>

<style>

img{
  user-select: none;
  -webkit-user-select: none;
  position: absolute;

  filter: drop-shadow(0 0 0.75rem #000000);
}

.hidden-pokemon{
  filter: brightness(0);
}

.pokemon-container{
  height: 200px;
  margin: 30px 0px;
  display: flex;
  justify-content: center;
}

</style>>