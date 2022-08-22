import wineCategory from './images/wine_category.jpg'

import redWine from './red_wine/red_wine'
import whiteWine from './white_wine/white_wine'
import sparklingWine from './sparkling_wine/sparkling_wine'

const wine = {
    name: 'Wine',
    contentType: 'categories',
    picture: wineCategory,
    available: true,
    items: [
        redWine,
        whiteWine,
        sparklingWine
    ]
}

export default wine
