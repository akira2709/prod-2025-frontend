"use client"
import { Header } from "@/widgets/header"
import styles from "./index.module.css"
import { Children } from "@/shared/models/chilren.js"
import { Menu } from "@/widgets/menu"
import { usePathname, useRouter } from "next/navigation"
import { useFetch } from "@/shared/api/use-fetch"
import { useEffect } from "react"
import { Loader } from "@/shared/ui/loader"

type Role = { role: null | "CLIENT" | "PARTNER" }
const PartnerLayout = ({ children }: Children) => {
  const pathName = usePathname()
  const authRoute = ["/partner/sign-in", "/partner/sign-up"].includes(pathName)
  const router = useRouter()
  const { data, isLoading } = useFetch<Role>(
    ["tokenValid"],
    {
      endpoint: "/get/role",
    },
    {
      retry: false,
    },
  )
  useEffect(() => {
    console.log(data)
    if (data?.role === null && !isLoading && !authRoute) {
      router.push("/partner/sign-up")
    }
    if (data?.role === "CLIENT" && !isLoading && !authRoute) {
      router.push("/client")
    }
  }, [isLoading, authRoute, data?.role, router])
  if (isLoading && !authRoute) return <Loader />
  return (
    <>
      {!authRoute && <Header />}
      <div className={styles.containerChildren}>{children}</div>
    </>
  )
}
export default PartnerLayout
