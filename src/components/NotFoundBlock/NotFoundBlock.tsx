
import styles from "./NotFoundBlock.module.scss"
function NotFoundBlock() {
    return (
      <div>
        <h1 className={styles.root}>
          <span>😓</span>
          <br />
          Ничего не найдено
        </h1>
        <h2 className={styles.description}>К сожалению данная страница отсутствует</h2>
      </div>
    )
}

export default NotFoundBlock