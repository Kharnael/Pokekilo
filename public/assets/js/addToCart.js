//Demarrage avec un array "cartArray à 0"
let cartArray = [];

//======================= GESTION ARRAY / LOCALSTORAGE           ==================================

//add to array
addToArray = () => {
    let LSdata = JSON.parse(localStorage.getItem('cartData'));
    LSdata.forEach(element => {
        cartArray.push({id:`${element.id}`, name:`${element.name}`, price:`${element.price}`, Qty:`${element.Qty}`, totalUnitPrice:`${element.totalUnitPrice}`}); //mettre dans le push les key/value du tablobjet 'cartArray'
    });
}

//add to localStorage 
addToLocalStorage = () => {
    localStorage.clear();
    localStorage.removeItem('cartData');
    localStorage.setItem('cartData', JSON.stringify(cartArray))
}

//======================= FIN DE GESTION ARRAY / LOCALSTORAGE     =================================

// fonction ajouter au panier
addToCart = () => {
    let pokeId = 2;                 //value dans le HTML    => A supprimer une fois les values dispo dans le DOM
    let pokeName = 'kikoo2';        //value dans le HTML   => A supprimer une fois les values dispo dans le DOM
    let pokeUnitPrice = 22.3;             //value dans le HTML    => A supprimer une fois les values dispo dans le DOM

    // /!\ resultz permet de savoir si le pokemon est DEJA dans le panier. /!\
    let resultz = cartArray.find(nameOf => nameOf.name === pokeName);

        //Si le tableau est pas vide et que le pokemon est déja dans le panier, alors ajoute 1 à Qty
    if (resultz != undefined) { 
                cartArray.forEach(element => {
                    if (element.name == pokeName) {
                        element.Qty ++;
                        //on calcul le prix total(par pokemon) en fonction de la quantité dans la fonction addtocart! 
                        let newPrice = parseFloat(element.price) * parseFloat(element.Qty);
                        element.totalUnitPrice = parseFloat(newPrice.toFixed(2));
                    }
                })

    //Sinon (le pokemon est pas dans le panier donc) ajoute le avec une Qty de 1        
    } else if (resultz == undefined) { 
        cartArray.push({id:`${pokeId}`, name:`${pokeName}`, price:`${pokeUnitPrice}`, Qty:1, totalUnitPrice:`${pokeUnitPrice}`});
    }
addToLocalStorage();
}

//Calcul du prix total
calculOfTotalPrice = () => {
    let totalPrice = 0;
    cartArray.forEach(element => {
        totalPrice += parseFloat(element.totalUnitPrice);
    });
    return totalPrice.toFixed(2); //totalPrice DEVIENT UN STRING ATTENTION. le reparse en float si needed.
}

//eventListener
// idAddToCartFromHTML.addEventListener('click', addToCart())
// idRemoveFromCartOneByOne.addEventLister('click', removeOneByOne())
// idRemoveFromCartOnePokeTotaly.addEventLister('click', removeOnePokeTotaly())
// idDeleteAllCart.addEventLister('click', deleteAllCart())

//Retirage d'un pokemon par un pokemon
removeOneByOne = () => {
    let selectedPokeToRemoveOne = "kikoo" //a changer, value provenant du DOM
    cartArray.forEach((element, index) => {
        if (element.name == selectedPokeToRemoveOne) {
            //si qty 1 et l'utilisateur veut enlever 1, c'est qu'il en veut plus du tout
            if (element.Qty == 1) {cartArray.splice(index, 1);}
            else { 
            element.Qty -= 1;
            element.totalUnitPrice = element.Qty * element.price;}
            }
        });
        addToLocalStorage(); // MAJ du LS.
}

//Retirage de toute les quantité d'un seul pokemon
removeOnePokeTotaly = () => {
    let selectedPokeToRemoveCompletely = 'kikoo2'; //value a recup dans le DOM
    cartArray.forEach((element, index) => {
        if (selectedPokeToRemoveCompletely == element.name) {
            cartArray.splice(index, 1);
        }
    });
    addToLocalStorage();
}

//vidange total du panier 
deleteAllCart = () => {
    cartArray = [];
    localStorage.removeItem('cartData');
}

// Au chargement de la page, si le local storage n'est pas vide
// alors il alimente le cartArray sinon, bah il se passe rien quoi.
if (localStorage.length > 0) {
    console.log('local storage pas vide, ducoup copie du LS dans le Array')
    addToArray();
} else {console.log('local storage vide')}