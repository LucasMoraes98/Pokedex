const backgroundAreas = document.querySelectorAll('.lightdark')
let ativadoDark = false

const listaPokemon = document.getElementById('listaPokemon')
const bttMore = document.getElementById('bttMore')
const divPaginacaoMore = document.getElementById('paginacaoMore')
const bttAll = document.getElementById('bttAll')

const maxRecords = 649;
let offset = 0;
let limit = 10;

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

function hideLoadMore() {
    divPaginacaoMore.removeChild(bttMore)
}

function showLoadMore() {
    divPaginacaoMore.appendChild(bttMore)
}

function loadMorePokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((allPokemons = []) => {
        const newHtml = allPokemons.map(convertPokemonToLi).join('')
        listaPokemon.innerHTML += newHtml
    })
}

loadMorePokemons(offset, limit)

bttMore.addEventListener('click', ()=> {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadMorePokemons(offset, newLimit);
        hideLoadMore();
    } else {
        loadMorePokemons(offset, limit)
    }
})

bttAll.addEventListener('click', ()=> {
    listaPokemon.innerHTML = ''
    loadMorePokemons(0, 30)
    showLoadMore()
})