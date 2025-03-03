import styles from "./index.module.css"
type Props = {
  onClick: () => void
  children: React.ReactNode
}
export const Button = ({ onClick, children }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
