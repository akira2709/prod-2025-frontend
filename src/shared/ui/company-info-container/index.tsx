import { useState } from "react"
import styles from "./index.module.css"
import { Container } from "@/shared/ui/container"
import { API_URL } from "@/shared/api/http-client"

interface Loyalty {
  loyalty_id: string
  title: string
  target_usages: number
  n_count: number
}
export interface Company {
  name: string
  loyalties: Loyalty[]
}

export const CompanyInfoContainer = ({ company }: { company: Company }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)
  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
    if (!isOpen) setVisibleCount(3)
  }
  const showMore = () => {
    setVisibleCount((prev) => prev + 3)
  }
  const isMoreLoyalties = visibleCount < company.loyalties.length
  return (
    <div className={styles.container}>
      <div className={styles.baseBlock} onClick={toggleOpen}>
        <img
          className={styles.icon}
          // src={`${API_URL}/api/partner/image?partner_id=${}`}
          src={undefined}
        />
        <p className={styles.title}>{company.name}</p>
        <div className={`${styles.arrow} ${isOpen ? styles.up : ""}`} />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {company.loyalties.slice(0, visibleCount).map((loyalty, index) => (
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
