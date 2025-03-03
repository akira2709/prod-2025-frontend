import axios from "axios"
import { redirect, usePathname } from "next/navigation"

export const API_URL = "https://prod-team-19-n7cvsvtm.final.prodcontest.ru/api"

export const httpClient = axios.create({
  withCredentials: false,
  baseURL: API_URL,
})

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})
httpClient.interceptors.response.use((config) => {
  const pathname = usePathname()
  if ([401, 403].includes(config.status)) {
    const namespace = pathname.startsWith("/client")
      ? "client"
      : pathname.startsWith("/partner")
        ? "partner"
        : "client"
    redirect(`/${namespace}/sign-up`)
  }
  return config
})

export default httpClient
