import { useState } from "react"
import styles from "./index.module.css"

type Props = {
  companyId: string
  url: string
  title: string
}

export const CompanyInfoContainer = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.baseBlock} onClick={toggleOpen}>
        <img className={styles.icon} src={props.url} alt={props.title} />
        <p className={styles.title}>{props.title}</p>
        <div className={`${styles.arrow} ${isOpen ? styles.up : ""}`} />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
        </div>
      )}
    </div>
  )
}
