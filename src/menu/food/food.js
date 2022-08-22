import foodCategory from './images/food_category.jpg'

import appetizers from './appetizers/appetizers'
import panini from './panini/panini'
import desserts from './desserts/desserts'

const food = {
    name: 'Food',
    contentType: 'categories',
    picture: foodCategory,
    available: true,
    items: [
        appetizers,
        panini,
        desserts
    ]
}

export default food
