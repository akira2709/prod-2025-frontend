"use client"
import { Children } from "@/shared/models/chilren.js"
import { Menu } from "@/widgets/menu"
import { usePathname, useRouter } from "next/navigation"
import { useFetch } from "@/shared/api/use-fetch"
import { useEffect } from "react"
import { Loader } from "@/shared/ui/loader"

const ClientLayout = ({ children }: Children) => {
  const pathName = usePathname()
  const authRoute = ["/client/sign-in", "/client/sign-up"].includes(pathName)
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
    if (!data && !isLoading && !authRoute) {
      console.log(data, authRoute)
      router.push("/client/sign-up")
    }
  }, [isLoading])
  if ((!data || isLoading) && !authRoute) return <Loader />
  return (
    <>
      {children}
      {!authRoute && <Menu />}
    </>
  )
}
export default ClientLayout
