"use client"
import { API_URL } from "@/shared/api/http-client"
import { useFetch } from "@/shared/api/use-fetch"
import { Role } from "@/shared/models/chilren"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"

const Stats = () => {
	const partnerQuery = useFetch<Role & { user_id: string }>(
    ["partnerId"],
    {
      endpoint: "/get/role",
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      retry: false
    },
  )
  if (partnerQuery.isLoading) return <Loader />
  if (partnerQuery.error) return <span>error</span>
  if (partnerQuery.data)
    return (
      <iframe
        src={`${API_URL}/grafana/d/bedo0n5d7q3nkc/kolichestvo-pokazov?var-partner_id=${partnerQuery.data.user_id}&kiosk`}
        className={styles.grafana}
      ></iframe>
    )
}

export default Stats
