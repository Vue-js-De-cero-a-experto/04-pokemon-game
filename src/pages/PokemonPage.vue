<template>

    <h1 class="animate__animated animate__bounce">¿Quién es este Pokémon?</h1>
    <h2> Puntaje: {{ score }}</h2>

  <!-- <h1 v-if="!pokemon"> Espere por favor...</h1> -->
  
  <div v-if="pokemon">
  
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemons" @selectedOption="checkAnswer" :correctAnswer="correctAnswer" :userAnswer="userAnswer"/>
    <!-- <PokemonOptions :pokemons="pokemons" @selectedOption="checkAnswer($event)"/> Otra forma de hacerlo--> 
  </div>

  <div v-if="showPokemon">
    
    <h2 class="msg">{{ message }}</h2>

    <button class="btnNewGame animate__animated animate__fadeIn" @click="resetGame"> 
      Siguiente 
    </button>
  </div>

  <div class="confetti">
      <ConfettiExplosion v-if="confettiVisible"  />
  </div>

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';
import { nextTick } from "vue";
import ConfettiExplosion from "vue-confetti-explosion";

// console.table( await getPokemonOptions() )

export default {


  name: 'PokemonPage',

  components: {
    PokemonPicture,
    PokemonOptions,
    ConfettiExplosion,
  },

  data(){
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false,
      correctAnswer: 0,
      userAnswer: 0,
      confettiVisible: false,
      message: '',
      score: 0,
    }
  },

  methods: {
    async mixPokemons() {
      this.pokemons = await getPokemonOptions()

      const randomPokemon = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemons[randomPokemon]
    },

    async explode () {
        this.confettiVisible = false;
        await nextTick();
        this.confettiVisible = true;
    },

    checkAnswer( pokemonId ){
      if(this.pokemon.id === pokemonId){
        this.correctAnswer = pokemonId
        this.explode()
        this.message = `Felicidades, Adivinaste!`
        this.score++
      }else{
        this.message = `Oops, era ${this.pokemon.name}`
        this.score--
      }

      this.userAnswer = pokemonId
      this.showPokemon = true
    },

    resetGame(){
      this.pokemons = [],
      this.pokemon = null,
      this.showPokemon = false,
      this.correctAnswer = 0,
      this.userAnswer = 0,
      this.confettiVisible = false,
      this.message = ''
      this.mixPokemons()
    }

  },


  mounted() {
    this.mixPokemons()
  }

}
</script>

<style scoped>

.confetti{
    position: absolute;
    top: 20%;
    left: 50%;
}

.btnNewGame{
  width: 100px;
  height: 30px;
  background: orange;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: .24s;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
  letter-spacing: 2px;
}

.btnNewGame:hover{
  scale: 1.2;
}

.msg{
  margin-top: 70px;
  letter-spacing: 2px;
}



</style>