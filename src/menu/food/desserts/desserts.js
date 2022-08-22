import dessertsCategory from './images/desserts_category.jpg'

import tiramisu from './images/tiramisu.jpg'
import cheesecake from './images/cheesecake.jpg'
import lavaCake from './images/lava_cake.jpg'
import baklava from './images/baklava.jpg'
import iceCream from './images/ice_cream.jpg'

const desserts = {
    name: 'Desserts',
    contentType: 'items',
    picture: dessertsCategory,
    available: true,
    items: [
        {
            name: 'Tiramisu',
            price: 5.99,
            picture: tiramisu,
            available: true
        },
        {
            name: 'Cheesecake',
            price: 5.99,
            picture: cheesecake,
            available: true
        },
        {
            name: 'Chocolate Lava Cake with Ice Cream',
            price: 5.99,
            picture: lavaCake,
            available: true
        },
        {
            name: 'Baklava',
            price: 4.99,
            picture: baklava,
            available: true
        },
        {
            name: 'Ice Cream',
            price: 6.99,
            picture: iceCream,
            available: true
        }
        
    ]
}

export default desserts
