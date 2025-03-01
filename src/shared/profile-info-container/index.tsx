import styles from "./index.module.css"
type Props = {
  title: string
  text: string
}
export const ProfileInfoContainer = (props: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.desc}>{props.text}</p>
    </div>
  )
}

export default ProfileInfoContainer
