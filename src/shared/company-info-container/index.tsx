import styles from "./index.module.css"
type Props = {
  companyId: string
  iconUrl: string
  title: string
}
export const CompanyInfoContainer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.baseBlock}>
        <img className={styles.icon} src={props.iconUrl} alt={props.title} />
        <h2 className={styles.title}>{props.title}</h2>
      </div>
    </div>
  )
}
