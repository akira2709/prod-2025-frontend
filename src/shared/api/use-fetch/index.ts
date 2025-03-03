import {
  useQueries,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query"
import httpClient from "../http-client"

type requestMethod = "get" | "post" | "put" | "patch" | "delete"

type ResponseParams = {
  endpoint: string
  method?: requestMethod
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
  options = {} as UseQueryOptions<T, E> | {},
): UseQueryResult<T, E> => {
  return useQuery({
    queryKey: keys,
    queryFn: () => fetchData<T>({ endpoint, method, data }),
    ...options,
  })
}

type fetchsRequest<T, E = TypedError> = {
  keys: string[]
  params: ResponseParams
  options: UseQueryOptions<T, E> | {}
}

export const useFetchs = <T, E = TypeError>(
  requests: fetchsRequest<T>[],
): UseQueryResult<T, E>[] => {
  return useQueries({
    queries: requests.map(
      ({ keys, params, options = {} }: fetchsRequest<T>) => {
        return {
          queryKey: keys,
          queryFn: () => fetchData<T>(params),
          ...options,
        }
      },
    ),
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
