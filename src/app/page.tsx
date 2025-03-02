"use client"
import { Loader } from "@/shared/ui/loader"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
const MainPage = () => {
	const router = useRouter()
	useEffect(() => {
		router.push("/client")
	}, [router])
	return <Loader />
}
export default MainPage
