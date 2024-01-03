<template>
    <div class="options-container">
        <button v-for="pokemon in pokemons" 
        :key="pokemon.id" 
        @click="$emit('selectedOption', pokemon.id)" 
        :class="correctAnswer === pokemon.id && ' correctAnswer'"
        >
            {{ pokemon.name }}

        </button>
    </div>

</template>

<script>


export default {

    props:{
        pokemons: {
            type: Array,
            required: true
        },
        correctAnswer: {
            type: Number,
            default: 0,
            required: true
        },
    },

}
</script>

<style scoped>

    .options-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    button{
        position: relative;
        width: 300px;
        padding: 10px;
        margin: 10px;
        font-size: 1.1rem;
        font-weight: 100;
        text-align: center;
        text-decoration: none;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        transition: .24s;
        letter-spacing: 2px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
    }

    button:hover{
        background: #000000;
        color: #fff;
        scale: 1.05;
    }

    button:active{
        scale: 1;
    }

    .correctAnswer{
        background: #50ff00;
    }
    
</style>