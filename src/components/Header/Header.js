import styles from './Header.module.scss'
import hookahLogo from '../../images/hookah-logo.png'

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/darna-menu" className={styles.toHomeLink}>
                <img src={hookahLogo} className={styles.logo} />
                <span className={styles.homeInscrption}>HOME</span>
            </Link>
        </header>
    )
}

export default Header
