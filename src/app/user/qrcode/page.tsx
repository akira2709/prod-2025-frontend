"use client"
import { Loader } from "@/shared/ui/loader"
import { useQRCode } from "next-qrcode"
import { useFetch } from "@/shared/api/use-fetch"

const QRCodePage = () => {
	const { data, error, isLoading } = useFetch(["qrcode"], {
		endpoint: "/api/client/qr"
	})
	if (isLoading) return <Loader />
	if (error) return <span>error</span>
  const { Canvas } = useQRCode()
  if (data) return
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
}

export default QRCodePage
