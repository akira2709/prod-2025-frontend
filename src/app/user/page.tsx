"use client"
import { useFetch } from "@/shared/api/use-fetch"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import styles from "./index.module.css";
export default function UserPage() {
  const router = useRouter()
  const { data, isLoading } = useFetch(
    ["tokenValid"],
    {
      endpoint: "/client/qr",
    },
    {
      retry: false,
    },
  )
  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/user/sign-up")
    }
  }, [isLoading])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добро пожаловать в LoyalT!</h1>
    </div>
  )
}
