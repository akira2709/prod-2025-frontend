"use client";
import styles from "./sign-in.module.css";
import React from "react";
import { useState } from "react";
interface Enter {
  email: string;
  password: string;
}
const Sign = () => {
  const [data, setData] = useState<Enter>({ email: "", password: "" });
  const processChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const processSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/client/auth/sign-in", {
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
        <h1 className={styles.zagolovok}>Вход</h1>
        <form onSubmit={processSubmit} className={styles.form}>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={processChange}
            className={styles.inputForm}
            placeholder="Имя..."
          />
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Пароль..."
            onChange={processChange}
            className={styles.inputForm}
          />
          <button
            type="submit"
            className={styles.inBtn}
            onClick={processSubmit}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
