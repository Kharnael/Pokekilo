pushToCartModal = () => {
    cartWrite.innerHTML = '';
    cartArray.forEach(element => {
        cartWrite.innerHTML += 
        `
        <li class="border-bottom border-dark border-3">${element.name} <img src="${element.img}" alt="${element.name} picture"> <span class="removeOneBtn" data-pokeName="${element.name}">logo -</span> Qté: ${element.Qty} <span class="addOneBtn" data-pokeName="${element.name}">logo +</span> Prix: ${element.totalUnitPrice}₽ <span class="removeAllQtyOfOnePoke" data-pokeName="${element.name}">delete</span></li>
        `;
    });

    
}

