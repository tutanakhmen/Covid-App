import styles from "./Form.module.css"
import image from "../../assets/form.png"

function Form() {

    return (
        <div className={styles.container}>
           <section className={styles.form}>
            <div className={styles.form__left}>
                <img className={styles.form__img} src={image} alt="" />
            </div>

            <div className={styles.form__right}>
                <h2 className={styles.form__title}>Form Covid</h2>
                <form action="title">
                    <div className={styles.form__group}>
                        <label htmlFor="" className={styles.form__label}>Provinsi</label>
                        <input id="title" className={styles.form__input} type="text" name="title"/>
                    </div>
                    <div className={styles.form__group}>
                            <label htmlFor="year" className={styles.form__label}>Status</label>
                            <input id="year"className={styles.form__input} type="text" name="year"/>
                    </div>
                    <div className={styles.form__group}>
                            <label htmlFor="year" className={styles.form__label}>Jumlah</label>
                            <input id="year"className={styles.form__input} type="text" name="year"/>
                    </div>
                        <button className={styles.form__button}>Submit</button>
                </form>
            </div>
           </section>
        </div>
    )
}

export default Form