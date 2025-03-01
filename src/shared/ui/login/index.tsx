"use client"
import styles from "./index.module.css"

type Props = {
  children: React.ReactNode
  submit: () => void
  title: string
}

export const Login = (props: Props) => {
  return (
    <div className={styles.login}>
      {props.children}
      <button onClick={props.submit}>{props.title}</button>
    </div>
  )
}
