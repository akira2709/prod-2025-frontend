import { useState } from "react"
import styles from "./index.module.css"
import { Container } from "@/shared/ui/container"
import Image from "next/image"
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
  const [visibleCount, setVisibleCount] = useState(3)
  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
    if (!isOpen) setVisibleCount(3)
  }
  const showMore = () => {
    setVisibleCount((prev) => prev + 3)
  }
  const isMoreLoyalties = visibleCount < props.company.loyalties.length

  return (
    <div className={styles.container}>
      <div className={styles.baseBlock} onClick={toggleOpen}>
        <Image
          className={styles.icon}
          src={props.company.picture_url}
          alt={props.company.name}
        />
        <p className={styles.title}>{props.company.name}</p>
        <div className={`${styles.arrow} ${isOpen ? styles.up : ""}`} />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {props.company.loyalties
            .slice(0, visibleCount)
            .map((loyalty, index) => (
              <div key={index} className={styles.promoWrapper}>
                <Container>
                  <h2 className={styles.title}>{loyalty.title}</h2>
                  <p className={styles.desc}>
                    {loyalty.n_count} из {loyalty.target_usages}
                  </p>
                </Container>
              </div>
            ))}
          {isMoreLoyalties && (
            <div className={styles.arrowWrapper}>
              <div className={styles.arrow} onClick={showMore}></div>
            </div>
          )}
        </div> //Зарефакторить
      )}
    </div>
  )
}
