import { useState } from "react"
import styles from "./index.module.css"
import { Container } from "@/shared/ui/container"
type Loyalty = {
  title: string
  target_usages: number
  n_count: number
}
type Company = {
  picture_url: string
  name: string
  loyalties: Loyalty[]
}
type Props = {
  company: Company
}

export const CompanyInfoContainer = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.baseBlock} onClick={toggleOpen}>
        <img
          className={styles.icon}
          src={props.company.picture_url}
          alt={props.company.name}
        />
        <p className={styles.title}>{props.company.name}</p>
        <div className={`${styles.arrow} ${isOpen ? styles.up : ""}`} />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {props.company.loyalties.map((loyalty: Loyalty, index: number) => (
            <div key={index} className={styles.promoWrapper}>
              <Container>
                <h2 className={styles.title}>{loyalty.title}</h2>
                <p className={styles.desc}>
                  {loyalty.n_count} из {loyalty.target_usages}
                </p>
              </Container>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
