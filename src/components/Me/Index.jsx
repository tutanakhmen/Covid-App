import styles from "./Index.module.css"
import image from "../../assets/Hasan.png"
function Me() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Hasan Albanna</h2>
                    <h3 className={styles.hero__genre}>About Me</h3>
                    <p className={styles.hero__desc}>
                        Programmer junior yang tertarik dengan IoT & AI serta game Developer untuk kemajuan teknologi. saat ini sedang menempuh jurusan S1 Teknik Informatika di STT Terpadu Nurul Fikri. saya ucapkan terimakasih kepada kak Aufa selaku dosen Frontend saya pada semester 7 ini. menurut saya, kemampuan frontend merupaakan kemampuan wajib bagi masing-masing developer.
                    </p>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__img} src={image} alt="" />
                </div>
            </section>
        </div>
    )
}
export default Me