pokeApi.getPokemonByType = (oneType)=> {
    const urlType = `https://pokeapi.co/api/v2/type/${oneType}`;

    return fetch(urlType)
        .then( (responseT)=> responseT.json() )
        .then( (jsonTypesBody)=> jsonTypesBody.pokemon)
        .then( (totalPokemon)=> totalPokemon.map(pokeApi.getIDPokemon))
        .then( (listaID)=> Promise.all(listaID) )
        .then( (numberPokemon)=> numberPokemon.filter(pokeApi.filtraPokemon))
        .then( (listaFiltrada)=> Promise.all(listaFiltrada))
        .then( (filtredPokemon)=> filtredPokemon.map(pokeApi.getDetailTyped))
        .then( (detailTypesRequisicoes)=> Promise.all(detailTypesRequisicoes) )
        .then( (detailsTypesPokemons)=> detailsTypesPokemons)
}