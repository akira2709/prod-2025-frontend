"use client"
import { useState } from "react"
import { Input } from "@/shared/ui/input"
import { Login } from "@/shared/ui/login"

export const SignUp = () => {
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [date, setDate] = useState<string>("")
	const [gender, setGender] = useState<string>("")

	const handleSubmit = () => {
		console.log("submit")
	}

	return (
		<Login title={"sign up"} submit={handleSubmit}>
			<Input placeholder={"Введите ваше имя"} value={name} changeValue={setName}/>
			<Input placeholder={"Введите ваш email"} value={email} changeValue={setEmail}/>
			<Input placeholder={"Введите пароль"} value={password} changeValue={setPassword}/>
			<Input placeholder={"Введите ваш дату рождения"} value={date} changeValue={setDate} type={"date"}/>
		</Login>
	)
}
