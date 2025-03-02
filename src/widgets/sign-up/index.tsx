"use client"
import { ChangeEvent, useState } from "react"
import { Input } from "@/shared/ui/input"
import { Login } from "@/shared/ui/login"
import { Fetch } from "@/shared/api/use-fetch"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import styles from "./index.module.css"
type SignUpResponse = {
  token: string
}

export const SignUp = () => {
  const router = useRouter()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [date, setDate] = useState<string>("")
  const [gender, setGender] = useState<string>("MALE")

  const handleSubmit = async () => {
    const data = await Fetch<SignUpResponse>({
      endpoint: "/client/auth/sign-up",
      method: "post",
      data: {
        name: name,
        email: email,
        password: password,
        date_birthday: date,
        gender: gender,
      },
    })
    if (data) {
      localStorage.setItem("token", data.token)
      toast.success("Вы зарегестрированы!")
      router.push("/user")
      return
    }
    toast.error("Упс что-то пошло не так...")
  }
  const handleChangeGender = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value)
  }
  return (
    <Login title={"sign up"} submit={handleSubmit}>
      <Input
        placeholder={"Введите ваше имя"}
        value={name}
        changeValue={setName}
      />
      <Input
        placeholder={"Введите ваш email"}
        value={email}
        changeValue={setEmail}
      />
      <Input
        placeholder={"Введите пароль"}
        value={password}
        changeValue={setPassword}
      />
      <Input
        placeholder={"ГГГГ-ММ-ДД"}
        value={date}
        changeValue={setDate}
        type={"date"}
      />
      <select
        onChange={handleChangeGender}
        value={gender}
        className={styles.selector}
      >
        <option value="FEMALE" className={styles.option}>
          женщина
        </option>
        <option value="MALE" className={styles.option}>
          мужчина
        </option>
      </select>
    </Login>
  )
}
