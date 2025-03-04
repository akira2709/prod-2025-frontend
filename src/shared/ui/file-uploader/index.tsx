"use client"
import { Fetch, useFetch } from "@/shared/api/use-fetch"
import styles from "./index.module.css"
import { Plus } from "lucide-react"
import { ChangeEvent, useEffect, useState } from "react"
import { API_URL } from "@/shared/api/http-client"

export const FileUploader = ({ partnerId }: { partnerId: string | null }) => {
	const [image, setImage] = useState<string | undefined>(undefined)

	useEffect(() => {
		setImage(`${API_URL}/api/partner/image?partner_id=${partnerId}`)
	}, [])
	const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		const blob = { file: file };

		const read = (arg: { file: any }) => new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => {
        arg.file = reader.result
        resolve(arg)
      }
      reader.readAsDataURL(arg.file)
    })
	  const reformedBlob = await read(blob) as { file: Blob }
		const { data, error } = await Fetch<string>({
			endpoint: "/partner/image",
			method: "post",
			data: reformedBlob
		})
		setImage(data === null ? undefined : data)
	}
	return (
		<div className={styles.avatarContainer}>
			<Plus className={styles.plus}/>
			<img src={image} className={styles.avatar} />
			<label>
				<input type="file" accept={"image/png"} name={"image"} className={styles.input} onChange={handleUpload}/>
			</label>
		</div>
	)
}
