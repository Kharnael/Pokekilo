//Demarrage avec un array "cartArray à 0"
let cartArray = [];

//============== gestion Array/LocalStorage ===============================

//add to array
addToArray = () => {
    let LSdata = JSON.parse(localStorage.getItem('cartData'));
    LSdata.forEach(element => {
        cartArray.push({id:`${element.id}`, name:`${element.name}`, price:`${element.price}`, Qty:`${element.Qty}`}); //mettre dans le push les key/value du tablobjet 'cartArray'
    });
}

//add to localStorage 
addToLocalStorage = () => {
    localStorage.clear();
    localStorage.removeItem('cartData');
    localStorage.setItem('cartData', JSON.stringify(cartArray))
}

// fonction ajouter au panier
addToCart = () => {
    let pokeId = 2;                 //value dans le HTML    => A supprimer une fois les values dispo dans le HTML
    let pokeName = 'kikoo2';        //value dans le HTML   => A supprimer une fois les values dispo dans le HTML
    let pokePrice = 22;             //value dans le HTML    => A supprimer une fois les values dispo dans le HTML

    // /!\ resultz permet de savoir si le pokemon est DEJA dans le panier. /!\
    let resultz = cartArray.find(nameOf => nameOf.name === pokeName);

        //Si le tableau est pas vide et que le pokemon est déja dans le panier, alors ajoute 1 à Qty
    if (resultz != undefined) { 
                cartArray.forEach(element => {
                if (element.name == pokeName) {element.Qty ++;
                    // on est des fous, on calcul le prix total en fonction de la quantité dans la fonction addtocart! 
                    let newPrice = parseFloat(element.price) + parseFloat(pokePrice);
                    element.price = newPrice;
                }})

        //Sinon (le pokemon est pas dans le panier) donc ajoute le avec une Qty de 1        
    } else if (resultz == undefined) { 
        cartArray.push({id:`${pokeId}`, name:`${pokeName}`, price:`${pokePrice}`, Qty:1});
    }
addToLocalStorage();
}

//eventListener
// idAddToCartFromHTML.addEventListener('click', addToCart())
// idRemoveFromCartFromHTML.addEventLister('click' removeFromCart())

//Calcul du prix total
CalculOfTotalPrice = () => {
    let totalPrice = 0;
    cartArray.forEach(element => {
        totalPrice += parseFloat(element.price);
    });
    console.log(totalPrice);
}

// Au chargement de la page, si le local storage n'est pas vide
// alors il alimente le cartArray sinon, bah il se passe rien quoi.
if (localStorage.length > 0) {
    console.log('local storage pas vide, ducoup copie du LS dans le Array')
    addToArray();
} else {console.log('local storage vide')}