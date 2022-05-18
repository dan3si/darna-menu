import coldDrinksCategory from './images/cold_drinks_category.jpg'

import orangeFresh from './images/orange_fresh.jpg'
import grapefruitFresh from './images/grapefruit_fresh.jpg'
import watermelonSmoothie from './images/watermelon_smoothie.jpg'
import pineappleSmoothie from './images/pineapple_smoothie.jpg'
import milkShake from './images/milk_shake.jpg'
import cola from './images/cola.jpg'
import colaZero from './images/cola_zero.jpg'
import dietCoke from './images/coke_diet.jpg'
import sprite from './images/sprite.jpg'
import crushOrange from './images/crush_orange.jpg'
import gingerAle from './images/ginger_ale.jpg'
import sanpellegrinoAranciata from './images/sanpellegrino_aranciata.jpg'
import redBull from './images/red_bull.jpg'
import water from './images/water.jpg'

const coldDrinks = {
    name: 'Cold Drinks',
    contentType: 'items',
    picture: coldDrinksCategory,
    items: [
        {
            name: 'Orange Fresh',
            price: 8,
            picture: orangeFresh,
            available: true
        },
        {
            name: 'Grapefruit Fresh',
            price: 8,
            picture: grapefruitFresh,
            available: true
        },
        {
            name: 'Watermelon Smoothie',
            price: 7,
            picture: watermelonSmoothie,
            available: true
        },
        {
            name: 'Pineapple Smoothie',
            price: 8,
            picture: pineappleSmoothie,
            available: true
        },
        {
            name: 'Milk Shake',
            price: 6,
            picture: milkShake,
            available: true
        },
        {
            name: 'Cola',
            price: 3,
            picture: cola,
            available: true
        },
        {
            name: 'Cola Zero',
            price: 3,
            picture: colaZero,
            available: true
        },
        {
            name: 'Diet Coke',
            price: 3,
            picture: dietCoke,
            available: true
        },
        {
            name: 'Sprite',
            price: 3,
            picture: sprite,
            available: true
        },
        {
            name: 'Crush Orange',
            price: 3,
            picture: crushOrange,
            available: true
        },
        {
            name: 'Ginger Ale',
            price: 3,
            picture: gingerAle,
            available: true
        },
        {
            name: 'Sanpellegrino Aranciata',
            price: 3,
            picture: sanpellegrinoAranciata,
            available: true
        },
        {
            name: 'Red Bull',
            price: 3.99,
            picture: redBull,
            available: true
        },
        {
            name: 'Water',
            price: 2,
            picture: water,
            available: true
        }
    ]
}

export default coldDrinks
