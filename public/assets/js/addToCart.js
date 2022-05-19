//Step 1 : tableau à 0
//step 2 : si LS contient des data, alors injecte les dans le tableau
//step 3 : dans les data dans le panier dans le cas ou il y a des datas, sinon rien.
//step 4 : l'utilisateur ajoute au panier
// => en ajoutant au panier, il ajoute dans l'array, qui ajoute dans le LS.
//step 5 : affichage du panier ( avec calcul du prix total)
// nom du pokemon id prix quantité

//Demarrage avec un array "cartArray à 0"
let cartArray = [];

// fonction ajouter au panier
addToCart = () => {
    let pokeId = 1;             //value dans le HTML
    let pokeName = 'kikoo';     //value dans le HTML
    let pokePrice = 12;         //value dans le HTML
    cartArray.forEach(element => {
        if (element.id == pokeId) {
            console.log(element.Qty);
        // cartArray.element.Qty += 1;
    } else {
    cartArray.push({id:`${pokeId}`, name:`${pokeName}`, price:`${pokePrice}`, Qty:1});
    }
    addToLocalStorage();
})
}
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

//eventListener
// idAddToCartFromHTML.addEventListener('click', addToCart())
// idRemoveFromCartFromHTML.addEventLister('click' removeFromCart())

// Au chargement de la page, si le local storage n'est pas vide
// alors il alimente le cartArray sinon, bah il se passe rien quoi.
if (localStorage.length > 0) {
    console.log('local storage pas vide, ducoup copie du LS dans le Array')
    addToArray();
} else {console.log('local storage vide')}