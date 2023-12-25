<template>
  <h1 class="animate__animated animate__bounce">¿Quién es este Pokemon?</h1>

  <PokemonPicture/>
  <PokemonOptions/>
</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
  }
}
</script>

<style>

</style>