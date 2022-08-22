import teaCategory from './images/tea_category.jpg'

import greenTea from './images/green_tea.jpg'
import blackTea from './images/black_tea.jpg'
import mintTea from './images/mint_tea.jpg'
import karkadeTea from './images/karkade_tea.jpg'
import puErhTea from './images/pu-erh_tea.jpg'
import camomileTea from './images/camomile_tea.jpg'

const tea = {
    name: 'Tea',
    contentType: 'items',
    picture: teaCategory,
    available: true,
    items: [
        {
            name: 'Green Tea',
            price: 7,
            picture: greenTea,
            available: true
        },
        {
            name: 'Black Tea',
            price: 7,
            picture: blackTea,
            available: true
        },
        {
            name: 'Mint Tea',
            price: 7,
            picture: mintTea,
            available: true
        },
        {
            name: 'Berry Karkade Tea',
            price: 7,
            picture: karkadeTea,
            available: true
        },
        {
            name: 'Pu-Erh Tea',
            price: 7,
            picture: puErhTea,
            available: true
        },
        {
            name: 'Camomile Tea',
            price: 7,
            picture: camomileTea,
            available: true
        },
    ]
}

export default tea
