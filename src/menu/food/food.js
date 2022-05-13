import foodCategory from './images/food_category.jpg'

import appetizers from './appetizers/appetizers'

const food = {
    name: 'Food',
    linkTo: '/darna-menu/food',
    picture: foodCategory,
    items: {
        type: 'categories',
        path: '/darna-menu/food',
        header: 'Food',
        subHeader: null,
        data: [
            appetizers,
        ]
    }
}

export default food
