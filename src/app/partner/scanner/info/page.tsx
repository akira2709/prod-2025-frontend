"use client"
import styles from "./index.module.css"
import { useClient } from "@/shared/context"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import { Button } from "@/shared/ui/button"
type Loyalty = {
  loyalty_id: string
  title: string
  target_usages: number
  n_count: number
}
const ScannerInfoPage = () => {
  const { clientId } = useClient()
  const loyaltyQuery = useFetch<Loyalty[]>(
    ["clientLoyaltyArray"],
    {
      endpoint: `/partner/scan/${clientId}`,
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
        <h1 className={styles.title}>Текущие программы лояльности</h1>
        {loyaltyQuery.data.map((loyalty, index) => (
          <div key={index} className={styles.promoWrapper}>
            <Container>
              <h2 className={styles.title}>{loyalty.title}</h2>
              <p className={styles.desc}>
                {loyalty.n_count} из {loyalty.target_usages} выполнено
              </p>
            </Container>
            <div className={styles.buttonGroup}>
              <Button client_id={clientId} loyalty_id={loyalty.loyalty_id} type={"plus-one"}>
                Добавить
              </Button>
              <Button client_id={clientId} loyalty_id={loyalty.loyalty_id} type={"give"}>
                Выдать
              </Button>
            </div>
          </div>
        ))}
      </div>
    )
}

export default ScannerInfoPage
