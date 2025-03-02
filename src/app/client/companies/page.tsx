"use client"
import styles from "./index.module.css"
import { Error } from "@/shared/ui/error"
import { CompanyInfoContainer } from "@/shared/ui/company-info-container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
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
const CompaniesPage = () => {
  // const { data, error, isLoading } = useFetch<Company[]>(["companies"], {
  //   endpoint: "/partner/loyalty",
  // })
  // if (isLoading) return <Loader />
  // if (error) return <Error text="Не удалось загрузить список компаний" />
  // if (data)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Компании</h1>
      <div className={styles.companyList}>
        {/* {data.map((id: number, company: Company) => (
            <CompanyInfoContainer
              key={id}
              company={company}
            />
          ))} */}
      </div>
    </div>
  )
}

export default CompaniesPage
