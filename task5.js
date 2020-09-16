"use strict";

/*
1. Отфильтровать все товары с картинками
2. Отсортировать все товары по цены от низкой к высокой
*/

const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg",]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhotos = products.filter(item => item.hasOwnProperty("photos") && item.photos.length > 0);

products.sort(function (a, b) {
    return a.price - b.price;
});


