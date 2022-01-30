import styles from './HookahItem.module.scss'

const HookahItem = ({ brand, flavor, picture }) => {
    return (
        <div className={styles.hookahItem}>
            {flavor}
            <div className={styles.pictureWrapper}>
                <img
                    src={picture}
                    className={styles.picture}
                />
            </div>
        </div>
    )
}

export default HookahItem
