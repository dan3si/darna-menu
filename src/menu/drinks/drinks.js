import drinksCategory from './images/drinks_category.jpg'

import tea from './tea/tea'
import coffee from './coffee/coffee'
import coldDrinks from './cold_drinks/cold_drinks'
import beerBottles from './beer_bottles/beer_bottles'
import wine from './wine/wine'

const drinks = {
    name: 'Drinks',
    contentType: 'categories',
    picture: drinksCategory,
    items: [
        tea,
        coffee,
        coldDrinks,
        beerBottles,
        wine
    ]
}

export default drinks
