"use client"
import styles from "./index.module.css"
import { Error } from "@/shared/ui/error"
import { CompanyInfoContainer } from "@/shared/ui/company-info-container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
type Loyalty = {
  title: string
  target_usages: number
  n_count: number
}
type Company = {
  picture_url: string
  name: string
  loyalties: Loyalty[]
}
const CompaniesPage = () => {
  // const { data, error, isLoading } = useFetch<Company[]>(["companies"], {
  //   endpoint: "/client/loyalty",
  // })
  // if (isLoading) return <Loader />
  // if (error) return <Error text="Не удалось загрузить список компаний" />
  const data = [
    {
      picture_url: "https://example.com/company1.png",
      name: "Компания А",
      loyalties: [
        {
          title: "Скидка на первый заказ",
          target_usages: 100,
          n_count: 10,
        },
        {
          title: "Бесплатная доставка",
          target_usages: 50,
          n_count: 5,
        },
        {
          title: "Скидка на первый заказ",
          target_usages: 100,
          n_count: 10,
        },
        {
          title: "Бесплатная доставка",
          target_usages: 50,
          n_count: 5,
        },
        {
          title: "Скидка на первый заказ",
          target_usages: 100,
          n_count: 10,
        },
        {
          title: "Бесплатная доставка",
          target_usages: 50,
          n_count: 5,
        },
        {
          title: "Скидка на первый заказ",
          target_usages: 100,
          n_count: 10,
        },
        {
          title: "Бесплатная доставка",
          target_usages: 50,
          n_count: 5,
        },
      ],
    },
    {
      picture_url: "https://example.com/company2.png",
      name: "Компания Б",
      loyalties: [
        {
          title: "Кэшбэк 5%",
          target_usages: 200,
          n_count: 20,
        },
        {
          title: "Подарок при покупке",
          target_usages: 80,
          n_count: 8,
        },
      ],
    },
    {
      picture_url: "https://example.com/company3.png",
      name: "Компания В",
      loyalties: [
        {
          title: "Скидка 20% на вторую покупку",
          target_usages: 150,
          n_count: 15,
        },
        {
          title: "Бонусные баллы",
          target_usages: 120,
          n_count: 12,
        },
      ],
    },
    {
      picture_url: "https://example.com/company4.png",
      name: "Компания Г",
      loyalties: [
        {
          title: "Подписка на месяц",
          target_usages: 70,
          n_count: 7,
        },
        {
          title: "Скидка 30% на услуги",
          target_usages: 90,
          n_count: 9,
        },
      ],
    },
  ]
  
  if (data)
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Компании</h1>
        <div className={styles.companyList}>
          {data.map((company: Company, index: number) => (
            <CompanyInfoContainer key={index} company={company} />
          ))}
        </div>
      </div>
    )
}

export default CompaniesPage
