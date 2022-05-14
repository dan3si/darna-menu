import darksideCategory from './images/darkside_category.jpg'

import darksideLemonBlast from './images/darkside_lemon_blast.jpg'
import darksideBlueberryBlast from './images/darkside_blueberry_blast.jpg'
import darksideDarkMint from './images/darkside_dark_mint.jpg'

const darkside = {
    name: 'Darkside',
    contentType: 'items',
    picture: darksideCategory,
    items: [
        {
            name: 'Blueberry Blast',
            price: 35,
            picture: darksideBlueberryBlast,
            available: false
        },
        {
            name: 'Dark Mint',
            price: 35,
            picture: darksideDarkMint,
            available: false
        },
        {
            name: 'Lemon Blast',
            price: 35,
            picture: darksideLemonBlast,
            available: false
        }
    ]
}

export default darkside
