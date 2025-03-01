import styles from "./index.module.css";
type Props = {
    text: string;
}
export const Error = (props: Props) => {
  return (
    <div className={styles.wrapper}>
        <p className={styles.error}>{props.text}</p>
    </div>
  )
}
