pushToCartModal = () => {
    cartWrite.innerHTML = '';
    cartArray.forEach(element => {
        cartWrite.innerHTML +=
            `
        <li class="border-bottom border-dark border-3 fs-5 lh-lg">${element.name} <img src="${element.img}" alt="${element.name} picture"> <div class="text-center bg-dark text-light lh-lg"> <span class="removeOneBtn" data-pokeName="${element.name}">-</span> ${element.Qty} <span class="addOneBtn" data-pokeName="${element.name}">+</span></div> <div class="d-flex justify-content-between lh-lg"> ${element.totalUnitPrice}₽ <span class="removeAllQtyOfOnePoke text-end" data-pokeName="${element.name}">X</span></div></li>
        `;
    });


}