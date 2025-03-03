"use client"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
type Partner = {
  role: string
  user_id: string
}
const Stats = () => {
  const partnerQuery = useFetch<Partner>(
    ["partnerId"],
    {
      endpoint: "/get/role",
      method: "get",
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  )
  if (partnerQuery.isLoading) return <Loader />
  if (partnerQuery.error) return <span>error</span>
  if (partnerQuery.data)
    return (
      <div>
        <iframe
          src={`https://prod-team-19-n7cvsvtm.final.prodcontest.ru/grafana/public-dashboards/448b1e5d1b6347989b7e08e975bc874b?var-partner_id=${partnerQuery.data.user_id}`}
          width="100%"
          height="600"
        ></iframe>
      </div>
    )
}

export default Stats
