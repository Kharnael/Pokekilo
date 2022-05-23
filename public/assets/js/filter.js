// filter by type
const selects = document.querySelectorAll('.dropdown-menu li img')
// const pokéFilter = pokeCatalog.filter(pokeCatalog => pokeCatalog.length > 6)
// console.log(pokéFilter)


for (i = 0; i < selects.length; i++) {
    selects[i].addEventListener('click', (e) => {  
        e.preventDefault();
        const filter = e.target.dataset.type;
        // console.log(filter)
        

    })
}
