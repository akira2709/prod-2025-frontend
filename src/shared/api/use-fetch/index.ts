import { useQuery, UseQueryResult } from "@tanstack/react-query"
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
}: ResponseParams): Promise<T> => {
  const response = await httpClient[method]<T>(endpoint, data)
  return response.data
}

type TypedError = {
  response: {
    data: {
      detail: string
    }
  }
}

export const useFetch = <T, E = TypedError>(
  keys: string[],
  { endpoint, method = "get", data }: ResponseParams,
  options = {},
): UseQueryResult<T, E> => {
  return useQuery({
    queryKey: keys,
    queryFn: () => fetchData<T>({ endpoint, method, data }),
    ...options,
  })
}

type FetchResult<T> = {
  data: T | null
  error: TypedError | null
}

export const Fetch = async <T>({
  endpoint,
  method = "get",
  data,
}: ResponseParams): Promise<FetchResult<T>> => {
  const result: FetchResult<T> = { data: null, error: null }
  try {
    const response = await httpClient[method]<T>(endpoint, data)
    result.data = response.data
  } catch (error) {
    result.error = error as TypedError
  }
  return result
}
