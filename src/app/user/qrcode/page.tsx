"use client"
import { Loader } from "@/shared/ui/loader"
import { useQRCode } from "next-qrcode"
import { useFetch } from "@/shared/api/use-fetch"
import { QRCode } from "@/widgets/qrcode"

const QRCodePage = () => {
  const { Canvas } = useQRCode()
  const { data, error, isLoading } = useFetch<string>(["qrcode"], {
    endpoint: "/client/qr",
	}, {
 		refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
	})
  if (isLoading) return <Loader />
  if (error) return <span>error</span>
  if (data) {
    return (
      <QRCode>
        <Canvas
          text={data}
          options={{
            errorCorrectionLevel: "H",
            scale: 4,
            width: 300,
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
