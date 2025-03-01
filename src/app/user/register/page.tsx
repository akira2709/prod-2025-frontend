"use client";
import styles from "./register.module.css";
import { useState } from "react";
interface Register {
  name: string;
  email: string;
  password: string;
}
const register = () => {
  const [data, setData] = useState<Register>({
    name: "",
    email: "",
    password: "",
  });
  const processChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const processSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/client/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.zagolovok}>Регистрация</h1>
        <form onSubmit={processSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.inputLabel}>Имя</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={processChange}
              className={styles.inputForm}
            />
            <label htmlFor="email" className={styles.inputLabel}>Почта</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={processChange}
              className={styles.inputForm}
            />
            <label htmlFor="password" className={styles.inputLabel}>Пароль</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={processChange}
              className={styles.inputForm}
            />
          <button type="submit" className={styles.regBtn}>Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default register;
