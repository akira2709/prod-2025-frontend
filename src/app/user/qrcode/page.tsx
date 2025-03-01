"use client"
import { Loader } from "@/shared/ui/loader"
import { useQRCode } from "next-qrcode"
import { useFetch } from "@/shared/api/use-fetch"
import { QRCode } from "@/widgets/qrcode"

const QRCodePage = () => {
  const { Canvas } = useQRCode()
  const { data, error, isLoading } = useFetch(["qrcode"], {
    endpoint: "/client/qr",
  })
  if (isLoading) return <Loader />
  if (error) return <span>error</span>
  if (data) {
    return (
      <QRCode>
        <Canvas
          text={"data"}
          options={{
            errorCorrectionLevel: "H",
            scale: 4,
            width: 200,
            color: {
              dark: "#131315",
              light: "#fff",
            },
          }}
        />
      </QRCode>
    )
  }
}

export default QRCodePage
