import styles from "./index.module.css"
type Props = {
  companyId: string
  url: string
  title: string
}
export const CompanyInfoContainer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.baseBlock}>
        <img className={styles.icon} src={props.url} alt={props.title} />
      </div>
      <p className={styles.title}>{props.title}</p>
    </div>
  )
}
