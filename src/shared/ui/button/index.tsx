import styles from "./index.module.css"
import { useFetch } from "@/shared/api/use-fetch"
type Props = {
  client_id: string;
  loyalty_id: string;
  type: "plus-one" | "give";
  children: React.ReactNode
}
export const Button = ({ client_id, loyalty_id, type, children }: Props) => {
    const { refetch: process } = useFetch(
      ["clientLoyaltyArray"],
      {
        endpoint: `/partner/scan/${client_id}/${loyalty_id}/${type}`,
      },
      {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchInterval: false,
        staleTime: 5 * 60 * 1000,
        cacheTime: 5 * 60 * 1000,
      },
    )
  return (
    <button onClick={() => process()} className={styles.button}>
      {children}
    </button>
  )
}
