import { useState } from "react";
import styles from "./index.module.css";
import { Container } from "@/shared/ui/container";
type Loyalty = {
  title: string
  target_usages: number
  n_count: number
}
type Props = {
  picture_url: string
  name: string
  loyalties: Loyalty[]
}

export const CompanyInfoContainer = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.baseBlock} onClick={toggleOpen}>
        <img className={styles.icon} src={props.picture_url} alt={props.name} />
        <p className={styles.title}>{props.name}</p>
        <div className={`${styles.arrow} ${isOpen ? styles.up : ""}`} />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {props.loyalties.map((loyalty: Loyalty, index: number) => (
            <div key={index}>
              <Container>
                <h2 className={styles.title}>{loyalty.title}</h2>
                <p className={styles.desc}>{loyalty.target_usages} из {loyalty.n_count}</p>
              </Container>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
