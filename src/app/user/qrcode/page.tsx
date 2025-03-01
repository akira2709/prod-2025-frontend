import { useQRCode } from "next-qrcode";
import styles from "./qrcode.module.css";
import httpClient from "@/shared/api/http-client";
const QRCodePage = async () => {
  const {data} = await httpClient.get("/api/client/qr");
  const { Canvas } = useQRCode()
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {data ? (
          <Canvas
            text={data}
            options={{
              errorCorrectionLevel: "M",
              scale: 4,
              width: 200,
              color: {
                dark: "#000",
                light: "#fff",
              },
            }}
          />
        ) : (
          <p>Загрузка QR-кода...</p>
        )}
      </div>
    </div>
  )
}

export default QRCodePage
