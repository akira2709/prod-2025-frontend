"use client"
import { Fetch } from "@/shared/api/use-fetch"
import { Input } from "@/shared/ui/input"
import { Login } from "@/shared/ui/login"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

type SignInResponse = {
  token: string
}

export const SignIn = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async () => {
    const { data, error } = await Fetch<SignInResponse>({
      endpoint: "/client/auth/sign-in",
      method: "post",
      data: {
        email,
        password,
      },
    })
    if (data) {
      localStorage.setItem("token", data.token)
      router.push("/client")
      toast.success("Вы успешно вошли!")
      return
    }
    toast.error(error?.response.data.detail)
  }
  return (
    <>
      <Login
        title={"Вход"}
        submit={handleSubmit}
        redirectUrl="client"
        redirectTitle="Регистрация"
        redirectType="sign-up"
      >
        {" "}
        {/*Костыль, пофиксить */}
        <Input
          value={email}
          changeValue={setEmail}
          placeholder={"Введите email"}
          title={"Email"}
          isRequired
        />
        <Input
          value={password}
          changeValue={setPassword}
          placeholder={"Введите пароль"}
          title={"Password"}
          type={"password"}
          isRequired
        />
      </Login>
    </>
  )
}
