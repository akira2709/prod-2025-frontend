"use client"
import styles from "./index.module.css"
import Link from "next/link"
import { redirect } from "next/navigation"
import { CircleUserRound, ChartNoAxesCombined, ScanQrCode } from "lucide-react"
import clsx from "clsx"
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/partner" className={clsx(styles.links, styles.partner)}>
          Главная
        </Link>
        <div
          className={styles.container}
          onClick={() => redirect("/partner/scanner")}
        >
          <ScanQrCode />
          <p className={clsx(styles.links, styles.scanner)}>Сканировать</p>
        </div>
        <div
          className={styles.container}
          onClick={() => redirect("/partner/stats")}
        >
          <ChartNoAxesCombined />
          <p className={clsx(styles.links, styles.stats)}>Статистика</p>
        </div>
        <div
          className={styles.container}
          onClick={() => redirect("/partner/campaigns")}
        >
          <p className={clsx(styles.links, styles.campaigns)}>Кампании</p>
        </div>
        <div
          className={styles.container}
          onClick={() => redirect("/partner/profile")}
        >
          <CircleUserRound />
          <p className={clsx(styles.links, styles.profile)}>Профиль</p>
        </div>
      </nav>
    </header>
  )
}
