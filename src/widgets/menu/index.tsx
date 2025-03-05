import Link from "next/link"
import styles from "./index.module.css"
import { QrCode } from "lucide-react"

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link className={styles.link} href={"/client/companies"}>
        Партнеры
      </Link>
      <Link className={styles.link} href={"/client/qrcode"}>
        <QrCode className={styles.qrcode} />
      </Link>
      <Link className={styles.link} href={"/client/profile"}>
        Профиль
      </Link>
    </nav>
  )
}
