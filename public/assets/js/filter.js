//filter by type
const selects = document.querySelectorAll('.dropdown-menu li img')
const filteredResults = []

for (i = 0; i < selects.length; i++) {
    selects[i].addEventListener('click', (e) => {  
        e.preventDefault();
        const filter = e.target.dataset.type;
        
    })
}

pokeFilter = () => {
    pokeCatalog.forEach((element, index) => {
        if(element.type == filter) {
            filteredResults.push({name:element.name, id:element.id, type:element.type, desc:element.desc, price:element.price, sprite:element.sprite, weight:element.weight, icons:element.icons})
        }
    });
    console.table(filteredResults);
}
