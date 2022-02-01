import HookahList from '../../components/HookahList'
import styles from './HookahBrand.module.scss'

const HookahBrandPage = ({ brand, price }) => {
    return (
        <>
            <h2 className={styles.heading}>{brand} - ${price}</h2>
            <HookahList passableBrand={brand} />
        </>
    )
}

export default HookahBrandPage
