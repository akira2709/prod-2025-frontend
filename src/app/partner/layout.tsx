"use client"
import { Children } from "@/shared/models/chilren.js"
import { Menu } from "@/widgets/menu"
import { usePathname } from "next/navigation"

const UserLayout = ({ children }: Children) => {
  return (
    <>
      {children}
    </>
  )
}
export default UserLayout
