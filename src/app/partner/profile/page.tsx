"use client"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"
import { useRouter } from "next/navigation"
import { useQueryClient } from "@tanstack/react-query"
import React from "react"
import { Fetch } from "@/shared/api/use-fetch"
import { toast } from "sonner"
type Partner = {
  email: string
  name: string
}
type Image = {
  picture_url: string
}
type Everything = {
  email: string
  name: string
  // picture_url: string
}
const Profile = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const partnerId = localStorage.getItem("partner-id")
  const partnerQuery = useFetch<Partner>(
    ["partner-profile"],
    {
      endpoint: "/partner/profile",
      method: "get",
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
    },
  )
  const uploadImage = async (file: File) => {
    const formData = new FormData()
    formData.append("file", file)
    try {
      const { data, error } = await Fetch<{ status: string }>({
        endpoint: `/partner/image`,
        method: "post",
        data: formData,
      })
      if (error) {
        toast.error("Не удалось загрузить изображение")
        return
      }
      toast.success("Изображение успешно загружено!")
      queryClient.invalidateQueries({ queryKey: ["partner"] })
    } catch (error) {
      toast.error("Произошла ошибка при загрузке изображения")
    }
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith("image/")) {
      uploadImage(file)
    } else {
      toast.error("Пожалуйста, выберите изображение")
    }
  }
  const logout = () => {
    localStorage.removeItem("token")
    queryClient.invalidateQueries({ queryKey: ["partner"] })
    router.push("/partner")
  }
  if (partnerQuery.isLoading) return <Loader />
  if (partnerQuery.error) return <span>Ошибка загрузки профиля</span>
  return (
    <div className={styles.profilePage}>
      <div className={styles.mainBlock}>
        <div className={styles.avatarWrapper}>
          <img
            src={`https://prod-team-19-n7cvsvtm.final.prodcontest.ru/api/partner/image?partner_id=${partnerId}`}
            alt="Лого"
            className={styles.avatar}
          />
        </div>
        <div className={styles.nameWrapper}>
          <Container>
            <h2 className={styles.title}>Имя</h2>
            <p className={styles.desc}>{partnerQuery.data?.name}</p>
          </Container>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
      </div>
      <Container>
        <h2 className={styles.title}>Email</h2>
        <p className={styles.desc}>{partnerQuery.data?.email}</p>
      </Container>
      <button onClick={logout} className={styles.logout}>
        Выйти
      </button>
    </div>
  )
}

export default Profile
