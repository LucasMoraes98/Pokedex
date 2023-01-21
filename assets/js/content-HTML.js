function convertPokemonToLi(objPokemon) {
    return `
        <li id="${objPokemon.number}" class="pokemon ${objPokemon.type}" onclick="clickOnPokemon(this.id)" >
            <span class="number">#${objPokemon.number}</span>
            <span class="name">${objPokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${objPokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${objPokemon.photo}" alt="${objPokemon.name}">
            </div>
        </li>
    `
}

function convertPokemonToCardHTML(objPokemonSelect) {
    return ` 
        <div id="popupPokemon" class="${objPokemonSelect.type}">
            <div id="card" class="${objPokemonSelect.type}">
                <div id="card__tabela">
                    
                    <table id="tabelaCompletaPokemon">
                        <thead>
                            <tr id="row-photo"><td colspan="3" id="col-photo"><img id="photo-pokemon" src="${objPokemonSelect.gif}" alt="${objPokemonSelect.name}"></td></tr>
                            <tr id="row-namenumber"><td  id="cel-name">${objPokemonSelect.name}</td><td id="cel-num">#${objPokemonSelect.number}</td></tr>
                        </thead>
                        <tbody>
                            <tr id="row_types" class="row-group">
                                <td id="col-types" colspan="2">
                                    <ol class="lista-NoListed">
                                        ${objPokemonSelect.types.map((type) => `<li class="card__types__li cel-capitalize ${type}">${type}</li>`).join('')}
                                    </ol>
                                </td>
                            </tr>
                            <tr id="row_physical" class="row-group">
                                <td colspan="2">
                    
                                    <table class="subtabelas">
                                        <thead>
                                            <tr><td colspan="4" class="cel-title">Physical</td></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="cel-physical-title"><i class="uil uil-ruler"></i></td>
                                                <td class="cel-physical-title"><i class="uil uil-compass"></i></td>
                                            </tr>   
                                            <tr>
                                                <td>${objPokemonSelect.height}cm</td>
                                                <td>${objPokemonSelect.weight}kg</td>
                                            </tr>
                                        </tbody>
                                    </table>
                    
                                </td>
                            </tr>
                            <tr id="row_stats" class="row-group">
                                <td colspan="2">
                                    <table class="subtabelas">
                                        <thead>
                                            <tr><td colspan="4" class="cel-title">Stats</td></tr>
                                        </thead>
                                        <tbody id="body-stats">
                                            <tr><td>HP</td><td class="cel-stats-val">${objPokemonSelect.hp}</td><td>Speed</td><td class="cel-stats-val">${objPokemonSelect.speed}</td></tr>
                                            <tr><td>Attack</td><td class="cel-stats-val">${objPokemonSelect.attack}</td><td>Defense</td><td class="cel-stats-val">${objPokemonSelect.defense}</td></tr>
                                            <tr><td>Special Attack</td><td class="cel-stats-val">${objPokemonSelect.specialattack}</td><td>Special Defense</td><td class="cel-stats-val">${objPokemonSelect.specialdefense}</td></tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                    
                            <tr id="row_abilities" class="row-group">
                                <td colspan="2">
                    
                                    <table class="subtabelas">
                                        <thead>
                                            <tr><td class="cel-title">Abilities</td></tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>
                                                <ol class="lista-NoListed">
                                                    ${objPokemonSelect.abilities.map((ability) => `<li class="cel-capitalize">${ability}</li>`).join('')}
                                                </ol>
                                            </td></tr>
                                        </tbody>
                                    </table>
                    
                                </td>
                            </tr>
                    
                        </tbody>
                    </table>
                </div>
                <div id="card__botoes">
                    <button class="botao-seta" onclick="previousPokemonPopup()">
                        <i class="uil uil-angle-left"></i>
                    </button>
                    <button id="bttClosePUP" class="${objPokemonSelect.type}" onclick="closePopup()">
                        <i class="uil uil-multiply"></i>
                    </button>
                    <button class="botao-seta" onclick="nextPokemonPopup()">
                        <i class="uil uil-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>    
    `
}


function convertErroToSpan(msgErro) {
    switch (msgErro) {
        case "Limited":
            return `
                <span>Por enquanto, só temos os Pokémon das até a 8ª geração. Estamos trabalhando para aumentar nosso catálogo.</span>
            `
            break;
        default:
            return `
                <span>Este termo parece estar incorreto. Por favor, verifique e tente novamente.</span>
            `
            break;
    }
}