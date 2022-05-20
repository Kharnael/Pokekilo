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
        <article class="col col-md-6 col-lg-3 d-flex justify-content-center flex-column my-4 ">
            <div class="card bg-danger text-center mx-auto">
                <img src="${imgPoke}" class="card-img-top" alt="${pokeName} picture">
                <div class="card-body">
                    <h5 class="card-title">${pokeName}</h5>
                    
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-danger"><img src="public/assets/img/${pokeType}.png" alt="${pokeType} picture"></li>
                    <li class="list-group-item bg-danger">${pokeDescription}</li>
                    <li class="list-group-item bg-danger">Poids : ${pokeWeight}kg</li>
                    <li class="list-group-item bg-danger">Pokédex N° : ${pokeId}</li>
                    <li class="list-group-item bg-danger">Prix : ${pokePrice}₽</li>
                </ul>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi  bi-cart-plus-fill my-2 mx-auto cartAdd data-poke="${pokeName}" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg>
        </article>
 
        `;
    }
}

//appel du fetch
fetchApi();
