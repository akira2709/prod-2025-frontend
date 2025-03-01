import axios from "axios"

export const API_URL = "http://127.0.0.1:4000"

export const httpClient = axios.create({
	withCredentials: true,
	baseURL: API_URL
})

httpClient.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

export default httpClient
