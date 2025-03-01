import { memo } from "react"
import styles from "./index.module.css"
import clsx from "clsx"
import { IMask, IMaskInput } from "react-imask"


type Props = {
	title: string
	placeholder?: string
	value: string
	changeValue: (value: string) => void
	type?: "number" | "string" | "date"
}

export const Input = memo((props: Props) => {

	const dateValidate = {
		dd: {
			mask: IMask.MaskedRange,
			from: 1,
			to: 31,
		},
		mm: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    yyyy: {
      mask: IMask.MaskedRange,
      from: 2025,
      to: 2500,
    },
	}

	return (
		<div className={ styles.inputContainer }>
			<p className={ clsx(styles.field, "required-field") }>{ props.title }</p>
			<IMaskInput
				className={styles.input}
				placeholder={props.placeholder}
				onAccept={props.changeValue}
				value={props.value}
				mask={
					props.type === "date" ?
					"dd / mm / yyyy" :
					props.type === "number" ?
					"0".repeat(100) :
					"*".repeat(100)
				}
				blocks={dateValidate}
				overwrite={false}
			>
			</IMaskInput>
		</div>
	)
})
