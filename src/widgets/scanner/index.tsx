"use client"
import { useState } from "react"
import styles from "./index.module.css"
import { Scanner as QrReader } from "@yudiel/react-qr-scanner"
import { toast } from "sonner"
import { Fetch } from "@/shared/api/use-fetch"
import {useClient } from "@/shared/context";
export const Scanner = () => {
	const {setClientId } = useClient();
	const [qrcode, setQrcode] = useState<string>("")
	const handleScan = async (result: any) => {
		const clientId = result.at(0).rawValue
		setClientId(clientId);
		const { data, error } = await Fetch({
			endpoint: `/partner/scan/${clientId}`
		})
		console.log(data)
	}
	const handleError = (error: any) => {
		toast.error("Ошибка сканирования")
	}
	return (
		<QrReader
			onScan={handleScan}
			onError={handleError}
			classNames={{
				container: styles.container,
				video: styles.scanner
			}}
		/>
	)
}
