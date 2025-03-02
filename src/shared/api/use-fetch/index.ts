import { useQuery } from "@tanstack/react-query"
import httpClient from "../http-client"

type ResponseParams = {
  endpoint: string
  method?: "get" | "post" | "put" | "patch" | "delete"
  data?: object
}

const fetchData = async <T>({
  endpoint,
  method = "get",
  data,
}: ResponseParams) => {
  const response = await httpClient[method]<T>(endpoint, data)
  return response.data
}

export const useFetch = <T>(
  keys: string[],
  { endpoint, method = "get", data }: ResponseParams,
  options = {},
) => {
  return useQuery({
    queryKey: keys,
    queryFn: () => fetchData<T>({ endpoint, method, data }),
    ...options,
  })
}

export const Fetch = async <T>({
  endpoint,
  method = "get",
  data,
}: ResponseParams) => {
  try {
    const response = await httpClient[method]<T>(endpoint, data)
    return response.data
  } catch (error) {
    return null
  }
}
