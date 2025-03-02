import Link from "next/link"
import styles from "./index.module.css"
import { QrCode } from "lucide-react"

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <Link className={styles.link} href={"/user/companies"}>
        Промокоды
      </Link>
      <Link className={styles.link} id={styles.qr} href={"/user/qrcode"}>
        QR
      </Link>
      <Link className={styles.link} href={"/user/profile"}>
        Профиль
      </Link>
    </nav>
  )
}
