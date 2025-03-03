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
  const authRoute = [
    "/partner/sign-in",
    "/partner/sign-up",
    "partner/scanner",
  ].includes(pathName)
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
    if (data?.role === null && !isLoading && !authRoute) {
      router.push("/partner/sign-up")
    }
    if (data?.role === "CLIENT" && !authRoute) {
      router.push("/client")
    }
  }, [isLoading])
  if (isLoading && !authRoute) return <Loader />
  return (
    <>
      {!authRoute && <Header />}
      <div className={styles.containerChildren}>{children}</div>
    </>
  )
}
export default PartnerLayout
