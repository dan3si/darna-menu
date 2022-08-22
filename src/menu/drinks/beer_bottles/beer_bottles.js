import beerBottlesCategory from './images/beer_bottles_category.jpg'

import stella from './images/stella.jpg'
import heineken from './images/heineken.jpg'
import corona from './images/corona.jpg'

const beerBottles = {
    name: 'Beer Bottles',
    contentType: 'items',
    picture: beerBottlesCategory,
    available: true,
    items: [
        {
            name: 'Stella Artois',
            price: 5,
            picture: stella,
            available: true
        },
        {
            name: 'Heineken',
            price: 5,
            picture: heineken,
            available: true
        },
        {
            name: 'Corona',
            price: 5,
            picture: corona,
            available: true
        }
    ]
}

export default beerBottles
