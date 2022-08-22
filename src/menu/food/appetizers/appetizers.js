import appetizersCategory from './images/appetizers_category.jpg'

import chickenWings from './images/chicken_wings.jpg'
import mozzarellaSticks5 from './images/mozzarella_sticks_5.jpg'
import mozzarellaSticks10 from './images/mozzarella_sticks_10.jpg'
import pelmeni from './images/pelmeni.jpg'
import vareniki from './images/vareniki.jpg'
import fries from './images/fries.jpg'

const appetizers = {
    name: 'Appetizers',
    contentType: 'items',
    picture: appetizersCategory,
    available: true,
    items: [
        {
            name: 'Chicken Wings',
            price: 9.99,
            picture: chickenWings,
            available: true
        },
        {
            name: 'Mozzarella Sticks 5 items',
            price: 4.99,
            picture: mozzarellaSticks5,
            available: true
        },
        {
            name: 'Mozzarella Sticks 10 items',
            price: 7.99,
            picture: mozzarellaSticks10,
            available: true
        },
        {
            name: 'Pelmeni',
            price: 9.99,
            picture: pelmeni,
            available: true
        },
        {
            name: 'Vareniki',
            price: 9.99,
            picture: vareniki,
            available: true
        },
        {
            name: 'French Fries',
            price: 3.99,
            picture: fries,
            available: true
        }
    ]
}

export default appetizers
