"use client"
import { Children } from "@/shared/models/chilren.js"
import { Header } from "@/widgets/header"
import styles from "./index.module.css"
const PartnerLayout = ({ children }: Children) => {
  return (
    <>
      {<Header />}
      <div className={styles.containerChildren}>{children}</div>
    </>
  )
}
export default PartnerLayout
