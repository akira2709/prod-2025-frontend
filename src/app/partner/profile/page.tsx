"use client"
import { Container } from "@/shared/ui/container"
import { useFetch } from "@/shared/api/use-fetch"
import { Loader } from "@/shared/ui/loader"
import styles from "./index.module.css"
const Profile = () => {
    const { data, error, isLoading } = useFetch(
      ["partner"],
      {
        endpoint: "/partner/profile",
      },
      {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
        staleTime: 5 * 60 * 1000,
        cacheTime: 5 * 60 * 1000,
      },
    )
    if (isLoading) return <Loader />
    if (error) return <span>error</span>
    if (data)
      console.log(data);
  return (
    <div>Profile</div>
  )
}

export default Profile