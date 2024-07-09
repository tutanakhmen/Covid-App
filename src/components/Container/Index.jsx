import  styles from "./Index.module.css"

function Container(props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default Container