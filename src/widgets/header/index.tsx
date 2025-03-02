import styles from "./index.module.css"
export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/partner/stats" className={styles.links}>
          Статистика
        </a>
        <a href="/partner/campaigns" className={styles.links}>
          Кампании
        </a>
        <div className={styles.profile_link}>
          <img
            src="https://source.unsplash.com/random/40x40"
            alt="Лого"
            className={styles.logo}
          />
          <a href="/partner/profile" className={styles.links}>
            Профиль
          </a>
        </div>
      </nav>
    </header>
  )
}
