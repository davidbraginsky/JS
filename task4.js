"use strict";

const products = [
    { id: 3, price: 200, },
    { id: 4, price: 900, },
    { id: 1, price: 1000, },
];

let productsWithDiscount = [];
products.forEach(item => {
    productsWithDiscount.push(Object.assign({}, item, { price: item.price - (item.price * 0.15) }));
});