import styles from "./index.module.css"
import { Fetch } from "@/shared/api/use-fetch"
import { toast } from "sonner"
type Props = {
  client_id: string
  loyalty_id: string
  type: "plus-one" | "give"
  children: React.ReactNode
}
export const Button = ({ client_id, loyalty_id, type, children }: Props) => {
  const process = async () => {
    const { data, error } = await Fetch<{ status: string }>({
      endpoint: `/partner/scan/${client_id}/${loyalty_id}/${type}`,
      method: "post",
    })
    if (error !== null) {
      toast.error(error.response.data.detail)
      return
    }
    toast.success("Удалось!")
    window.location.reload();
  }
  return (
    <button onClick={() => process()} className={styles.button}>
      {children}
    </button>
  )
}
