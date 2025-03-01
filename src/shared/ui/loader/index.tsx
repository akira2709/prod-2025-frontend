"use client"
import styles from "./index.module.css"

export const Loader = () => {
	return (
		<div className={ styles.loaderContainer }>
			<div className={ styles.loader }></div>
		</div>
	)
}
