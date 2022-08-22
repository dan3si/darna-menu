import paniniCategory from './images/panini_category.jpg'

import beefPanini from './images/beef_panini.jpg'
import turkeyPanini from './images/turkey_panini.jpg'
import cubanPanini from './images/cuban_panini.jpg'
import tunaPanini from './images/tuna_panini.jpg'

const panini = {
    name: 'Panini',
    contentType: 'items',
    picture: paniniCategory,
    available: true,
    items: [
        {
            name: 'Beef Philly Cheese',
            price: 10.99,
            picture: beefPanini,
            available: true
        },
        {
            name: 'Turkey Pesto',
            price: 10.99,
            picture: turkeyPanini,
            available: true
        },
        {
            name: 'Cuban',
            price: 10.99,
            picture: cubanPanini,
            available: true
        },
        {
            name: 'Tuna Melt',
            price: 10.99,
            picture: tunaPanini,
            available: true
        },
        
    ]
}

export default panini
