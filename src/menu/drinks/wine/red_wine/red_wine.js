import redWineCategory from './images/red_wine_category.jpg'

import pinotNoir from './images/pinot_noir.jpg'
import cabernetSauvignon from './images/cabernet_sauvignon.jpg'
import merlot from './images/merlot.jpg'
import malbec from './images/malbec.jpg'

const redWine = {
    name: 'Red Wine',
    contentType: 'items',
    picture: redWineCategory,
    items: [
        {
            name: 'Pinot Noir',
            price: '8.5$ / 28',
            picture: pinotNoir,
            available: true
        },
        {
            name: 'Cabernet Sauvignon',
            price: '8.5$ / 28',
            picture: cabernetSauvignon,
            available: true
        },
        {
            name: 'Merlot',
            price: '8.5$ / 28',
            picture: merlot,
            available: true
        },
        {
            name: 'Malbec',
            price: '8.5$ / 28',
            picture: malbec,
            available: true
        },
    ]
}

export default redWine
