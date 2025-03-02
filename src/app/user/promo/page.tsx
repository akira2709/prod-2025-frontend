import styles from "./index.module.css"
import { Error } from "@/shared/error"
import { CompanyInfoContainer } from "@/shared/company-info-container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
type Company = {
  companyId: string
  iconUrl: string
  title: string
}
const Promo = () => {
  const { data, error, isLoading } = useFetch(["companies"], {
    endpoint: "/partner/loyalty",
  })
  if (isLoading) return <Loader />
  if (error) return <Error text="Не удалось загрузить список компаний" />
  return (
    <div>
      <h1 className={styles.title}>Компании и промокоды</h1>
      <div className={styles.companyList}>
        {data?.forEach((company: Company) => {
          ;<CompanyInfoContainer
            key={company.companyId}
            companyId={company.companyId}
            iconUrl={company.iconUrl}
            title={company.title}
          />
        })}
      </div>
    </div>
  )
}

export default Promo
