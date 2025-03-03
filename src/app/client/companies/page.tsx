"use client"
import styles from "./index.module.css"
import { Error } from "@/shared/ui/error"
import { CompanyInfoContainer } from "@/shared/ui/company-info-container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import { toast } from "sonner"
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
  const { data, error, isLoading } = useFetch<Company[]>(
    ["companies"],
    {
      endpoint: "/client/loyalty",
      method: "get",
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
      retry: false,
    },
  )
  if (isLoading) return <Loader />
  if (error) {
    const message = error.response.data.detail
    toast.error(message)
    return <span>{message}</span>
  }
  if (data)
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Компании</h1>
        <div className={styles.companyList}>
          {data.map((company: Company, index: number) => (
            <CompanyInfoContainer key={index} company={company} />
          ))}
        </div>
      </div>
    )
}

export default CompaniesPage
