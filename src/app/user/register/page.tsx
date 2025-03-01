'use client'
import styles from "./enter.module.css";
import {useState} from "react";
interface Register {
  name: string;
  email: string;
  password: string;
}
const enter = () => {
  const [data, setData] = useState<Register>({
    name: "",
    email: "",
    password: ""
  })
  const processChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const processSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/client/auth/sign-up", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  });
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.zagolovok}>Регистрация</h1>
        <form onSubmit={processSubmit} className={styles.form}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={processChange}
            />
          </label>
          <label>
            Почта
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={processChange}
            />
          </label>
          <label>
            Пароль
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={processChange}
            />
          </label>
          <button type="submit">Зарегистрироваться</button> 
        </form>
      </div>
    </div>
  )
}

export default enter