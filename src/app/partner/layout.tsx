"use client"
import { Header } from "@/widgets/header"
import styles from "./index.module.css"
import { Children } from "@/shared/models/chilren.js"
import { Menu } from "@/widgets/menu"
import { usePathname, redirect } from "next/navigation"
import { useFetch } from "@/shared/api/use-fetch"
import { useEffect, useState } from "react"
import { Loader } from "@/shared/ui/loader"

type Role = { role: null | "CLIENT" | "PARTNER"; user_id: string | null }
const PartnerLayout = ({ children }: Children) => {
  const pathName = usePathname()
  const authRoute = ["/partner/sign-in", "/partner/sign-up"].includes(pathName)
  const { data, isLoading } = useFetch<Role>(
    ["tokenValid"],
    {
      endpoint: "/get/role",
    },
    {
      retry: false,
    },
  )
  const [redirectPath, setRedirectPath] = useState<string | false>(false)
  useEffect(() => {
    if (!isLoading && data) {
      if (data.role === null && !authRoute) {
        setRedirectPath("/partner/sign-up")
      }
      if (data.role === "CLIENT") {
        setRedirectPath("/client")
      }
    }
  }, [data, isLoading, authRoute])
  if (redirectPath !== false) {
    redirect(redirectPath)
  }
  if (isLoading && !authRoute) return <Loader />
  return (
    <>
      {!authRoute && <Header />}
      <div className={styles.containerChildren}>{children}</div>
    </>
  )
}
export default PartnerLayout
