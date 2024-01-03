import pokemonApi from '../api/pokemonApi'

const getPokemons = () => {
  const pokemonsArr = Array.from( Array(650) )//Creamos array con 650 posiciones
  return pokemonsArr.map( (_ , index) => index + 1 ) //Asignamos los números del 1 al 650 en cada posición.
}

//Reordenamos aleatoriamente las posiciones.
const getPokemonOptions = async () =>{
  const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )

  // console.log(mixedPokemons), Obtenemos los primeros 4 pokemones para las opciones.
  const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) )

  return pokemons
}

const getPokemonNames = async ([a, b, c, d] = []) => {

  const promiseArr = [
    pokemonApi.get(`/${ a }`),
    pokemonApi.get(`/${ b }`),
    pokemonApi.get(`/${ c }`),
    pokemonApi.get(`/${ d }`),
  ]

  const [p1, p2, p3, p4] = await Promise.all( promiseArr )

  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ]
}


export default getPokemonOptions