"use client"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"
import { useRouter } from "next/navigation"
import { useQueryClient } from "@tanstack/react-query"
type Partner = {
  email: string
  name: string
  picture_url: string
}
const Profile = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const partnerQuery = useFetch<Partner>(
    ["partner"],
    {
      endpoint: "/partner/profile",
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
  const logout = () => {
    localStorage.removeItem("token")
    queryClient.invalidateQueries({ queryKey: ["partner"] })
    router.push("/partner")
  }
  if (partnerQuery.isLoading) return <Loader />
  if (partnerQuery.error) return <span>error</span>
  if (partnerQuery.data)
    return (
      <div className={styles.profilePage}>
        <div className={styles.mainBlock}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatar}>
              <img
                src={partnerQuery.data.picture_url}
                alt="Лого"
                style={{ objectFit: "cover" }}
                className={styles.avatar}
              />
            </div>
          </div>
          <div className={styles.nameWrapper}>
            <Container>
              <h2 className={styles.title}>Имя</h2>
              <p className={styles.desc}>{partnerQuery.data.name}</p>
            </Container>
          </div>
        </div>
        <Container>
          <h2 className={styles.title}>Email</h2>
          <p className={styles.desc}>{partnerQuery.data.email}</p>
        </Container>
        <button onClick={logout} className={styles.logout}>
          Выйти
        </button>
      </div>
    )
}

export default Profile
