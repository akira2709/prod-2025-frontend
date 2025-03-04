"use client"
import { Header } from "@/widgets/header"
import styles from "./index.module.css"
import { Children } from "@/shared/models/chilren.js"
import { usePathname } from "next/navigation"
import { useFetch } from "@/shared/api/use-fetch"
import { useEffect } from "react"


type Role = { role: null | "CLIENT" | "PARTNER"; user_id: string | null }
const PartnerLayout = ({ children }: Children) => {
  const pathName = usePathname()
  const authRoute = ["/partner/sign-in", "/partner/sign-up"].includes(pathName)
  const { data, error, isLoading } = useFetch<Role & { user_id: string }>(
     ["client-id-in-header"],
     {
       endpoint: "/get/role",
     },
     {
       refetchOnWindowFocus: false,
       refetchOnMount: false,
       refetchInterval: false,
     },
   )
	useEffect(() => {
		console.log("render")
		if (!isLoading && data?.user_id) {
			localStorage.setItem("partner-id", data.user_id)
		}
	}, [isLoading])
  return (
    <>
      {!authRoute && <Header />}
      <div className={styles.containerChildren}>{children}</div>
    </>
  )
}
export default PartnerLayout
