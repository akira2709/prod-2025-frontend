import styles from "./index.module.css"

export const QRCode = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.qrcodeContainer}>
			<div className={styles.qrcode}>
				{children}
			</div>
		</div>
	)
}
