"use server"
import { redirect } from "next/navigation"
const MainPage = () => {
  redirect("/client")
}
export default MainPage
