import { useQuery } from "@tanstack/react-query"
import httpClient from "../http-client"

type ResponseParams = {
  endpoint: string
  method?: "get" | "post" | "put" | "patch" | "delete"
  data?: object
}
const fetchData = async ({
  endpoint,
  method = "get",
  data,
}: ResponseParams) => {
  const response = await httpClient[method](endpoint, data)
  return response.data
}

export const useFetch = (
  keys: string[],
  { endpoint, method = "get", data }: ResponseParams,
  options = {},
) => {
  return useQuery({
    queryKey: keys,
    queryFn: () => fetchData({ endpoint, method, data }),
    ...options,
  })
}
