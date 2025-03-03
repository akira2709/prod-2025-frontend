"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Fetch } from "@/shared/api/use-fetch"
import { Input } from "@/shared/ui/input"
import styles from "./CreateLoyalty.module.css"

export const CreateLoyalty = () => {
  const router = useRouter()
  const [title, setTitle] = useState<string>("")
  const [targetUsages, setTargetUsages] = useState<string>("")
  
  const handleSubmit = async () => {
    if (!title || !targetUsages) {
      toast.error("Все поля должны быть заполнены")
      return
    }
    const { data, error } = await Fetch<{ status: string }>({
      endpoint: "/partner/create-loyalty",
      method: "post",
      data: { title, target_usages: Number(targetUsages) }
    })
    if (error) {
      toast.error(error.response.data.detail)
      return
    }
    toast.success("Программа лояльности добавлена!")
    router.push("/partner/loyalty")
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Добавить новую программу лояльности</h1>
      <Input
        value={title}
        changeValue={setTitle}
        placeholder="Введите название"
        title="Название"
        isRequired
      />
      <Input
        value={targetUsages}
        changeValue={setTargetUsages}
        placeholder="Введите количество"
        title="Количество"
        type="number"
        isRequired
      />
      <button onClick={handleSubmit} className={styles.button}>
        Создать программу
      </button>
    </div>
  )
}
