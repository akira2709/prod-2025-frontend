"use client"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"
import Link from "next/link"
import React, { useState } from "react"
type Loyalty = {
  loyalty_id: string
  title: string
  target_usages: number
}
const Campaigns = () => {
  const [limit, setLimit] = useState<number>(5)
  const [offset, setOffset] = useState<number>(0)
  const loyaltyQuery = useFetch<Loyalty[]>(
    ["loyaltySpisokPartner", limit.toString(), offset.toString()],
    {
      endpoint: `/partner/loyalty?limit=${limit}&offset=${offset}`,
      method: "get",
    },
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchInterval: false,
    },
  )
  if (loyaltyQuery.isLoading) return <Loader />
  if (loyaltyQuery.error) return <span>error</span>
  const handleNextPage = () => setOffset((prev) => prev + limit)
  const handlePrevPage = () => setOffset((prev) => Math.max(0, prev - limit))
  if (loyaltyQuery.data)
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Ваши программы лояльности</h1>
          <Link href="/partner/campaigns/add" className={styles.btn}>
            Добавить программу
          </Link>
        </div>
        <div className={styles.loyalties_wrapper}>
          {loyaltyQuery.data && loyaltyQuery.data.length > 0 ? (
            loyaltyQuery.data.map((loyalty: Loyalty, index: number) => (
              <div className={styles.container_wraper} key={index}>
                <Container>
                  <h2 className={styles.title}>{loyalty.title}</h2>
                  <p className={styles.desc}>
                    {`Для получения ${loyalty.target_usages} покупок`}
                  </p>
                </Container>
              </div>
            ))
          ) : (
            <p className={styles.desc}>Нет программ лояльности</p>
          )}
        </div>
        <div className={styles.pagination}>
          <button
            onClick={handlePrevPage}
            disabled={offset === 0}
            className={styles.btn}
          >
            Назад
          </button>
          <span>{`Страница ${offset / limit + 1}`}</span>
          <button
            onClick={handleNextPage}
            disabled={loyaltyQuery.data && loyaltyQuery.data.length < limit}
            className={styles.btn}
          >
            Вперед
          </button>
        </div>
      </div>
    )
}

export default Campaigns
