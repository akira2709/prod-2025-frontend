'use client';

import { useEffect, useState } from 'react';
import { ProfileInfoContainer } from '@/shared/profile-info-container';
import styles from "./profile.module.css";
import httpClient from "@/shared/api/http-client";
type User = {
  name: string;
  emai: string;
  birthDate: string;
  gender: "male" | "female";
}
const ProfilePage = async () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        birthDate: '',
        gender: true,
    });
    const { data } = await httpClient.get("/api/client/profile");
    return (
        <div className={styles.profilePage}>
          <ProfileInfoContainer title="Имя" text={data.name} />
          <ProfileInfoContainer title="Email" text={data.email} />
          <ProfileInfoContainer title="Дата рождения" text={data.birthDate} />
          <ProfileInfoContainer title="Пол" text={data.gender === "male" ? 'Мужской' : 'Женский'} />
        </div>
    );
};

export default ProfilePage;
