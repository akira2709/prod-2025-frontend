import styles from "./index.module.css";
type Props = {
    iconUrl: string;
    title: string;
    availableCount: number;
}
export const ProfileInfoContainer = (props: Props) => {
  return (
    <div className={styles.container}>
        <img className={styles.icon} src={props.iconUrl} alt={props.title} />
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.availability}>Доступно: {props.availableCount}</p>
    </div>
  )
}

export default ProfileInfoContainer;