import Link from "next/link"
import styles from "./index.module.css"

export const Menu = () => {
	return (
		<nav className={styles.menu}>
            <Link className={styles.link} href="/">Промокоды</Link>
            <Link className={styles.link} href="/about">QR</Link>
            <Link className={styles.link} href="/contact">Профиль</Link>
		</nav>
	)
}
