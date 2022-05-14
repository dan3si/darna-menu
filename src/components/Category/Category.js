import { Link } from "react-router-dom";
import styles from './Category.module.scss'

const Category = ({ name, picture, link }) => {
    return (
        <Link to={link} className={styles.link}>
            <h2 className={styles.heading}>{name}</h2>
            <img src={picture} className={styles.picture} alt={`${name} category`} />
        </Link>
    )
}

export default Category
