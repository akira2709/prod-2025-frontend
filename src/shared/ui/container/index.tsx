import styles from "./index.module.css"
type Props = {
  children: React.ReactNode
}
export const Container = (props: Props) => {
  return <div className={styles.container}>{props.children}</div>
}
