import styles from "./Provinsi.module.css"

function Provinsi() {
    return (
      <div className={styles.container}>
        <h1 className={styles.provinsi__title}>Situation by Provinces</h1>
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

          <tr className={styles.table__row}>
            <td className={styles.table__td}>6</td>
            <td className={styles.table__td}>Yogyakarta</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>7</td>
            <td className={styles.table__td}>Kalimantan Timur</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>8</td>
            <td className={styles.table__td}>Bali</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>9</td>
            <td className={styles.table__td}>Sumatera Utara</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>10</td>
            <td className={styles.table__td}>Riau</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>11</td>
            <td className={styles.table__td}>Sulawesi Selatan</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>12</td>
            <td className={styles.table__td}>Sumatera Barat</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>13</td>
            <td className={styles.table__td}>Nusa Tenggara Barat</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>14</td>
            <td className={styles.table__td}>Kalimantan Selatan</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>15</td>
            <td className={styles.table__td}>Sumatera Selatan</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>16</td>
            <td className={styles.table__td}>Lampung</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>17</td>
            <td className={styles.table__td}>Kepulauan Riau</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>18</td>
            <td className={styles.table__td}>Bangka Belitung</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>19</td>
            <td className={styles.table__td}>Kalimantan Barat</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>20</td>
            <td className={styles.table__td}>Sulawesi Tengah</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>21</td>
            <td className={styles.table__td}>Kalimantan Tengah</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>22</td>
            <td className={styles.table__td}>Sulawesi Utara</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>23</td>
            <td className={styles.table__td}>Papua</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>24</td>
            <td className={styles.table__td}>Kalimantaran Utara</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>25</td>
            <td className={styles.table__td}>Aceh</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>26</td>
            <td className={styles.table__td}>Jambi</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>27</td>
            <td className={styles.table__td}>Nusa Tenggara Barat</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>28</td>
            <td className={styles.table__td}>Papua Barat</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>29</td>
            <td className={styles.table__td}>Bengkulu</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>30</td>
            <td className={styles.table__td}>Sulawesi Tenggara</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>31</td>
            <td className={styles.table__td}>Maluku</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>32</td>
            <td className={styles.table__td}>Sulawesi Barat</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>33</td>
            <td className={styles.table__td}>Maluku Utara</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
            <td className={styles.table__td}>0</td>
          </tr>

          <tr className={styles.table__row}>
            <td className={styles.table__td}>34</td>
            <td className={styles.table__td}>Gorontalo</td>
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

export default Provinsi