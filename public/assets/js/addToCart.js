//Demarrage avec un array "cartArray à 0"
let cartArray = [];

//======================= GESTION ARRAY / LOCALSTORAGE           ==================================

//add to array
addToArray = () => {
    let LSdata = JSON.parse(localStorage.getItem('cartData'));
    LSdata.forEach(element => {
        cartArray.push({id:`${element.id}`, name:`${element.name}`, price:`${element.price}`, Qty:`${element.Qty}`, totalUnitPrice:`${element.totalUnitPrice}`, img:`${element.img}`}); //mettre dans le push les key/value du tablobjet 'cartArray'
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
addToCart = (pokeId, pokeName, pokeUnitPrice, pokeImg) => {

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
        cartArray.push({id:`${pokeId}`, name:`${pokeName}`, price:`${pokeUnitPrice}`, Qty:1, totalUnitPrice:`${pokeUnitPrice}`, img:`${pokeImg}`});
    }
addToLocalStorage();
pushToCartModal();
calculOfTotalPrice();
// alert(`${pokeName} a bien été ajouté au panier.`)
}

//Calcul du prix total
calculOfTotalPrice = () => {
    let totalPrice = 0;
    cartArray.forEach(element => {
        totalPrice += parseFloat(element.totalUnitPrice);
    });
    totalPriceCart.innerHTML =
    `total:${totalPrice.toFixed(2)}₽`
    return totalPrice.toFixed(2); //totalPrice DEVIENT UN STRING ATTENTION. le reparse en float si needed.
}

//======================== EVENT LISTENER ================================
window.addEventListener('click', (e) => {
    //Ajouter au panier
    if (e.path[1].classList.contains('cartAdd')){
        let pokeId = e.path[0].nearestViewportElement.dataset.pokeid;
        let pokeName = e.path[0].nearestViewportElement.dataset.pokename;
        let pokeImg = e.path[0].nearestViewportElement.dataset.pokeico;
        console.log(e.path[0].nearestViewportElement.dataset);
        let pokeUnitPrice = e.path[0].nearestViewportElement.dataset.pokeprice;
        addToCart(pokeId, pokeName, pokeUnitPrice, pokeImg);
        playLevelUp();

    }
    //Enlever 1 unité par pokémongz
    if (e.target.classList.contains('removeOneBtn')){
        removeOneByOne(e.target.dataset.pokename);
    }
    //Add one by one
    if (e.target.classList.contains('addOneBtn')){
        addOneByOne(e.target.dataset.pokename);
    }
    //remove toute les quantités de 1 pokemon 
    if (e.target.classList.contains('removeAllQtyOfOnePoke')) {
        removeOnePokeTotaly(e.target.dataset.pokename);
    }
})


//==================== FIN DE EVENT LISTENER =============================

//==================== FONCTION DU PANIER ================================
//Retirage d'un pokemon par un pokemon
removeOneByOne = (pokename) => {
    let selectedPokeToRemoveOne = pokename;
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
        pushToCartModal(); //MAJ du panier
        calculOfTotalPrice();
}

addOneByOne = (pokename) => {
    let selectedPokeToAddOne = pokename;
    cartArray.forEach(element => {
        if (element.name == selectedPokeToAddOne) {
            let newQty = parseInt(element.Qty) + 1;
            parseInt(newQty);
            element.Qty = newQty;
            element.totalUnitPrice = element.Qty * element.price;
            }
        });
        addToLocalStorage(); // MAJ du LS.
        pushToCartModal(); //MAJ du panier
        calculOfTotalPrice();
}

//Retirage de toute les quantité d'un seul pokemon
removeOnePokeTotaly = (pokename) => {
    let selectedPokeToRemoveCompletely = pokename;
    cartArray.forEach((element, index) => {
        if (selectedPokeToRemoveCompletely == element.name) {
            cartArray.splice(index, 1);
        }
    });
    addToLocalStorage();
    pushToCartModal(); //MAJ du panier
    calculOfTotalPrice();
}




// Au chargement de la page, si le local storage n'est pas vide
// alors il alimente le cartArray et le panier sinon, bah il se passe rien quoi.
if (localStorage.length > 0) {
    console.log('local storage pas vide, ducoup copie du LS dans le Array')
    addToArray();
    pushToCartModal();
    calculOfTotalPrice();
} else {console.log('local storage vide')}

//vidange total du panier
let deleteFullCartBtn = document.getElementById('clearCartBtn');
deleteFullCartBtn.addEventListener('click', deleteAllCart = () => {
    cartArray = [];
    localStorage.removeItem('cartData');
    pushToCartModal();
    calculOfTotalPrice();
} );

//petit son ajout panier
let playLevelUp = () => {
    new Audio('assets/sound/levelup.mp3')
    Audio.volumne = 0.5;
}