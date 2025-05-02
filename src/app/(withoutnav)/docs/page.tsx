import styles from "./style.module.scss";

export default function Docs() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Docs</h1>
        <p className={styles.content}>This is a page without a navbar</p>
      </div>
    </div>
  );
}
