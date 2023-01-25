const bttOption = document.getElementById('discovery__option__icon');
const divPlus = document.getElementById('discovery__plus');
let showPlus = false;


let inputSearch = document.getElementById('discovery__plus__search__form__input'); 
const bttSearch = document.getElementById('discovery__plus__search__form__icon');

const divTypes = document.getElementById('discovery__plus__types');

// ---------------------------------------------------------------------

// >>>>>>>>> Exibir e Ocultar Tipos com botão Filtro
bttOption.addEventListener('click', function(e) {
    if(!showPlus) {
        divPlus.classList.remove("oculto");
        divPlus.classList.add("animate__fadeIn");
        showPlus = true;
    }else {
        divPlus.classList.remove("animate__fadeIn");
        divPlus.classList.add("oculto");
        showPlus = false;
    }
})

divTypes.childNodes.forEach(typeRadio => {
    typeRadio.addEventListener('click', function(e) {
        const selectedType = e.target.innerHTML;

        if (selectedType) {
            pokeApi.getPokemonByType(selectedType)
            .then( (allPokemons = [])=> {
                    const newHtml = allPokemons.map(convertPokemonToLi).join('')
                    listaPokemon.innerHTML = newHtml
            })
            divPlus.classList.remove("animate__fadeIn");
            divPlus.classList.add("oculto");
            showPlus = false;
            hideLoadMore();
        }
    })
})