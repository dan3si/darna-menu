import { Link } from "react-router-dom";
import styles from './Hookahs.module.scss'

import alFakherCategory from '../../images/hookahs/categories/al-fakher_category.jpg'
import socialSmokeCategory from '../../images/hookahs/categories/social-smoke_category.jpg'
import fumariCategory from '../../images/hookahs/categories/fumari_category.jpg'
import tangiersCategory from '../../images/hookahs/categories/tangiers_category.jpg'
import darksideCategory from '../../images/hookahs/categories/darkside_category.jpg'

const Hookahs = () => {
    return (
        <div className={styles.hookahs}>
            <h1 className={styles.pageHeading}>Brands</h1>

            <Link to="/darna-menu/hookahs/al-fakher" className={styles.categoryLink}>
                <h2 className={styles.categoryHeading}>Al Fakher - $25</h2>
                <img src={alFakherCategory} className={styles.categoryPicture} />
            </Link>
            
            <Link to="/darna-menu/hookahs/social-smoke" className={styles.categoryLink}>
                <h2 className={styles.categoryHeading}>Social Smoke - $30</h2>
                <img src={socialSmokeCategory} className={styles.categoryPicture} />
            </Link>
            
            <Link to="/darna-menu/hookahs/fumari" className={styles.categoryLink}>
                <h2 className={styles.categoryHeading}>Fumari - $30</h2>
                <img src={fumariCategory} className={styles.categoryPicture} />
            </Link>
            
            <Link to="/darna-menu/hookahs/tangiers" className={styles.categoryLink}>
                <h2 className={styles.categoryHeading}>Tangiers - $35</h2>
                <img src={tangiersCategory} className={styles.categoryPicture} />
            </Link>

            <Link to="/darna-menu/hookahs/darkside" className={styles.categoryLink}>
                <h2 className={styles.categoryHeading}>Darkside - $35</h2>
                <img src={darksideCategory} className={styles.categoryPicture} />
            </Link>
        </div>
    )
}

export default Hookahs
