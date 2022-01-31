import { Link } from "react-router-dom";
import styles from './Hookahs.module.scss'

import alFakherCategory from '../../images/hookahs/categories/al-fakher_category.jpg'
import socialSmokeCategory from '../../images/hookahs/categories/social-smoke_category.jpg'
import fumariCategory from '../../images/hookahs/categories/fumari_category.jpg'
import tangiersCategory from '../../images/hookahs/categories/tangiers_category.jpg'

const Hookahs = () => {
    return (
        <div className={styles.hookahs}>
            <Link to="/hookahs/al-fakher" className={styles.categoryLink}>
                Al Fakher
                <img src={alFakherCategory} />
            </Link>
            
            <Link to="/hookahs/social-smoke" className={styles.categoryLink}>
                Social Smoke
                <img src={socialSmokeCategory} />
            </Link>
            
            <Link to="/hookahs/fumari" className={styles.categoryLink}>
                Fumari
                <img src={fumariCategory} />
            </Link>
            
            <Link to="/hookahs/tangiers" className={styles.categoryLink}>
                Tangiers
                <img src={tangiersCategory} />
            </Link>
            
        </div>
    )
}

export default Hookahs
