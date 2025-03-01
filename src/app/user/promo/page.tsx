import styles from "./index.module.css"
import { Error } from "@/shared/error"
import { CompanyInfoContainer } from "@/shared/company-info-container"
const Promo = () => {
  return (
    <div>
      <h1 className={styles.title}>Компании и промокоды</h1>
      <CompanyInfoContainer companyId="id" iconUrl="url" title="name" availableCount={1} />
    </div>
  )
}

export default Promo
