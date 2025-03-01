"use client"
import { Input } from "@/shared/ui/input"
import { Login } from "@/shared/ui/login"
import { useState } from "react"

export const SignIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = () => {
    console.log("submit")
  }
  return (
    <Login title={"sign in"} submit={handleSubmit}>
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
        isRequired
      />
    </Login>
  )
}
