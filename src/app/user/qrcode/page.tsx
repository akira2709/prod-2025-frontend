"use client"

import React, { useEffect, useState } from "react"
import { useQRCode } from "next-qrcode"
import styles from "./qrcode.module.css"
const QRCodePage = () => {
  const [qrValue, setQrValue] = useState<string>("")
  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await fetch("/api/client/qr")
        setQrValue(await response.url)
      } catch (error) {
        console.log(error)
      }
    }
    fetchQRCode()
  }, [])
  const { Canvas } = useQRCode()
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {qrValue ? (
          <Canvas
            text={qrValue}
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
