import styles from "./Index.module.css"

function SituationProvinsi() {
    return (
        <div className={styles.container}>
        <h1 className={styles.provinsi__title}>Provinsi</h1>
        <h3 className={styles.provinsi__info}>Data Covid Berdasarkan Provinsi</h3>

        {/* table */}
        <div className={styles.table__container}>
        <table className={styles.table}>
          <tr className={styles.table__row}>
            <th className={styles.table__column}>NO</th>
            <th className={styles.table__column}>Provinsi</th>
            <th className={styles.table__column}>Positif</th>
            <th className={styles.table__column}>Sembuh</th>
            <th className={styles.table__column}>Dirawat</th>
            <th className={styles.table__column}>meninggal</th>
          </tr>
          <tr className={styles.table__row}>
            <td className={styles.table__td}>1</td>
            <td className={styles.table__td}>Jakarta</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>2</td>
            <td className={styles.table__td}>Jawa barat</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>3</td>
            <td className={styles.table__td}>Jawa Tengah</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>4</td>
            <td className={styles.table__td}>Jawa Timur</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>5</td>
            <td className={styles.table__td}>Banten</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          
        </table>
      </div>
      </div>
    )
}

export default SituationProvinsi