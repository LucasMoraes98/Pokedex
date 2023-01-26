const pokeApi = {}
var availablePokemon = false;
var idOnePokemon = 1;



function convertDetPokemonToClassPokemon(detPokemonAPI) {
    const pokemon = new Pokemon()
    pokemon.number = detPokemonAPI.id
    pokemon.name = detPokemonAPI.name

    const types = detPokemonAPI.types.map( (typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    pokemon.height = detPokemonAPI.height*10
    const tWeight = detPokemonAPI.weight*0.100
    pokemon.weight = tWeight.toFixed(2)

    pokemon.photo = detPokemonAPI.sprites.other.dream_world.front_default
    pokemon.gif = detPokemonAPI.sprites.versions["generation-v"]["black-white"].animated.front_default

    pokemon.hp = detPokemonAPI.stats[0].base_stat
    pokemon.speed = detPokemonAPI.stats[5].base_stat
    pokemon.attack = detPokemonAPI.stats[1].base_stat
    pokemon.defense = detPokemonAPI.stats[2].base_stat
    pokemon.specialattack = detPokemonAPI.stats[3].base_stat
    pokemon.specialdefense = detPokemonAPI.stats[4].base_stat

    const abilities = detPokemonAPI.abilities.map( (abilitySlot)=> abilitySlot.ability.name)
    const [ability] = abilities
    pokemon.abilities = abilities
    pokemon.ability = ability  
    
    return pokemon
}



pokeApi.getIDPokemon = function(draftPokemon) {
    let urlDraftPokemon = draftPokemon.pokemon.url;

    return fetch(urlDraftPokemon)
        .then( (response)=> response.json())
        .then( (jResponse)=> jResponse.id)
        .then( (idOnePoke)=> {return idOnePoke})
} 



pokeApi.getDetailPokemon = (pokemon)=> {
    return fetch(pokemon.url)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
}



pokeApi.getPokemons = (offset = 0, limit = 649)=> {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then( (response)=> response.json() )
        .then( (jsonBody)=> jsonBody.results)
        .then( (resultPokemons)=> resultPokemons.map(pokeApi.getDetailPokemon) )
        .then( (detailRequisicoes)=> Promise.all(detailRequisicoes) )
        .then( (detailsPokemons)=> detailsPokemons)
}


pokeApi.filtraPokemon = (idPokemon)=> {
    return idPokemon <= 386;
}


pokeApi.getDetailTyped = (idFiltred)=> {
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${idFiltred}`

    return fetch(urlPokemon)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
}