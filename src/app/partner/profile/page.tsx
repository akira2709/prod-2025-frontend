"use client"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"
import { redirect } from "next/navigation"
import { useQueryClient } from "@tanstack/react-query"
import { FileUploader } from "@/shared/ui/file-uploader"
import { useEffect, useState } from "react"


const ProfilePage = () => {
  const queryClient = useQueryClient()
  const [partnerId, setPartnerId] = useState<string | null>(null)
	const { data, error, isLoading } = useFetch<{ email: string, name: string }>(
    ["partner-profile"],
    {
      endpoint: "/partner/profile",
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      retry: false
    },
  )
  const logout = () => {
    localStorage.removeItem("token")
    queryClient.invalidateQueries({ queryKey: ["partner"] })
    redirect("/partner")
  }
  useEffect(() => {
  	setPartnerId(localStorage.getItem("partner-id"))
  }, [])
  if (isLoading) return <Loader />
  if (error) return <span>Ошибка загрузки профиля</span>
  return (
    <div className={styles.profilePage}>
      <Container>
				<div className={styles.avatarContainer}>
	        <div className={styles.avatarWrapper}>
	          <FileUploader partnerId={partnerId} />
	        </div>
					<div className={styles.infoContainer}>
	          <h2 className={styles.title}>Имя</h2>
	          <p className={styles.desc}>{data?.name}</p>
					</div>
       	</div>
      </Container>
      <Container>
        <h2 className={styles.title}>Email</h2>
        <p className={styles.desc}>{data?.email}</p>
      </Container>
      <button onClick={logout} className={styles.logout}>
        Выйти
      </button>
    </div>
  )
}

export default ProfilePage
