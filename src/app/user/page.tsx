"use client"
import { useFetch } from "@/shared/api/use-fetch"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function UserPage() {
	const router = useRouter()
	const { data, isLoading } = useFetch(["tokenValid"], {
		endpoint: "/client/qr"
	}, {
		retry: false
	})
	useEffect(() => {
		if (!data && !isLoading) {
			router.push("/user/sign-up")
		}
	}, [isLoading])
  return (
    <div>
      <h1>Добро пожаловать в LoyalT!</h1>
    </div>
  )
}
