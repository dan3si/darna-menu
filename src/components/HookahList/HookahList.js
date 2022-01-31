import hookahs from '../../hookahs'
import HookahItem from '../HookahItem'
import styles from './HookahList.module.scss'

const HookahList = ({ passableBrand, price }) => {
    return (
        <>
            <h2 className={styles.heading}>{passableBrand} - ${price}</h2>

            {hookahs.map(
                ({ brand, flavor, picture, available }) => {
                if (!available || brand !== passableBrand) return null

                return (
                    <HookahItem
                        flavor={flavor}
                        picture={picture}
                    />
                )
                }
            )}
        </>
    )
}

export default HookahList
