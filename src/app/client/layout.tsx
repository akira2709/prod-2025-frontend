"use client"
import { Children } from "@/shared/models/chilren.js"
import { Menu } from "@/widgets/menu"
import { usePathname } from "next/navigation"

const ClientLayout = ({ children }: Children) => {
  const pathName = usePathname()
  const authRoute = ["/client/sign-in", "/client/sign-up"].includes(pathName)
  return (
    <>
      {children}
      {!authRoute && <Menu />}
    </>
  )
}
export default ClientLayout
