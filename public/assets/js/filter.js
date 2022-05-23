//filter by type
const selects = document.querySelectorAll('#offcanvasNavbar > div.offcanvas-body > ul > li.nav-item.dropdown > ul')
const filteredResults = []

for (i = 0; i < selects.length; i++) {
    selects[i].addEventListener('click', (e) => {  
        e.preventDefault();
        const filter = e.target.dataset.type;
        pokeFilter(filter)
        let imgFilter
        switch (filter) {
            case 'grass':
                imgFilter = 'grass.png';
                break;
            case 'fire':
                imgFilter = 'fire.png';
                break;
            case 'water':
                imgFilter = 'water.png';
                break;
            case 'bug':
                imgFilter = 'bug.png';
                break;
            case 'steel':
                imgFilter = 'steel.png';
                break;
            case 'fighting':
                imgFilter = 'fighting.png';
                break;
            case 'fairy':
                imgFilter = 'fairy.png';
                break;
            case 'flying':
                imgFilter = 'flying.png';
                break;
            case 'dragon':
                imgFilter = 'dragon.png';
                break;
            case 'ghost':
                imgFilter = 'ghost.png';
                break;
            case 'ground': 
                imgFilter = 'ground.png';
                break;
            case 'normal':
                imgFilter = 'normal.png';
                break;
            case 'rock':
                imgFilter = 'rock.png';
                break;
            case 'psychic':
                imgFilter = 'psychic.png';
                break;
            case 'poison':
                imgFilter = 'poison.png';
                break;
            case 'electric':
                imgFilter = 'electric.png';
                break;
            case 'ice':
                imgFilter = 'ice.png';
                break; 
            default:
                break;
        }
    pokemonFilter.innerHTML += `<div class="filterGroup"><img src='public/assets/img/${imgFilter}'><span data-type="${filter}" class="text-light removeFilterCross">&times;</span></div>`
    })
}

pokeFilter = (filter) => {
    pokeCatalog.forEach((element, index) => {
        if(element.type == filter) {
            filteredResults.push({name:element.name, id:element.id, type:element.type, desc:element.desc, price:element.price, sprite:element.sprite, weight:element.weight, icons:element.icons})
        }
    });
    console.table(filteredResults);
    printPokeCard();
}

RemoveTypeFilter = () => { 
    let closeBtns = document.querySelectorAll('removeFilterCross')
    closeBtns.forEach(element => {
        closeBtns[i].addEventListener('click', (e) => {
       

        // console.log(closeBtns);
        
    });

})
}
