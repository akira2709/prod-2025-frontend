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
  if ([401, 403].includes(error.status)) {
  	console.log(pathname)
    const namespace = pathname.startsWith("/client")
      ? "client"
      : pathname.startsWith("/partner")
        ? "partner"
        : "client"
    window.location.href = `/${namespace}/sign-up`
  }
  return Promise.reject(error)
})

export default httpClient
