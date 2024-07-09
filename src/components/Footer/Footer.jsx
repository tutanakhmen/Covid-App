import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <div className={styles.container}>
        <nav className={styles.navbar}>
            <div>
                <h1 className={styles.navbar__brand}>Covid ID</h1>
                <p>Developed by tutanakhmen</p>
            </div>
            <div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                       <Link className={styles.navbar__link}to="/">Global</Link> 
                    </li>
                    <li className={styles.navbar__item}>
                    <Link className={styles.navbar__link}to="/covid/Indonesia">Indonesia</Link>
                        </li>
                    <li className={styles.navbar__item}>
                       <Link className={styles.navbar__link}to="/covid/Provinsi">Provinsi</Link> 
                        
                        </li>
                    <li className={styles.navbar__item}>
                    <Link className={styles.navbar__link}to="/covid/About">About</Link> 
                        </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Footer