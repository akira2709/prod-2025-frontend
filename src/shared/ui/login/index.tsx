"use client"
import styles from "./index.module.css"
import Link from "next/link"
type Props = {
  children: React.ReactNode
  submit: () => void
  title: string
  redirectUrl: string
  redirectTitle: string
  redirectType: "sign-in" | "sign-up"
}

export const Login = (props: Props) => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        {props.children}
        <button onClick={props.submit} className={styles.button}>
          {props.title}
        </button>
        <div className={styles.redirect_wrapper}>
          <Link href={`/${props.redirectUrl}/${props.redirectType}`}>
            {props.redirectTitle}
          </Link>
        </div>
      </div>
    </div>
  )
}
