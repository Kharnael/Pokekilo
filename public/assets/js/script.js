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
        <div class="pokeCards">
            <img class="imgPokeAnimated" src="${imgPoke}" alt="${pokeName} picture">
            <div class="pokeDescAndType">
                <div class="pokeFullDescription">
                    <h2>${pokeName}</h2>
                    <p>${pokeDescription}</p>
                    <p>Poids : ${pokeWeight}</p>
                    <p>Réf : ${pokeId}</p>
                    <p>Prix : ${pokePrice}€</p>
                </div>    
                <div class="imgPokeType">
                    <h2>Type :</h2>
                    <img src="public/assets/img/${pokeType}.png" alt="${pokeType} picture">
                </div>
            </div>
        </div>
        `;
    }
}

//appel du fetch
fetchApi();
