"use client"
import styles from "./index.module.css"
import { Error } from "@/shared/ui/error"
import { CompanyInfoContainer } from "@/shared/ui/company-info-container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
type Company = {
  companyId: string
  iconUrl: string
  title: string
}
const CompaniesPage = () => {
  const { data, error, isLoading } = useFetch<Company[]>(["companies"], {
    endpoint: "/partner/loyalty",
  })
  if (isLoading) return <Loader />
  if (error) return <Error text="Не удалось загрузить список компаний" />
  if (data)
    return (
      <>
        <h1 className={styles.title}>Компании</h1>
        <div className={styles.companyList}>
          {data.map((company: Company) => (
            <CompanyInfoContainer
              key={company.companyId}
              companyId={company.companyId}
              url={company.iconUrl}
              title={company.title}
            />
          ))}
        </div>
      </>
    )
}

export default CompaniesPage
