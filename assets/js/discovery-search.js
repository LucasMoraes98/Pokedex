let objInputSearch = '';
let numInputSearch = 0;
let spnErroSearch = document.getElementById('msgErroSearch');
let erroExists = false;

function searchPokemon() {
    objInputSearch = document.getElementById('discovery__plus__search__form__input').value; 
    numInputSearch = parseInt(objInputSearch);

    if(numInputSearch < 1 || numInputSearch > 386) {
        showErro("Limited");
    } else {
        pokeApi.getPokemonByNameOrNumber(objInputSearch).then( (onePokemon = [])=> {
            const newHTML = convertPokemonToLi(onePokemon)
            if(onePokemon.number > maxRecords) {
                console.log("Busca nome supera geração")
                showErro("Limited");
            } else {
                clearErroSPN();
                listaPokemon.innerHTML = newHTML;
            }
        })
    }
    
}


bttSearch.addEventListener('click', function(e) {
    e.preventDefault();
    searchPokemon();
})

pokeApi.getPokemonByNameOrNumber = (objInputSearch)=> {
    const urlWanted = `https://pokeapi.co/api/v2/pokemon/${objInputSearch}/`;
    
    return fetch(urlWanted)
        .then( (response)=> response.json() )
        .then( convertDetPokemonToClassPokemon )
        .catch( (error)=> showErro(error))
}

function showErro(msgErro) {
    if(!erroExists) {
        spnErroSearch.classList.replace("ocultaSPN", "exibeSPN");
        spnErroSearch.classList.replace("animat", "animate__shakeX");
        infoErroHTML = convertErroToSpan(msgErro);
        spnErroSearch.innerHTML += infoErroHTML;
        erroExists = true;
    } else if(erroExists){
        clearErroSPN();
        spnErroSearch.classList.replace("ocultaSPN", "exibeSPN");
        spnErroSearch.classList.replace("animat", "animate__shakeX");
        infoErroHTML = convertErroToSpan(msgErro);
        spnErroSearch.innerHTML += infoErroHTML;
        erroExists = true;
    }
}

function clearErroSPN() {
    spnErroSearch.classList.replace("animate__shakeX", "animat");
    spnErroSearch.classList.replace("exibeSPN", "ocultaSPN");
    spnErroSearch.innerHTML = '';
    erroExists = false;
}