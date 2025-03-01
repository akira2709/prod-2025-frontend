'use client';

import React, { useEffect, useState } from 'react';
import { ProfileInfoContainer } from '@/shared/profile-info-container';
import styles from "./profile.module.css";
type User = {
  name: string;
  emai: string;
  birthDate: string;
  gender: "male" | "female";
}
const ProfilePage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        birthDate: '',
        gender: true,
    });
    return (
        <div className={styles.profilePage}>
          <ProfileInfoContainer title="Имя" text={user.name} />
          <ProfileInfoContainer title="Email" text={user.email} />
          <ProfileInfoContainer title="Дата рождения" text={user.birthDate} />
          <ProfileInfoContainer title="Пол" text={user.gender? 'Мужской' : 'Женский'} />
        </div>
    );
};

export default ProfilePage;
