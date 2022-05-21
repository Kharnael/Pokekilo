pushToCartModal = () => {
    cartWrite.innerHTML = '';
    cartArray.forEach(element => {
        cartWrite.innerHTML +=
            `
        <li class="border-bottom border-dark border-3">${element.name} <img src="${element.img}" alt="${element.name} picture"> <span class="removeOneBtn" data-pokeName="${element.name}">-</span> Qté: ${element.Qty} <span class="addOneBtn" data-pokeName="${element.name}">+</span> <div> Prix: ${element.totalUnitPrice}₽ <span class="removeAllQtyOfOnePoke" data-pokeName="${element.name}">[Supprimer le Pkmn]</span></div></li>
        `;
    });


}