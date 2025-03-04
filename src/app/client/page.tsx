"use client"
import styles from "./index.module.css"
import { useFetch } from "@/shared/api/use-fetch"
const ClientPage = () => {
  const { data } = useFetch(
    ["role"],
    {
      endpoint: "/client/qr",
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      retry: false,
    },
  )
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать в LoyalT!</h1>
    </div>
  )
}
export default ClientPage
