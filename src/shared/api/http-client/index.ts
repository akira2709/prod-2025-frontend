import axios from "axios"

export const API_URL = "https://prod-team-19-n7cvsvtm.final.prodcontest.ru"

export const httpClient = axios.create({
  withCredentials: false,
  baseURL: API_URL + "/api",
})

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})
httpClient.interceptors.response.use((response) => response, (error) => {
  const pathname = window.location.pathname
  const namespace = pathname.startsWith("/client")
    ? "client"
    : pathname.startsWith("/partner")
      ? "partner"
      : "client"
  if ([401, 403].includes(error.status) && ![`/${namespace}/sign-in`, `/${namespace}/sign-up`].includes(pathname)) {
  	console.log(pathname)
    window.location.href = `/${namespace}/sign-up`
  }
  return Promise.reject(error)
})

export default httpClient
