"use client"
import { ProfileInfoContainer } from '@/shared/profile-info-container';
import { useFetch } from '@/shared/api/use-fetch';
import { Loader } from '@/shared/ui/loader';
import styles from "./index.module.css";

const ProfilePage = () => {
    // const { data, isLoading } = useFetch(["user"], {
    // 	endpoint: "/api/client/profile"
    // })
    // if (isLoading) return <Loader />
	const data = {
		name: "name",
		email: "email",
		birthDate: "12-10-2024",
		gender: "male"
	}
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
