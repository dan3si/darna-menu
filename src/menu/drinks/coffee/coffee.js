import coffeeCategory from './images/coffee_category.jpg'

import cappuccino from './images/cappuccino.jpg'
import latte from './images/latte.jpg'
import mocha from './images/mocha.jpg'
import espresso from './images/espresso.jpg'
import macchiato from './images/macchiato.jpg'
import americano from './images/americano.jpg'
import turkishCoffee from './images/turkish_coffee.jpg'


const coffee = {
    name: 'Coffee',
    contentType: 'items',
    picture: coffeeCategory,
    available: true,
    items: [
        {
            name: 'Cappuccino',
            price: 5,
            picture: cappuccino,
            available: true
        },
        {
            name: 'Latte',
            price: 5,
            picture: latte,
            available: true
        },
        {
            name: 'Mocha',
            price: 5,
            picture: mocha,
            available: true
        },
        {
            name: 'Espresso',
            price: 3,
            picture: espresso,
            available: true
        },
        {
            name: 'Macchiato',
            price: 3,
            picture: macchiato,
            available: true
        },
        {
            name: 'Americano',
            price: 3,
            picture: americano,
            available: true
        },
        {
            name: 'Turkish Coffee',
            price: 7,
            picture: turkishCoffee,
            available: true
        }
    ]
}

export default coffee
