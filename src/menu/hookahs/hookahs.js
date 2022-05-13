import hookahsCategory from './images/hookahs_category.jpg'

import alFakher from './al_fakher/al_fakher'
import adalya from './adalya/adalya'
import socialSmoke from './social_smoke/social_smoke'
import fumari from './fumari/fumari'
import tangiers from './tangiers/tangiers'
import darkside from './darkside/darkside'

const hookahs = {
    name: 'Hookahs',
    linkTo: '/darna-menu/hookahs',
    picture: hookahsCategory,
    items: {
        type: 'categories',
        path: '/darna-menu/hookahs',
        header: 'Brands',
        subHeader: 'Click on brand to see flavors',
        data: [
            alFakher,
            adalya,
            socialSmoke,
            fumari,
            tangiers,
            darkside
        ]
    }
}

export default hookahs
