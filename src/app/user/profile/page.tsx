"use client"
import { ProfileInfoContainer } from '@/shared/profile-info-container';
import { useFetch } from '@/shared/api/use-fetch';
import { Loader } from '@/shared/ui/loader';
import styles from "./index.module.css";

const ProfilePage = () => {
    const { data, error, isLoading } = useFetch(["user"], {
    	endpoint: "/client/profile"
    })
    if (isLoading) return <Loader />
    if (error) return <span>error</span>
    return (
	    <div className={styles.profilePage}>
			<h1 className={styles.title}>Профиль</h1>
		    <ProfileInfoContainer title="Имя" text={data.name} />
		    <ProfileInfoContainer title="Email" text={data.email} />
		    <ProfileInfoContainer title="Дата рождения" text={data.birthDate} />
		    <ProfileInfoContainer title="Пол" text={data.gender === "male" ? 'Мужской' : 'Женский'} />
	    </div>
    )
};

export default ProfilePage;
