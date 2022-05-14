import styles from './Item.module.scss'

const Item = ({ name, picture, price, available }) => {
    if (!available) return null

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                {`${name} - ${price}$`}
            </div>

            <div className={styles.pictureWrapper}>
                <img
                    src={picture}
                    className={styles.picture}
                    alt={name}
                />
            </div>
        </div>
    )
}

export default Item
