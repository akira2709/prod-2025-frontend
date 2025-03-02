import axios from "axios"

export const API_URL = "https://prod-team-19-n7cvsvtm.final.prodcontest.ru/api"

export const httpClient = axios.create({
  withCredentials: false,
  baseURL: API_URL,
})

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})

export default httpClient
