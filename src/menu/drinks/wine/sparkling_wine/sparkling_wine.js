import sparklingWineCategory from './images/sparkling_wine_category.jpg'

import moscato from './images/moscato.jpg'
import prosecco from './images/prosecco.jpg'

const sparklingWine = {
    name: 'Sparkling',
    contentType: 'items',
    picture: sparklingWineCategory,
    available: true,
    items: [
        {
            name: 'Moscato',
            price: '8.5$ / 28',
            picture: moscato,
            available: true
        },
        {
            name: 'Prosecco',
            price: '8.5$ / 28',
            picture: prosecco,
            available: true
        }
    ]
}

export default sparklingWine
