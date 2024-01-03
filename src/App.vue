<template>

  <PokemonPage />

</template>

<script>
import PokemonPage from './pages/PokemonPage.vue'
import 'animate.css';


export default {
  name: 'App',
  components: {
    PokemonPage,
  }
}
</script>

<style>
  
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

*{
  font-family: 'Bangers';
  font-weight: 100;
}

html{
  height: 100vh;
  overflow: hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

  .font-bangers{
    font-family: 'Bangers';
    font-weight: 100;
  }
</style>
