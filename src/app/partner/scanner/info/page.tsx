import styles from "./index.module.css";
import { useClient } from "@/shared/context";
const ScannerInfoPage = () => {
    const  {clientId} = useClient();
  return (
    <div className={styles.wrapper}>page</div>
  )
}

export default ScannerInfoPage