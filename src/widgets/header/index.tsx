"use client"
import styles from "./index.module.css"
import Link from "next/link"
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/partner" className={styles.links}>
          Главная
        </Link>
        <Link href="/partner/scanner" className={styles.links}>
          Сканировать
        </Link>
        <Link href="/partner/stats" className={styles.links}>
          Статистика
        </Link>
        <Link href="/partner/campaigns" className={styles.links}>
          Кампании
        </Link>
        <div className={styles.profile_link}>
          <img
          className={styles.logo}
            src="https://source.unsplash.com/random/40x40"
            alt="Лого"
          />
          <Link href="/partner/profile" className={styles.links}>
            Профиль
          </Link>
        </div>
      </nav>
    </header>
  )
}
