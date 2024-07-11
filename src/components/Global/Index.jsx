import styles from "./Index.module.css"

function Global() {
    return (
        <div className={styles.container}>
        <section className={styles.negara}>
                <h1 className={styles.negara__title}>Global Situation</h1>
                <h3 className={styles.negara__info}>Data Covid Berdasarkan Global</h3>
        </section>

        <div className={styles.card__container}>
            <div className={styles.card}>
                <h1 className={styles.card__heading}>Confirmed</h1>
                <h1 className={styles.card__confirmed}>5.005.646</h1>
            </div>

            <div className={styles.card}>
                <h1 className={styles.card__heading}>Recovered</h1>
                <h1 className={styles.card__recovered}>600.000</h1>
            </div>

            <div className={styles.card}>
                <h1 className={styles.card__heading}>Death</h1>
                <h1 className={styles.card__death}>30.000</h1>
            </div>
        </div>
        </div>
    )
}
export default Global