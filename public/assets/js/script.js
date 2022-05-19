let jsonFile = 'https://pokeapi.co/api/v2/pokemon/';
let jsonFile3 ='https://pokeapi.co/api/v2/pokemon-species/';

fetchApi = async () => {
    for (let index = 1; index <= 151; index++) {
        const response1 = await fetch(jsonFile+index);  //fetch de pokemon
        const data1 = await response1.json();           //équivaut au 2e then =)
        const response2 = await fetch(jsonFile3+index); //fetch de species (nom fr)
        const data2 = await response2.json();           //équivaut au 2e then =)
        pokeWeight = Math.round(data1.weight / 10);
        pokeId = data1.id;
        pokeType = data1.types[0].type.name;
        pokeDescription = data2.genera[3].genus;
        pokePrice = Math.round(pokeWeight * 1.2);
        imgPoke = data1.sprites.versions["generation-v"]["black-white"].animated.front_default;
        let pokeName = data2.names[4].name;
        test.innerHTML += 
        `
        <article class="col col-md-6 col-lg-3 d-flex justify-content-center">
            <div class="card bg-danger">
                <img src="${imgPoke}" class="card-img-top" alt="${pokeName} picture">
                <div class="card-body">
                    <h5 class="card-title">${pokeName}</h5>
                    
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-danger"><img src="public/assets/img/${pokeType}.png" alt="${pokeType} picture"></li>
                    <li class="list-group-item bg-danger">${pokeDescription}</li>
                    <li class="list-group-item bg-danger">Poids : ${pokeWeight}kg</li>
                    <li class="list-group-item bg-danger">Pokédex N° : ${pokeId}</li>
                    <li class="list-group-item bg-danger">Prix : ${pokePrice}€</li>
                </ul>
            </div>
            
        </article>
 
        `;
    }
}

//appel du fetch
fetchApi();
