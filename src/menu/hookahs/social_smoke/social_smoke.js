import socialSmokeCategory from './images/social-smoke_category.jpg'

import socialSmokeWatermelonChill from './images/social_smoke_watermelon_chill.jpg'
import socialSmokePearChill from './images/social_smoke_pear_chill.jpg'
import socialSmokeCantaloupeChill from './images/social_smoke_cantaloupe_chill.jpg'

const socialSmoke = {
    name: 'Social Smoke',
    contentType: 'items',
    picture: socialSmokeCategory,
    items: [
        {
            name: 'Watermelon chill',
            price: 30,
            picture: socialSmokeWatermelonChill,
            available: true
        },
        {
            name: 'Pear chill',
            price: 30,
            picture: socialSmokePearChill,
            available: true
        },
        {
            name: 'Cantaloupe chill',
            price: 30,
            picture: socialSmokeCantaloupeChill,
            available: true
        }
    ]
}

export default socialSmoke
