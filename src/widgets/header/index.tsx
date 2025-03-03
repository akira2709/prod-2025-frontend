"use client"
import styles from "./index.module.css"
import Link from "next/link"
import { useFetch } from "@/shared/api/use-fetch"
type Return = {
  role: string
  user_id: string
}
export const Header = () => {
  const { data, error } = useFetch<Return>(
    ["client-id-in-header"],
    {
      endpoint: "/get/role",
      method: "get",
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
    },
  )
  if (error) {
    ;<span>error</span>
  }
  if (data?.user_id) {
    localStorage.setItem("partner-id", data.user_id)
  }
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
