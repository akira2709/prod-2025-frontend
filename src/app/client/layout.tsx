"use client"
import { Children } from "@/shared/models/chilren.js"
import { Menu } from "@/widgets/menu"
import { usePathname, useRouter } from "next/navigation"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import { useEffect } from "react"

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
