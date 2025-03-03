"use client"
import { Header } from "@/widgets/header"
import styles from "./index.module.css"
import { Children } from "@/shared/models/chilren.js"
import { Menu } from "@/widgets/menu"
import { usePathname } from "next/navigation"

type Role = { role: null | "CLIENT" | "PARTNER"; user_id: string | null }
const PartnerLayout = ({ children }: Children) => {
  const pathName = usePathname()
  const authRoute = ["/partner/sign-in", "/partner/sign-up"].includes(pathName)

  return (
    <>
      {!authRoute && <Header />}
      <div className={styles.containerChildren}>{children}</div>
    </>
  )
}
export default PartnerLayout
