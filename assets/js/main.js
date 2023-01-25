const backgroundAreas = document.querySelectorAll('.lightdark')
let ativadoDark = false

const pokemonList = document.getElementById('pokemonList')

const maxRecords = 649;
const limit = 649;
let offset = 0;

function alterarModoEscuroClaro() {

    if (!ativadoDark) {
        backgroundAreas.forEach( (area)=> {
            area.classList.replace("bglight", "bgdark");  
        })  
        ativadoDark = true    
    } else if (ativadoDark) {
        backgroundAreas.forEach( (area)=> {
            area.classList.replace("bgdark", "bglight");
        })
        ativadoDark = false
    }
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}