"use client"
import { Children } from "@/shared/models/chilren.js"
import { Header } from "@/widgets/header"
const PartnerLayout = ({ children }: Children) => {
  return (
    <>
      {<Header />}
      {children}
    </>
  )
}
export default PartnerLayout
