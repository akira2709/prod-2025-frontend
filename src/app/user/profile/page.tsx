"use client"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"

type User = {
  name: string
  email: string
  date_birthday: string
  gender: string
}

const ProfilePage = () => {
  const { data, error, isLoading } = useFetch<User>(
    ["user"],
    {
      endpoint: "/client/profile",
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  )
  if (isLoading) return <Loader />
  if (error) return <span>error</span>
  if (data)
    return (
      <div className={styles.profilePage}>
        <h1 className={styles.profile}>Профиль</h1>
        <Container>
          <h2 className={styles.title}>Имя</h2>
          <p className={styles.desc}>{data.name}</p>
        </Container>
        <Container>
          <h2 className={styles.title}>Email</h2>
          <p className={styles.desc}>{data.email}</p>
        </Container>
        <Container>
          <h2 className={styles.title}>Дата рождения</h2>
          <p className={styles.desc}>{data.date_birthday}</p>
        </Container>
        <Container>
          <h2 className={styles.title}>Пол</h2>
          <p className={styles.desc}>
            {data.gender === "MALE" ? "Мужской" : "Женский"}
          </p>
        </Container>
      </div>
    )
}

export default ProfilePage
