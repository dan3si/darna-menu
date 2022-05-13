import styles from './CategoryHeader.module.scss'

const CategoryHeader = ({ header, subHeader }) => {
    return (
        <>
            <h1 className={styles.header}>{header}</h1>
            <h2 className={styles.subHeader}>{subHeader}</h2>
        </>
    )
}

export default CategoryHeader
