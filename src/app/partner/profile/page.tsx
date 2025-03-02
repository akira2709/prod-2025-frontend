"use client"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"
const Profile = () => {
  // const { data, error, isLoading } = useFetch(
  //   ["partner"],
  //   {
  //     endpoint: "/partner/profile",
  //   },
  //   {
  //     refetchOnWindowFocus: false,
  //     refetchOnMount: false,
  //     refetchInterval: false,
  //     staleTime: 5 * 60 * 1000,
  //     cacheTime: 5 * 60 * 1000,
  //   },
  // )
  // if (isLoading) return <Loader />
  // if (error) return <span>error</span>
  // if (data) console.log(data)
  return (
    <div className={styles.profilePage}>
      <div className={styles.mainBlock}>
        <div className={styles.avatarWrapper}>
          <Container>
            <img src={"23"} alt="Лого" className={styles.avatar} />
          </Container>
        </div>
        <div className={styles.nameWrapper}>
          <Container>
            <h2 className={styles.title}>Имя</h2>
            <p className={styles.desc}>{"Пятерочка"}</p>
          </Container>
        </div>
      </div>
      <Container>
        <h2 className={styles.title}>Ваши акции</h2>
        <p className={styles.desc}>{"Доступно 5 акций"}</p>
      </Container>
    </div>
  )
}

export default Profile
