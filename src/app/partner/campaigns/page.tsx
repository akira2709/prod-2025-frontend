"use client"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"
type Loyalty = {
  loyalty_id: string
  title: string
  target_usages: number
}
const Campaigns = () => {
  const loyaltyQuery = useFetch<Loyalty[]>(
    ["loyaltySpisokPartner"],
    {
      endpoint: "/partner/loyalty",
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
  if (loyaltyQuery.isLoading) return <Loader />
  if (loyaltyQuery.error) return <span>error</span>
  if (loyaltyQuery.data)
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Ваши программы лояльности</h1>
        <div className={styles.loyalties_wrapper}>
          {loyaltyQuery.data.map((loyalty: Loyalty, index: number) => {
            return (
              <div className={styles.container_wraper} key={index}>
                <Container>
                  <h2 className={styles.title}>{loyalty.title}</h2>
                  <p
                    className={styles.desc}
                  >{`Для получения ${loyalty.target_usages} покупок`}</p>
                </Container>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Campaigns
