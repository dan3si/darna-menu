import hookahs from './hookahs/hookahs'
import food from './food/food'

const items = {
    type: 'categories',
    path: '/darna-menu',
    header: 'Categories',
    subHeader: null,
    data: [
        hookahs,
        food
    ]
}

export default items
