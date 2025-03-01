import Link from "next/link"
import styles from "./index.module.css"

export const Menu = () => {
  return (
    <nav className={styles.menu}>
			<Link className={styles.link} href={"/user/promo"}>
        Промокоды
      </Link>
			<Link className={styles.link} href={"/user/qrcode"}>
        QR
      </Link>
			<Link className={styles.link} href={"/user/profile"}>
        Профиль
      </Link>
    </nav>
  )
}
