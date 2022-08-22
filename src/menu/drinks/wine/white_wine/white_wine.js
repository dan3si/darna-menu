import whiteWineCategory from './images/white_wine_category.jpg'

import pinotGrigio from './images/pinot_grigio.jpg'
import sauvignonBlanc from './images/sauvignon_blanc.jpg'
import chardonnay from './images/chardonnay.jpg'
import riesling from './images/riesling.jpg'

const whiteWine = {
    name: 'White Wine',
    contentType: 'items',
    picture: whiteWineCategory,
    available: true,
    items: [
        {
            name: 'Pinot Grigio',
            price: '8.5$ / 28',
            picture: pinotGrigio,
            available: true
        },
        {
            name: 'Sauvignon Blanc',
            price: '8.5$ / 28',
            picture: sauvignonBlanc,
            available: true
        },
        {
            name: 'Chardonnay',
            price: '8.5$ / 28',
            picture: chardonnay,
            available: true
        },
        {
            name: 'Riesling',
            price: '8.5$ / 28',
            picture: riesling,
            available: true
        },
    ]
}

export default whiteWine
